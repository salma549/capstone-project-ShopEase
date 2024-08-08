import React from 'react';
import aboutImage from '../About/assets/images/girl3.jpg'; // Replace with your image path

const About = () => {
  return (
    <div className="relative w-full h-auto p-6 bg-gray-100 ">
      <div className="absolute bg-white"></div> {/* Optional gradient overlay */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center py-12 md:space-x-8">
        
        {/* Description Section */}
        <div className="w-full md:w-1/2 px-6 md:px-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center md:text-left">About Us</h2>
          <p className="text-black text-lg leading-relaxed text-center md:text-left">
            Welcome to ShopEase! We are committed to providing you with the best shopping experience possible. Our mission is to offer personalized styling suggestions that meet your unique needs. Our team is passionate about fashion and dedicated to helping you find the perfect products that enhance your style. Thank you for choosing us as your fashion partner. We look forward to serving you!
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-full max-w-md">
            <div className="absolute bg-white rounded-lg"></div> {/* Optional background */}
            <img src={aboutImage} alt="About Us" className="w-full h-full object-coverrounded-lg hover:cursor-pointer overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;