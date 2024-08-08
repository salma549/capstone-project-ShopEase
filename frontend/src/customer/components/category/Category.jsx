import React from 'react';
import video1 from '../category/videos/bg.mp4'; // Replace with your video path
import video2 from '../category/videos/bg.mp4'; // Replace with your video path


const Category = () => {
  return (
 
    <div name='category' className="bg-white  mt-32  flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-2 animated-text">FashionMatch Shopping Experience</h1>
      <p className="text-2xl mb-5">Tailored Shopping Experience for Men and Women</p>
      <div className="flex w-full space-x-4 mb-5">
        <div className="flex flex-col items-center w-1/2">
          <video 
            src={video1} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full rounded-md h-auto mb-2 hover:cursor-pointer overflow-hidden shadow-lg  hover:shadow-2xl" />
          <button className="bg-blue-500 mt-5 text-lg text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Explore
          </button>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <video 
            src={video2} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full rounded-md h-auto mb-2  hover:cursor-pointer overflow-hidden shadow-lg  hover:shadow-2xl" 
          />
          <button className="bg-blue-500 text-lg  text-white mt-5 px-4 py-2 rounded-lg hover:bg-blue-600">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;