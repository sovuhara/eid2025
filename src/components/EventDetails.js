import React from "react";
import "../index.css";

const EventDetails = ({ language }) => {
  // Тексты для разных языков
  const texts = {
    en: {
      title: "What Awaits You?",
      tags: [
        "Delicious Food",
        "Fun Contests",
        "Entertainment",
        "Gifts",
        "Cozy Atmosphere",
      ],
      listItems: [
        "Sweets that will make you smile!",
        "Traditional dishes you will love!",
        "Special treats for kids!",
        "And lots and lots of deliciousness!",
      ],
      locationTitle: "Location",
      locationDetails: [
        "Central London, just 8 minutes' walk from Vauxhall Station.",
        "Cozy hall with parking and a children's playground.",
      ],
    },
    ru: {
      title: "Что вас ждет?",
      tags: [
        "Вкусная еда",
        "Веселые конкурсы",
        "Развлечения",
        "Подарки",
        "Уютная атмосфера",
      ],
      listItems: [
        "Сладости, которые подарят вам улыбку!",
        "Традиционные блюда, которые вам понравятся!",
        "Особенные угощения для детей!",
        "И еще много-много вкусняшек!",
      ],
      locationTitle: "Местоположение",
      locationDetails: [
        "Центр Лондона, всего 8 минут пешком от станции Vauxhall.",
        "Уютный зал с парковкой и детской площадкой.",
      ],
    },
  };

  const currentTexts = texts[language] || texts.en; // По умолчанию английский

  return (
    <div className="event-details">
      <div className="experience">
        <h2>{currentTexts.title}</h2>
        <div className="tags-container">
          {currentTexts.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <ul>
          {currentTexts.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <img
          src="https://thumbs.dreamstime.com/b/beautiful-shiny-eid-mubarak-festival-celebration-banner-beautiful-shiny-eid-mubarak-festival-celebration-banner-vector-215645201.jpg"
          alt="Fireworks"
        />
      </div>

      <div className="location">
        <h3>{currentTexts.locationTitle}</h3>
        {currentTexts.locationDetails.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;