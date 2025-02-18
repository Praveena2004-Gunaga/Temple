import React from "react";

const mediaItems = [
  { type: "video", src: "./images/video1.mp4", alt: "Temple Video 1" },
  { type: "video", src: "./images/video2.mp4", alt: "Temple Video 2" },
  { type: "video", src: "./images/video3.mp4", alt: "Temple Video 3" },
];

const VideoGallery = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", color: "#fff", background: "black" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>All Temple Videos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {mediaItems.map((item, index) => (
          <video
            key={index}
            controls
            style={{
              width: "350px",
              height: "250px",
              objectFit: "cover",
              margin: "10px",
              borderRadius: "10px",
              border: "3px solid #fff",
            }}
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
