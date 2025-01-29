import React, { useState } from 'react';

const Gallery = () => {
  // Define the media items (images and videos) for your gallery
  const mediaItems = [
    {
      type: 'image',
      src: './images/pic1.jpg', // Replace with your temple image
      alt: 'Temple Image 1',
    },
    {
      type: 'image',
      src: './images/pic2.jpg', // Replace with your temple image
      alt: 'Temple Image 2',
    },
    {
      type: 'video',
      src: './images/video1.mp4', // Replace with your temple video
      alt: 'Temple Video 1',
    },
    {
      type: 'image',
      src: './images/pic3.jpg', // Replace with your temple image
      alt: 'Temple Image 3',
    },
    {
      type: 'video',
      src: './images/video2.mp4', // Replace with your temple video
      alt: 'Temple Video 2',
    },
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
    <div className="gallery">
      <h2>Temple Gallery</h2>
      <div className="media-grid">
        {mediaItems.map((item, index) => (
          <div key={index} className="media-item">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-item"
                onClick={() => handleImageClick(item.src)}
                style={{
                  cursor: 'pointer',
                  maxWidth: '100%',
                  maxHeight: '300px', // Adjusted height for images
                  objectFit: 'contain', // Ensures the whole image is shown without distortion
                }}
              />
            ) : (
              <video
                controls
                className="gallery-item"
                style={{
                  maxWidth: '100%', // Videos will take full width of the container
                  height: 'auto', // Maintain aspect ratio of video
                  objectFit: 'contain', // Ensure videos are displayed without cropping
                  maxHeight: '600px', // Increased height for videos
                }}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Modal for image view */}
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
              maxHeight: '90vh', // Make the image fit the screen size
              maxWidth: '90%',
              objectFit: 'contain', // Ensures the whole image is displayed
              cursor: 'pointer',
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
