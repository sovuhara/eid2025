import React from "react";
import "../index.css";
import moonImage from "../images/moon.png"; // Импорт изображения
import FixedButton from "./FixedButton";

const Header = ({ language }) => {
  const texts = {
    en: {
      eventTitle: "EID AL-FITR 2025",
      greeting: "As-salamu alaykum, dear sisters!",
      invitation:
        "We are excited to invite you and your children (girls of all ages and boys up to 18 years old) to celebrate Eid al-Fitr 2025 with us!",
      atmosphere:
        "Let’s come together to create a joyful and unforgettable atmosphere!",
      lookingForward: "We are looking forward to share this day with you!",
      date: "Date:",
      eventDate: "April 2, 13:00 - 19:00",
      location: "Location:",
      eventLocation:
        "Central London (8-minute walk from Vauxhall station), a cozy and spacious hall, with private parking nearby and a park with a playground for your convenience.",
      ticketsLeft: "Only 70 tickets left",
      fullNamePlaceholder: "Full name",
      whatsappPlaceholder: "WhatsApp number",
      ticketOptions: [
        { type: "Adult", price: 35, label: "£35 Adult" },
        { type: "Teen", price: 25, label: "£25 Teen" },
        { type: "Child", price: 20, label: "£20 Child (3-13)" },
      ],
      orderTickets: "Order Tickets",
    },
    ru: {
      eventTitle: "ИД АЛЬ-ФИТР 2025",
      greeting: "Ассаламу алейкум, дорогие сестры!",
      invitation:
        "Мы рады пригласить вас и ваших детей (девочек любого возраста и мальчиков до 18 лет) отпраздновать Ид аль-Фитр 2025 вместе с нами!",
      atmosphere: "Давайте вместе создадим радостную и незабываемую атмосферу!",
      lookingForward: "Мы с нетерпением ждем встречи с вами в этот день!",
      date: "Дата:",
      eventDate: "2 апреля, 13:00 - 19:00",
      location: "Местоположение:",
      eventLocation:
        "Центр Лондона (8 минут пешком от станции Vauxhall), уютный и просторный зал, рядом парковка и парк с детской площадкой.",
      ticketsLeft: "Осталось всего 70 билетов",
      fullNamePlaceholder: "Полное имя",
      whatsappPlaceholder: "Номер WhatsApp",
      ticketOptions: [
        { type: "Adult", price: 35, label: "£35 Взрослый" },
        { type: "Teen", price: 25, label: "£25 Подросток" },
        { type: "Child", price: 20, label: "£20 Ребёнок (3-13)" },
      ],
      orderTickets: "Заказать билеты",
    },
  };

  const currentTexts = texts[language] || texts.en; // По умолчанию английский

  return (
    <header className="header">
      <div style={{ display: "flex", width: "100%", height: 360 }}>
        <div className="header-content">
          <span className="header-text">{currentTexts.eventTitle}</span>
          <p id="smallText">
            <b>{currentTexts.greeting}</b> <br />
            <br />
            {currentTexts.invitation} <br />
            <br />
            {currentTexts.atmosphere}
            <br />
            {currentTexts.lookingForward}
          </p>
        </div>
        <img src={moonImage} alt="IMG" className="moon-image" />
      </div>

      <div className="header-info">
        <div className="containInfo">
          <span id="date">{currentTexts.date}</span>
          <br />
          <span style={{ opacity: 0.7, fontSize: 17, width: "90%" }}>
            {currentTexts.eventDate}
          </span>
          <br />
          <br />
        </div>
        <div className="containInfo">
          <span id="date">{currentTexts.location}</span>
          <br />
          <span style={{ opacity: 0.7, fontSize: 10, width: "95%" }}>
            {currentTexts.eventLocation}
          </span>
        </div>
      </div>

      <div id="bookingView">
        <FixedButton title={currentTexts.orderTickets} />
      </div>
    </header>
  );
};

export default Header;