import React from 'react'

function Card() {
  return (
    <div>
      {/* Devotional Page Section */}
      <div className="devotional-page d-flex flex-column flex-lg-row align-items-center justify-content-center" id="first_page">
        {/* Shloka Section */}
        <div className="shloka text-center text-lg-start mb-3 mb-lg-0">
          <h2>🔱 ಶಾಂತಿಕಾ ಪರಮೇಶ್ವರಿ ದೇವಿ ಕುಮಟಾ 🔱</h2>
          <p>
            ॐ ಶ್ರೀಪಾರ್ವತೀಪತಯೇ ನಮಃ ।।<br /><br />
            ತ್ವಂ ಮಾತಾ ಚ ಪಿತಾ ಚ ತ್ವಂ,<br />
            ತ್ವಂ ಬಂಧುಶ್ಚ ಸಖಾ ತ್ವಮ್ ।।<br /><br />
            ತ್ವಂ ವಿದ್ಯಾ ದ್ರವಿಣಂ ತ್ವಂ,<br />
            ತ್ವಂ ಸರ್ವಂ ಮಮ ದೇವಿ ।।<br /><br />
            ನವರತ್ನಂ ರತ್ನಗಂಧಂ,<br />
            ಪಂಚಗವ್ಯಂ ಚ ಪುಷ್ಪಕಂ ।।<br /><br />
            ತಥೈವ ಪರಮೇಶಾನಿ,<br />
            ಪೂಜಾಂ ಶಂಕರ ದರ್ಶಯೇ ।।
          </p>
        </div>

        {/* Video Section */}
        <div className="video-container mt-2 mt-lg-0" style={{ maxWidth: "23rem", width: "22rem" }}>
          <video autoPlay loop controls className="video-style w-100">
            <source src="./images/video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Card;
