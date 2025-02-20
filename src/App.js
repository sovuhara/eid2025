import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import ImageCollage from "./components/imageCollage";
import EventDetails from "./components/EventDetails";
import Map from "./components/Map";



const App = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="app">
      {/* Кнопка выбора языка внутри .app */}
      <div className="languageButtonDiv">
        <select className="languageButton" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>


        <Header language={language} />
        <ImageCollage language={language} />
        <div className="bottomMapEvents">
          <EventDetails language={language} />
          <Map language={language} />
        </div>
        <Footer language={language} />

    </div>
  );
};

export default App;
