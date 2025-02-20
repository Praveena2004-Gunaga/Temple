import React from 'react';
import { Link } from 'react-router-dom';

const TempleGallery = () => {
  return (
    <div>
      <div className='container' id="siteAbout">
        <div className="my-4 py-5">
          <div className="card  bg-light ">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./images/pic2.jpg" className="img-fluid rounded-start" alt="About Us" />
              </div>
              <div className="col-md-8 d-flex flex-column justify-content-center" style={{ background: "linear-gradient(to right, rgb(89, 0, 17), rgb(176, 89, 110))", padding: "2rem", borderRadius: "0 12px 12px 0" }}>
                <div className="card-body text-light text-center">
                  <p className="card-text fs-5">
                    <b>
                      ಯತ್ರ ಯತ್ರ ಸ್ಥಿತೋ ದೇವಃ,<br />
                      ಸ ನಿತ್ಯಂ ಭಕ್ತವತ್ಸಲಃ |<br />
                      ದರ್ಶನಾತ್ ಪಾಪನಾಶಃ ಸ್ಯಾತ್, <br />
                      ಭಕ್ತಾನಾಂ ಪುಣ್ಯವರ್ಧನಮ್ ॥
                    </b>
                  </p>
                  <p className=" opacity-90">
                    "ಯಾವುದೇ ದೇವಾಲಯದಲ್ಲಿರುವ ದೇವರು ಸದಾ ಭಕ್ತರಿಗೆ ಅನುಗ್ರಹವಂತನಾಗಿರುತ್ತಾರೆ.<br />
                    ದೇವಾಲಯದ ದರ್ಶನದಿಂದ ಪಾಪ ವಿನಾಶವಾಗುತ್ತದೆ ಮತ್ತು ಪುಣ್ಯ ಹೆಚ್ಚುತ್ತದೆ."
                  </p>
                  
                  <p className="mt-3  opacity-90 " style={{paddingTop:"2rem"}}>
                  <h4 className="text-3xl font-bold tracking-wide mt-4">Explore the Divine Temple Gallery</h4>
                    Immerse yourself in a realm of divine heritage, unwavering devotion, and timeless beauty. Embark on a mesmerizing visual journey that unveils the sacred essence of Shree Shantika Parameshwari Temple.
                  </p>
                 
                  {/* Soft Cream & Elegant Call-to-Action Button */}
                  <Link to="/gallary">
                    <button
                      className="mt-4 px-5 py-3 fs-6 fw-bold  shadow-lg border-2"
                      style={{
                        backgroundColor: "#F8F0E3",
                        color: "#600020",
                        
                        transition: "all 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#EADAC8";
                        e.target.style.color = "#500018";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#F8F0E3";
                        e.target.style.color = "#600020";
                      }}
                    >
                      Enter the Gallery →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleGallery;
