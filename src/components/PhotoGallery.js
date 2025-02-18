import React from "react";

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
  return (
    <div style={{ textAlign: "center", padding: "20px", color: "#fff", background: "black" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>All Temple Photos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {mediaItems.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            style={{
              width: "250px",
              height: "200px",
              objectFit: "cover",
              margin: "10px",
              borderRadius: "10px",
              border: "3px solid #fff",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
