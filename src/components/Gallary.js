import React, { useState } from 'react';

const Gallary = () => {
  const mediaItems = [
    { type: 'image', src: './images/pic1.jpg', alt: 'Temple Image 1' },
    { type: 'image', src: './images/pic3.jpg', alt: 'Temple Image 1' },
    { type: 'image', src: './images/pic4.jpg', alt: 'Temple Image 1' },
    { type: 'image', src: './images/pic5.jpg', alt: 'Temple Image 1' },
    { type: 'image', src: './images/pic6.jpg', alt: 'Temple Image 1' },
    { type: 'image', src: './images/pic2.jpg', alt: 'Temple Image 2' },
    { type: 'video', src: './images/video1.mp4', alt: 'Temple Video 1' },
    { type: 'video', src: './images/video2.mp4', alt: 'Temple Video 2' },
    { type: 'video', src: './images/video3.mp4', alt: 'Temple Video 3' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="gallery" style={{ textAlign: 'center', padding: '20px', background: 'linear-gradient(to right, rgb(150, 0, 25), rgb(198, 98, 115))', color: '#fff', borderRadius: '10px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: 'bold' }}>Sanctuary Showcase</h1>
      
      <div className="image-scroll-container" style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '10px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
        {mediaItems.filter(item => item.type === 'image').map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="gallery-item"
            onClick={() => handleImageClick(item.src)}
            style={{
              cursor: 'pointer',
              width: '200px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginRight: '10px',
              display: 'inline-block',
              border: '3px solid #fff'
            }}
          />
        ))}
      </div>

      <h2 style={{ marginTop: '20px', fontWeight: 'bold' }}>Divine Moments</h2>
      <div className="video-scroll-container" style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '10px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
        {mediaItems.filter(item => item.type === 'video').map((item, index) => (
          <video
            key={index}
            controls
            className="gallery-item"
            style={{
              width: '300px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginRight: '10px',
              display: 'inline-block',
              border: '3px solid #fff'
            }}
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      {isOpen && (
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={handleClose}
        >
          <img
            src={currentImage}
            alt="Expanded view"
            style={{
              maxHeight: '90vh',
              maxWidth: '90%',
              objectFit: 'contain',
              cursor: 'pointer',
              border: '5px solid #fff',
              borderRadius: '10px'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallary;
