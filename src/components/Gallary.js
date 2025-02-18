import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const mediaItems = [
  { type: "image", src: "./images/pic1.jpg", alt: "Temple Image 1" },
  { type: "image", src: "./images/pic3.jpg", alt: "Temple Image 2" },
  { type: "image", src: "./images/pic4.jpg", alt: "Temple Image 3" },
  { type: "image", src: "./images/pic5.jpg", alt: "Temple Image 4" },
  { type: "image", src: "./images/pic6.jpg", alt: "Temple Image 5" },
  { type: "video", src: "./images/video1.mp4", alt: "Temple Video 1" },
  { type: "video", src: "./images/video2.mp4", alt: "Temple Video 2" },
  { type: "video", src: "./images/video3.mp4", alt: "Temple Video 3" },
  { type: "video", src: "./images/video4.mp4", alt: "Temple Video 4" },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "4rem", background: "#fff", color: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)" }}>
      

      {/* Image Section */}
      <h2 style={{ marginBottom: "10px", color: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)"  }}>Photos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
        {mediaItems.filter((item) => item.type === "image").map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            onClick={() => handleImageClick(item.src)}
            style={{
              cursor: "pointer",
              width: "250px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
        ))}
      </div>
      <button
        onClick={() => navigate("/photos")}
        style={{ marginTop: "20px", padding: "10px 15px", border: "1px solid #ccc", borderRadius: "5px", background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)", cursor: "pointer" }}
      >
        View More Photos
      </button>

      {/* Video Section */}
      <h2 style={{ marginTop: "30px", marginBottom: "10px" , padding: "4rem" }}>Videos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
        {mediaItems.filter((item) => item.type === "video").map((item, index) => (
          <video
            key={index}
            controls
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <button
        onClick={() => navigate("/videos")}
        style={{ marginTop: "20px", padding: "10px 15px", border: "1px solid #ccc", borderRadius: "5px", background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)", cursor: "pointer" }}
      >
        View More Videos
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleClose}
        >
          <img
            src={currentImage}
            alt="Expanded view"
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
              cursor: "pointer",
              border: "5px solid #fff",
              borderRadius: "5px",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
