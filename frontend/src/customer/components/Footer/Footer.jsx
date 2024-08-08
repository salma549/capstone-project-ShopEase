import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-2">ShopEase</h2>
          <p className="text-lg text-black mb-4 text-center md:text-left">
            Your one-stop solution for personalized styling suggestions.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        {/* Middle Section */}
        <div className="flex flex-col items-center md:items-center mt-8 md:mt-0">
          <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
          <ul className="text-black text-xl">
            <li className="mb-2">
              <a href="#" className="hover:text-white">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Category</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-2xl font-semibold mb-2">Follow Me</h2>
          <ul className="text-2xl flex space-x-4">
            <li>
              <a href="https://www.instagram.com/kousar-6563" className="hover:text-gray-300">
                <AiFillInstagram size={44} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/yourprofile" className="hover:text-gray-300">
                <AiFillFacebook size={44} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/yourprofile" className="hover:text-gray-300">
                <FaTwitterSquare size={44} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-lg text-center text-black mt-8">
        &copy; 2024 ShopEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
