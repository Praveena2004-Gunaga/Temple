import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const location = useLocation();
  const isSticky = location.pathname === "/";

  return (
    <div className="px-0">
      <div className="text-center my-3">
        <h1 className="text-center fw-bold py-2" style={{
          color: "#F8F0E3",
          fontFamily: "'Times New Roman', serif",
          letterSpacing: "2px",
         
          border: "2px solid #F8F0E3",
          
          background: "linear-gradient(to right, rgb(89, 0, 17), rgb(176, 89, 110))"
        }}>
          <b>ಶ್ರೀ ಶಾಂತಿಕಾ ಪರಮೇಶ್ವರಿ ದೇವಿ ದೇವಸ್ಥಾನ </b><br />
          Shri Shanthika Parameshwari Devi Temple
        </h1>
      </div>

      <nav className={`navbar navbar-expand-lg ${isSticky ? "sticky-navbar" : ""}`} style={{ backgroundColor: "#F8F0E3" }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav text-center gap-lg-4">
              <li className="nav-item">
                <a className="nav-link active custom-nav-link" href="/#first_page" style={{ color: "#800000" }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="/#siteAbout" style={{ color: "#800000" }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="/#history" style={{ color: "#800000" }}>History</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle custom-nav-link" href="#" role="button" data-bs-toggle="dropdown" style={{ color: "#800000" }}>Dropdown</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item custom-nav-link" href="#siteInfo" style={{ color: "#800000" }}>Information</a></li>
                  <li><a className="dropdown-item custom-nav-link" href="#siteGallery" style={{ color: "#800000" }}>Gallery</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item custom-nav-link" href="#contactInfo" style={{ color: "#800000" }}>Contact Info</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled custom-nav-link" aria-disabled="true" style={{ color: "#800000" }}>Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
