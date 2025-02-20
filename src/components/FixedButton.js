import React from "react";
import "../index.css";

const FixedButton = ({ title }) => {
  const handleClick = () => {
    window.location.href =
      "https://wa.me/79640280343?text=%D0%90%D1%81%D1%81%D0%B0%D0%BB%D1%8F%D0%BC%D1%83%20%D0%B0%D0%BB%D0%B5%D0%B9%D0%BA%D1%83%D0%BC!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BC%D0%B5%D1%81%D1%82%D0%B0%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%B0%D0%B7%D0%B4%D0%BD%D0%B8%D0%BA%20%D0%98%D0%B4%20%D0%90%D0%BB%D1%8C-%D0%A4%D0%B8%D1%82%D1%80.";
  };

  return (
    <button className="fixed-button" onClick={handleClick}>
      {title}
    </button>
  );
};

export default FixedButton;