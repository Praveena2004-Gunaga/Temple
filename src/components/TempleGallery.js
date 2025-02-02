import React from 'react';
import { Link } from 'react-router-dom'; // To navigate to the gallery

// Make sure to import the updated CSS

const TempleGallery = () => {
  return (
    <div className="cta-container" id="siteGallery" style={{background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)"}}>
      <div className="cta-overlay">
       
        <h2 className="cta-title">Explore the Divine Temple Gallery</h2>
        <p className="cta-description" style={{color:" #8e0f24"}}>
          Discover the beauty, history, and culture of the temple through a visual journey.
        </p>
        <Link to="/gallary">
          <button className="cta-button">Enter the Gallery</button>
        </Link>
      </div>
    </div>
  );
};

export default TempleGallery;
