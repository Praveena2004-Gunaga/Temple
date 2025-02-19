import React, { useState } from "react";

const mediaItems = [
  { type: "image", src: "./images/pic1.jpg", alt: "Temple Image 1" },
  { type: "image", src: "./images/pic3.jpg", alt: "Temple Image 2" },
  { type: "image", src: "./images/pic4.jpg", alt: "Temple Image 3" },
  { type: "image", src: "./images/pic5.jpg", alt: "Temple Image 4" },
  { type: "image", src: "./images/pic6.jpg", alt: "Temple Image 5" },
  { type: "image", src: "./images/pic7.jpg", alt: "Temple Image 5" },
  { type: "image", src: "./images/pic8.jpg", alt: "Temple Image 5" },
  { type: "image", src: "./images/pic9.jpg", alt: "Temple Image 5" },
  { type: "image", src: "./images/pic10.jpg", alt: "Temple Image 5" },
  { type: "image", src: "./images/pic11.jpg", alt: "Temple Image 5" },
  { type: "image", src: "./images/pic12.jpg", alt: "Temple Image 5" },
];

const PhotoGallery = () => {
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
    <div style={{ textAlign: "center", padding: "20px", color: "#000" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>All Temple Photos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {mediaItems.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            onClick={() => handleImageClick(item.src)}
            style={{
              width: "250px",
              height: "350px",
              objectFit: "cover",
              margin: "10px",
             
              cursor: "pointer",
            }}
          />
        ))}
      </div>
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
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
