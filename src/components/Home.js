import React from 'react';
import { Link } from 'react-router-dom';
import History from './History';
import TempleGallery from './TempleGallery';
import About from './About';
import Card from './Card';
import Footer from './Footer';
function Home() {
  return (
    
    <div >
      
      <Card/>

      {/* About Section */}
      <About/>

      {/* History Section */}
      <History />

{/* Information Section */}
<div className='container' style={{padding:"3rem"}}>
<div className='container' id="siteInfo" 
  style={{
    background: "linear-gradient(to right, rgba(150, 0, 25, 0.9), rgba(198, 98, 115, 0.8))",
    padding: "3rem 2rem",
    borderRadius: "12px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)"
  }}
>
  {/* Added Heading and Shloka */}
  <div className="text-center mb-5">
  <h2
  style={{
    color: "#F8E1C2",  // Text color as #F8E1C2 (Soft cream)
    fontSize: "2.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: "2px",
    background: "linear-gradient(to right, #F8E1C2, #FFDAB9)",  // Light cream to Peach gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    padding: "10px",
    borderBottom: "3px solid #F8E1C2",  // Border color matching text
    display: "inline-block",
  }}
>
  Spiritual Glimpses
</h2>


    <p style={{ fontStyle: "italic", fontSize: "1.2rem", color: "#F8E1C2", fontWeight: "bold" }}>
      "ಶಾಂತಿಕಾ ಪರಮೇಶ್ವರಿ, ತ್ವಂ ಚ ಶರಣಾಗತಪ್ರಿಯಾ। <br />
      ರಕ್ಷ ರಕ್ಷ ಜಗನ್ಮಾತಃ, ಭಕ್ತಾನಾಂ ಶರಣಂ ಭವ॥"
    </p>
    <p style={{ fontSize: "1rem", color: "#F8F0E3" }}>
      ("O Shantika Parameshwari, who loves those who surrender to her—protect us, O Mother of the universe, be the refuge of your devotees.")
    </p>
  </div>

  <div className="row">
    <div className="col-md-4 my-3">
      <div className="card card-inverse card-primary text-center" style={{ background: "#F8F0E3", borderRadius: "10px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)" }}>
        <div className="card-block" style={{ color: "#800000" }}>
          <h4 className="card-title">Temple Architecture</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className='btn btn-primary' style={{ background: "linear-gradient(to right,#960019,rgb(198, 98, 115))", borderRadius: "8px" }}>
            <Link className="nav-link" to="/architecture" style={{ color: "#F8F0E3" }}>Click here</Link>
          </button>
        </div>
      </div>
    </div>

    <div className="col-md-4 my-3">
      <div className="card card-inverse card-primary text-center" style={{ background: "#F8F0E3", borderRadius: "10px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)" }}>
        <div className="card-block" style={{ color: "#800000" }}>
          <h4 className="card-title">Daily Schedule</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className='btn btn-primary' style={{ background: "linear-gradient(to right,#960019,rgb(198, 98, 115))", borderRadius: "8px" }}>
            <Link className="nav-link" to="/schedule" style={{ color: "#F8F0E3" }}>Click here</Link>
          </button>
        </div>
      </div>
    </div>

    <div className="col-md-4 my-3">
      <div className="card card-inverse card-success text-center" style={{ background: "#F8F0E3", borderRadius: "10px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)" }}>
        <div className="card-block" style={{ color: "#800000" }}>
          <h4 className="card-title">Deity Information</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className='btn btn-primary' style={{ background: "linear-gradient(to right,#960019,rgb(198, 98, 115))", borderRadius: "8px" }}>
            <Link className="nav-link" to="/deity" style={{ color: "#F8F0E3" }}>Click here</Link>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="row my-3">
    <div className="col-md-4 my-3">
      <div className="card card-inverse card-primary text-center" style={{ background: "#F8F0E3", borderRadius: "10px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)" }}>
        <div className="card-block" style={{ color: "#800000" }}>
          <h4 className="card-title">Festival Calendar</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className='btn btn-primary' style={{ background: "linear-gradient(to right,#960019,rgb(198, 98, 115))", borderRadius: "8px" }}>
            <Link className="nav-link" to="/events" style={{ color: "#F8F0E3" }}>Click here</Link>
          </button>
        </div>
      </div>
    </div>

    <div className="col-md-4 my-3">
      <div className="card card-inverse card-primary text-center" style={{ background: "#F8F0E3", borderRadius: "10px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)" }}>
        <div className="card-block" style={{ color: "#800000" }}>
          <h4 className="card-title">Contact Information</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className='btn btn-primary' style={{ background: "linear-gradient(to right,#960019,rgb(198, 98, 115))", borderRadius: "8px" }}>
            <Link className="nav-link" to="/contact" style={{ color: "#F8F0E3" }}>Click here</Link>
          </button>
        </div>
      </div>
    </div>

    <div className="col-md-4 my-3">
      <div className="card card-inverse card-success text-center" style={{ background: "#F8F0E3", borderRadius: "10px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)" }}>
        <div className="card-block" style={{ color: "#800000" }}>
          <h4 className="card-title">Spiritual Resources</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className='btn btn-primary' style={{ background: "linear-gradient(to right,#960019,rgb(198, 98, 115))", borderRadius: "8px" }}>
            <Link className="nav-link" to="/spiritual" style={{ color: "#F8F0E3" }}>Click here</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

   
      
      



      {/* Temple Gallery */}
      <TempleGallery />

      {/*Footer Section */}
      <Footer/>
    </div>
  );
}

export default Home;
