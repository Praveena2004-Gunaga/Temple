import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer 
      className="text-white text-center py-8"
      style={{
        background: "linear-gradient(to right, rgba(150, 0, 25, 0.9), rgba(198, 98, 115, 0.8))",height:"18rem"
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          {/* Social Media Icons */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300 transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300 transition duration-300">
            <FaTwitter />
          </a>
          <a href="mailto:contact@temple.com" className="text-white text-3xl hover:text-gray-300 transition duration-300">
            <FaEnvelope />
          </a>
        </div>

        {/* Contact Info */}
        <p className="mb-4 text-lg opacity-90">
          Shree Shantika Parameshwari Temple, Devarhakkal, Kumta, Uttara Kannada
        </p>
        <p className="mb-4 text-lg opacity-90">
          <span className="font-semibold">Contact:</span> +91 123 456 7890 | <span className="font-semibold">Email:</span> contact@temple.com
        </p>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6">
          <Link to="/about" className="hover:text-gray-300 transition duration-300">About Us</Link>
          <Link to="/history" className="hover:text-gray-300 transition duration-300">History</Link>
          <Link to="/gallery" className="hover:text-gray-300 transition duration-300">Gallery</Link>
          <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm opacity-60">© 2025 Shree Shantika Parameshwari Temple. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
