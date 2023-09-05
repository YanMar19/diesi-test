import React, { useState, useEffect } from 'react';
import PopupComponent from '../components/popup';

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
      <PopupComponent
        showPopup={showPopup}
        handlePopupClose={handlePopupClose}
        handleGoToLink={handleGoToLink}
      />
    </div>
  );
};

export default Home;