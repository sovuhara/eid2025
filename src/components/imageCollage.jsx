import React, { useEffect, useRef, useState } from "react";
import "./ImageCollage.css";
import image from '../images/ramadan.png';
import image2 from '../images/ramadan2.png';
import image3 from '../images/ramadan3.png';  
import image4 from '../images/ramadan4.png';  




const images = [
  image,
  image2,
  image3,
  image4,


];

const ImageCollage = () => {
  const scrollRef = useRef(null);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    if (!scrollRef.current) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Скорость прокрутки
    const container = scrollRef.current;

    const scroll = () => {
      if (!scrolling) return;
      scrollAmount += scrollSpeed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, [scrolling]);

  return (
    <div
      className="scroll-container"
      ref={scrollRef}
      onMouseEnter={() => setScrolling(false)}
      onMouseLeave={() => setScrolling(true)}
    >
      <div className="scroll-content">
        {images.concat(images).map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} className="scroll-image" />
        ))}
      </div>
    </div>
  );
}

export default ImageCollage;