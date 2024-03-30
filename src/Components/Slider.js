import React, { useState, useEffect } from 'react';
import '../Styles/Slider.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
            {index % 2 === 1 && <br />} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
