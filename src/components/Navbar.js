import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for route tracking
import "./style.css";

const Navbar = () => {
  // Use useLocation hook to track the current route
  const location = useLocation();

  // Determine if the navbar should be sticky based on the route
  const isSticky = location.pathname === "/"; // Assuming the navbar should be sticky only on the homepage
  
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1
          style={{
            color: "#900000", // Deep temple red
            fontFamily: "'Times New Roman', serif", // Traditional font
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          ಶ್ರೀ ಶಾಂತಿಕಾ ಪರಮೇಶ್ವರಿ ದೇವಿ ದೇವಸ್ಥಾನ  
          <br />
          Shri Shanthika Parameshwari Devi Temple
        </h1>
      </div>

      {/* Navbar */}
      <div style={{ position: "sticky", top: "0", zIndex: "1000" }}>
        <div className="contentCneter">
          <nav
            className="navbar navbar-expand-lg"
            style={{
              backgroundColor: "transparent", // Fully transparent
              backdropFilter: "none", // Prevents blur effect
              borderBottom: "none", // Removes any border
              boxShadow: "none", // Removes any shadow
              position: isSticky ? "sticky" : "relative", // Make sticky only for the homepage
            }}
          >
            <div className="container-fluid d-flex justify-content-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div>
                <div
                  className="navbar-collapse d-flex justify-content-center"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav gap-4">
                    <li className="nav-item">
                      <a className="nav-link active custom-nav-link" to="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link custom-nav-link" href="#siteAbout">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link custom-nav-link" href="#">
                        History
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle custom-nav-link"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item custom-nav-link" href="#siteInfo">
                            Information
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item custom-nav-link" href="#siteGallery">
                            Gallery
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item custom-nav-link" href="#">
                            Contact info
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled custom-nav-link" aria-disabled="true">
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
