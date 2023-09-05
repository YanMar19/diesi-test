// homepage.js
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleGoToLink = () => {
    window.location.href = 'https://survey.alchemer.com/s3/7385227/SiteR-SHARP';
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Popup
        open={showPopup}
        onClose={handlePopupClose}
        closeOnDocumentClick={false}
        closeOnEscape={false}
        contentStyle={{
          background: '#333',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        <div>
          <button
            onClick={handlePopupClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            X
          </button>
          <h2>Κείμενο έρευνας</h2>
          <button 
            onClick={handleGoToLink}
            style={{
              background: 'yellow',
              color: 'white',
            }}
          >
            Έρευνα
          </button>
        </div>
      </Popup>
    </div>
    
  );
};

export default Home;