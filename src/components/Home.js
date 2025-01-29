import React from 'react'
import { Link } from 'react-router-dom';
import History from './History';
import TempleGallery from './TempleGallery';
function Home() {
  return (
    <div>

    <>
    <div>
  {/*1st section*/}
  <video
    autoPlay
    loop
    controls  // Added controls to allow users to play/pause and adjust volume
    className="img-fluid rounded-start"
    style={{
      display: "flex",
      height: "95vh",  // Keeps the height at 85% of the viewport height
      width: "75%",   // Set width to 100% to take the full width of the container
      objectFit: "cover", // Makes the video fill the area completely without stretching
      margin: "0 auto",  // Centers the video horizontally
    }}
  >
    <source src="./images/video3.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>




    </>
      {/* 2nd section */}
      <div className='container'  id="siteAbout">
  <div className="my-4" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
    <div className="card mb-3" style={{ maxWidth: "80rem", border: "2px solid #800000", borderRadius: "10px", backgroundColor: "#F8F0E3" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="./images/pic5.jpg"
            className="img-fluid rounded-start"
            alt="..."
            style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#800000", fontFamily: "'Times New Roman', serif", fontWeight: "bold" }}>
              About Us
            </h5>
            <p className="card-text" style={{ fontFamily: "'Georgia', serif", fontSize: "1rem" }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*3rd section*/}
<History/>
{/*4rd section */}
<div className="container" id="siteInfo" >
  <div className="my-4" style={{ paddingTop: "6rem", paddingBottom: "6rem" }} >
    <div className="row">

      {/* Temple Architecture Card */}
      <div className="col-md-4 my-3">
        <div className="card text-center" style={{ border: "2px solid #800000", backgroundColor: "#F8F0E3", borderRadius: "12px" }}>
          <img className="card-img-top" src="./images/temple-architecture.jpg" alt="Temple Architecture" style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#800000", fontFamily: "'Times New Roman', serif" }}>Temple Architecture</h4>
            <p className="card-text" style={{ fontFamily: "'Georgia', serif", fontSize: "1rem" }}>
              Discover the sacred and artistic beauty of our temple architecture.
            </p>
            <button type="button" className='btn btn-danger'>
              <Link className="nav-link" to="/architecture" style={{ color: "white", textDecoration: "none" }}>Click here</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Daily Schedule Card */}
      <div className="col-md-4 my-3">
        <div className="card text-center" style={{ border: "2px solid #800000", backgroundColor: "#F8F0E3", borderRadius: "12px" }}>
          <img className="card-img-top" src="./images/daily-schedule.jpg" alt="Daily Schedule" style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#800000", fontFamily: "'Times New Roman', serif" }}>Daily Schedule</h4>
            <p className="card-text" style={{ fontFamily: "'Georgia', serif", fontSize: "1rem" }}>
              Find out about the daily prayers and rituals at the temple.
            </p>
            <button type="button" className='btn btn-danger'>
              <Link className="nav-link" to="/schedule" style={{ color: "white", textDecoration: "none" }}>Click here</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Deity Information Card */}
      <div className="col-md-4 my-3">
        <div className="card text-center" style={{ border: "2px solid #8B0000", backgroundColor: "#F8F0E3", borderRadius: "12px" }}>
          <img className="card-img-top" src="./images/deity-info.jpg" alt="Deity Information" style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#8B0000", fontFamily: "'Times New Roman', serif" }}>Deity Information</h4>
            <p className="card-text" style={{ fontFamily: "'Georgia', serif", fontSize: "1rem" }}>
              Learn more about the deities worshiped in the temple.
            </p>
            <button type="button" className='btn btn-danger'>
              <Link className="nav-link" to="/deity" style={{ color: "white", textDecoration: "none" }}>Click here</Link>
            </button>
          </div>
        </div>
      </div>

    </div>

    <div className="row my-3">

      {/* Festival Calendar Card */}
      <div className="col-md-4 my-3">
        <div className="card text-center" style={{ border: "2px solid #800000", backgroundColor: "#F8F0E3", borderRadius: "12px" }}>
          <img className="card-img-top" src="./images/festival-calendar.jpg" alt="Festival Calendar" style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#800000", fontFamily: "'Times New Roman', serif" }}>Festival Calendar</h4>
            <p className="card-text" style={{ fontFamily: "'Georgia', serif", fontSize: "1rem" }}>
              View our temple's festival schedule and celebrations.
            </p>
            <button type="button" className='btn btn-danger'>
              <Link className="nav-link" to="/events" style={{ color: "white", textDecoration: "none" }}>Click here</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Information Card */}
      <div className="col-md-4 my-3">
        <div className="card text-center" style={{ border: "2px solid #800000", backgroundColor: "#F8F0E3", borderRadius: "12px" }}>
          <img className="card-img-top" src="./images/contact-info.jpg" alt="Contact Information" style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#800000", fontFamily: "'Times New Roman', serif" }}>Contact Information</h4>
            <p className="card-text" style={{ fontFamily: "'Georgia', serif", fontSize: "1rem" }}>
              Get in touch with us for more information or inquiries.
            </p>
            <button type="button" className='btn btn-danger'>
              <Link className="nav-link" to="/contact" style={{ color: "white", textDecoration: "none" }}>Click here</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Spiritual Resources Card */}
      <div className="col-md-4 my-3">
        <div className="card text-center" style={{ border: "2px solid #8B0000", backgroundColor: "#F8F0E3", borderRadius: "12px" }}>
          <img className="card-img-top" src="./images/spiritual-resources.jpg" alt="Spiritual Resources" style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#8B0000", fontFamily: "'Times New Roman', serif" }}>Spiritual Resources</h4>
            <p className="card-text" style={{ fontFamily: "'Georgia', serif", fontSize: "1rem" }}>
              Explore the spiritual resources available at the temple.
            </p>
            <button type="button" className='btn btn-danger'>
              <Link className="nav-link" to="/spiritual" style={{ color: "white", textDecoration: "none" }}>Click here</Link>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

{/*4th section */}
<TempleGallery />
    </div>
  )
}

export default Home
