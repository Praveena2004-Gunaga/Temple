import React from 'react';
import { Link } from 'react-router-dom';
import History from './History';
import TempleGallery from './TempleGallery';
import About from './About';
function Home() {
  return (
    <div >
      {/* Devotional Page Section */}
      <div className="devotional-page d-flex flex-column flex-lg-row align-items-center justify-content-center">
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
  <div className="video-container mt-3 mt-lg-0">
    <video autoPlay loop controls className="video-style w-100">
      <source src="./images/video3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

      {/* About Section */}
      <About/>

      {/* History Section */}
      <History />

      {/* Information Section */}
      <div className="container" id="siteInfo" >
        <div className="my-4 py-5">
          <div className="row" >
            {[
              { title: "Temple Architecture", img: "temple-architecture.jpg", link: "/architecture" },
              { title: "Daily Schedule", img: "daily-schedule.jpg", link: "/schedule" },
              { title: "Deity Information", img: "deity-info.jpg", link: "/deity" },
              { title: "Festival Calendar", img: "festival-calendar.jpg", link: "/events" },
              { title: "Contact Information", img: "contact-info.jpg", link: "/contact" },
              { title: "Spiritual Resources", img: "spiritual-resources.jpg", link: "/spiritual" }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 my-3" >
                <div className="card text-center border-danger bg-light rounded-3" >
                  <img className="card-img-top" src={`./images/${item.img}`} alt={item.title} style={{backgroundColor:"#F8F0E3" }}/>
                  <div className="card-body"style={{backgroundColor:"#F8F0E3" }}>
                    <h4 className="card-title text-danger fw-bold">{item.title}</h4>
                    <button type="button" className='btn btn-danger'>
                      <Link className="nav-link text-white text-decoration-none" to={item.link}>Click here</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Temple Gallery */}
      <TempleGallery />
    </div>
  );
}

export default Home;
