import React from 'react';
import Popup from 'reactjs-popup';
import './popup.css';

const PopupComponent = ({ showPopup, handlePopupClose, handleGoToLink }) => {
    return (
        <Popup
            open={showPopup}
            onClose={handlePopupClose}
            closeOnDocumentClick={false}
            closeOnEscape={false}
        >
            <div>
                <button
                    onClick={handlePopupClose}
                    className="close-button"
                >
                    X
                </button>
                <h2 className="popup-title">Έρευνα Δίεση 101.3</h2>
                <p className="popup-text">
                Μας ακούς στο σπίτι, στο αυτοκίνητο ή στο γραφείο; Σου αρέσουν οι συναυλίες, οι συνεντεύξεις ή τα αφιερώματα;
                    Η έρευνα του Δίεση 101,3 ξεκίνησε. Κάνε <a href="#" onClick={handleGoToLink} className="popup-link">κλικ</a>, άκουσε μουσική και πες μας τη γνώμη σου για να γίνουμε καλύτεροι.
                    Θα σου πάρει μόλις 5 λεπτά
                </p>
            </div>
        </Popup>
    );
};

export default PopupComponent;