import React, { useState, useEffect } from 'react';
import './Hero.css';
import hero_image from '../Images/hero_image.png';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Wait for 4 seconds before showing the popup

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []); // Empty dependency array ensures this effect runs only once

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='hero'>
      {showPopup && (
        <>
          <div className="overlay"></div>
          <div className="popup">
            <p>Hurry! Everything on sale. Limited time only!</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </>
      )}
      <div className="hero-left">
        <h2>Fresh and trending collections</h2>
        <div>
          <div>
            <p class="animate__animated animate__bounceInDown"> designed</p>
          </div>
          <p class="animate__animated animate__bounceInLeft"> for </p>
          <p class="animate__animated animate__bounceInRight"> everyone.</p>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" width={1000} />
      </div>
    </div>
  );
};

export default Hero;
