import React from 'react';
import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
import "../index.css";

const IconLink = () => {
  return (
    <>
      <a href="https://wa.me/447519999026?text=Hello%2C%20I%E2%80%99m%20reaching%20out%20regarding%20the%20Eid%20Al-Fitr%20celebration." 
         target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={40} color="#075e54" />
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={40} color="#C13584"/>
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <FaTelegram size={40} color="#229ED9" />
      </a>
    </>
  );
};

const Footer = ({ language }) => {
  const texts = {
    en: "For any questions please contact here",
    ru: "По любым вопросам свяжитесь здесь",
  };

  return (
    <footer className="footer" style={{ paddingBottom: 10, marginTop: 40 }}>
      <p style={{ fontSize: 17, marginBottom: 5 }}>{texts[language] || texts.en}</p>
      <IconLink />
    </footer>
  );
};

export default Footer;