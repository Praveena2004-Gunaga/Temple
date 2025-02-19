import React from "react";

const mediaItems = [
  { type: "video", src: "./images/video1.mp4", alt: "Temple Video 1" },
  { type: "video", src: "./images/video2.mp4", alt: "Temple Video 2" },
  { type: "video", src: "./images/video3.mp4", alt: "Temple Video 3" },
  { type: "video", src: "./images/video4.mp4", alt: "Temple Video 3" },
  { type: "video", src: "./images/video5.mp4", alt: "Temple Video 3" },
];

const VideoGallery = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", color: "#000" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>All Temple Videos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {mediaItems.map((item, index) => (
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
    </div>
  );
};

export default VideoGallery;
