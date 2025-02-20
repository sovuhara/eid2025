import React from "react";
import mapImage from "../images/location.png";
import "leaflet/dist/leaflet.css";

const Map = ({ language }) => {
  // Тексты для разных языков
  const texts = {
    en: {
      altText: "Map",
      routeButton: "BUILD A ROUTE",
    },
    ru: {
      altText: "Карта",
      routeButton: "ПРОЛОЖИТЬ МАРШРУТ",
    },
  };

  const currentTexts = texts[language] || texts.en; // По умолчанию английский

  return (
    <div className="map">
      <img
        src={mapImage}
        alt={currentTexts.altText}
        style={{ width: "95%", borderRadius: "20px" }}
      />

      <a
        style={{ textDecoration: "none" }}
        href="https://www.google.com/maps/place/Wheatsheaf+Community+Hall/@51.4809462,-0.1250382,18.11z/data=!4m6!3m5!1s0x487604f1a87f6377:0xc5bbbc3953b79dc6!8m2!3d51.4809355!4d-0.1252938!16s%2Fg%2F1vlz9v5x?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{ background: "none", height: 30, marginTop: 10 }}>
          <button className="routeButton">{currentTexts.routeButton}</button>
        </div>
      </a>
    </div>
  );
};

export default Map;