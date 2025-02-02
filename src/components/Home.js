import React from 'react';
import { Link } from 'react-router-dom';
import History from './History';
import TempleGallery from './TempleGallery';
import About from './About';
import Card from './Card';
function Home() {
  return (
    
    <div >
      
      <Card/>

      {/* About Section */}
      <About/>

      {/* History Section */}
      <History />

      {/* Information Section */}
     
    <div>
      
      <div className="container" id="siteInfo" >
        <div className="my-4 py-5">
          <div className="row" >
            {[
              { title: "Temple Architecture", img: "temple.jpg", link: "/architecture" },
              { title: "Daily Schedule", img: "daily-schedule.jpg", link: "/schedule" },
              { title: "Deity Information", img: "deity-info.jpg", link: "/deity" },
              { title: "Festival Calendar", img: "festival-calendar.jpg", link: "/events" },
              { title: "Contact Information", img: "contact-info.jpg", link: "/contact" },
              { title: "Spiritual Resources", img: "spiritual-resources.jpg", link: "/spiritual" }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 my-3" >
                <div className="card text-center border-danger bg-light rounded-3" style={{ backgroundColor: "#F8F0E3" , borderBlockStyle:"double"}}>
                  <div style={{ display: "flex", alignItems: "start", padding: "10px", background: "linear-gradient(to right,rgb(150, 0, 25),#c66273" }}>
                    <img className="card-img-top" src={`./images/${item.img}`} alt={item.title} style={{ height: "3rem", width: "3rem", marginRight: "10px" }} />
                  </div>
                  <div className="card-body" style={{background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)"}}>
                    <h4 className="card-title fw-bold" style={{color:"#F8F0E3"}}>{item.title}</h4>
                    <button type="button" className='btn'style={{backgroundColor:"#F8F0E3"}}>
                      <Link className="nav-link text-decoration-none" to={item.link} style={{color:"#8e0f24"}}>Click here</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>



      {/* Temple Gallery */}
      <TempleGallery />
    </div>
  );
}

export default Home;
