import React from 'react';
import { Link } from 'react-router-dom';

const TempleGallery = () => {
  return (
    <div className='container' style={{padding:"2rem"}}>
<div 
      className="flex justify-center items-center h-[450px] text-center bg-cover bg-center"
      id="siteGallery"
      style={{
        background: "linear-gradient(to right, rgba(150, 0, 25, 0.9), rgba(198, 98, 115, 0.8))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "50px 20px",
        borderRadius: "12px",
      }}
    >
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold tracking-wide">
          Explore the Divine Temple Gallery
        </h2>
        <p className="mt-3 text-lg leading-relaxed opacity-90">
          Step into a world of heritage, devotion, and beauty. Discover the essence of Shree Shantika Parameshwari Temple through a stunning visual journey.
        </p>

        {/* Soft Cream & Elegant Call-to-Action Button */}
        <Link to="/gallary">
          <button 
            className="mt-6 px-6 py-3 text-lg font-semibold rounded-md transition-all shadow-lg"
            style={{
              backgroundColor: "#F8F0E3",
              color: "#600020",
              border: "2px solid #600020",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#EADAC8"; // Slightly darker cream on hover
              e.target.style.color = "#500018"; // Darker maroon
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#F8F0E3"; // Back to original
              e.target.style.color = "#600020";
            }}
          >
            Enter the Gallery →
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default TempleGallery;
