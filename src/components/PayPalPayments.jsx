import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from "react";

export default function PayPalPayments({cost, isDisabled}) {
    const [message, setMessage] = useState("");

    // Функция для создания заказа
    const createOrder = async () => {
        try {
            const response = await fetch("http://192.168.1.69:8080/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cart: [
                        {
                            id: "ticket",
                            quantity: 1, // Убедитесь, что передаете число
                        },
                    ],
                    purchase_units: [
                        {
                            amount: {
                                currencyCode: "GBP", // Укажите валюту
                                value: `${cost}`, // Сумма заказа
                            },
                        },
                    ],
                }),
            });

            const orderData = await response.json();

            if (response.ok && orderData.id) {
                return orderData.id;
            } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : "Unknown error occurred.";

                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error(error);
            setMessage(`Could not initiate PayPal Checkout: ${error.message}`);
        }
    };

    // Функция для обработки подтверждения платежа
    const onApprove = async (data, actions) => {
        try {
            const response = await fetch(`http://192.168.1.69:8080/api/orders/${data.orderID}/capture`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const orderData = await response.json();
            const errorDetail = orderData?.details?.[0];

            if (response.ok) {
                if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                    return actions.restart();
                } else if (errorDetail) {
                    throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
                } else {
                    const transaction = orderData.purchase_units[0].payments.captures[0];
                    setMessage(`Transaction ${transaction.status}: ${transaction.id}`);
                    console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
                }
            } else {
                throw new Error("Transaction could not be captured.");
            }
        } catch (error) {
            console.error(error);
            setMessage(`Sorry, your transaction could not be processed: ${error.message}`);
        }
    };
console.log(message)

    return (
        <div>
            <PayPalButtons
                disabled={isDisabled}
                style={{
                    shape: "rect",
                    layout: "horizontal",
                    color: "gold",
                    label: "pay",
                }}
                createOrder={createOrder}
                onApprove={onApprove}
            />
            {message && <div>{message}</div>}
        </div>
    );
}