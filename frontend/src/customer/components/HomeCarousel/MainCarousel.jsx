// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { mainCarouselData } from './MainCarouselData';

// const MainCarousel = () => {
//     const items = mainCarouselData().map((item, index) => (
//         <img key={index} className='cursor-pointer' role='presentation' src={item.image} alt="" />
//     ));

//     return (
//         <AliceCarousel
//             autoPlay
//             autoPlayControls
//             autoPlayStrategy="none"
//             autoPlayInterval={1000}
//             animationDuration={1000}
//             animationType="fadeout"
//             infinite
//             touchTracking={false}
//             disableDotsControls
//             disableButtonsControls
//             items={items}
//         />
//     );
// };

// export default MainCarousel;

// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { mainCarouselData } from './MainCarouselData'; // Make sure this path is correct

// const MainCarousel = () => {
//     const responsive = {
//         0: { items: 1 },
//         568: { items: 2 },
//         1024: { items: 3 },
//     };
//     // Define items before the return statement
//     const items = mainCarouselData().map((item, index) => (
//         <img key={index} className='cursor-pointer' role='presentation' src={item.image} alt="" />
//     ));

//     // Return the JSX
//     return (
//         <AliceCarousel
           
          
//             // autoPlay
//             // autoPlayInterval={1000}
        
//             // infinite
          
//             // disableButtonsControls

//             mouseTracking
//             items={items}
//             responsive={responsive}
//             controlsStrategy="alternate"
//         />
//     );
// };

// export default MainCarousel;


// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import './MainCarousel.css'; // Ensure this CSS file is updated with proper styles
// import { mainCarouselData } from './MainCarouselData';

// const MainCarousel = () => {
//     const items = mainCarouselData.map((item, index) => (
//         <div key={index} className="carousel-item">
//             <img className='carousel-image' src={item.image} alt={`Slide ${index + 1}`} />
//         </div>
//     ));

//     return (
//         <AliceCarousel
//             mouseTracking
//             items={items}
//             responsive={{
//                 0: { items: 1 },
//                 768: { items: 1 } // Shows 1 items per slide on wider screens
//             }}
//             controlsStrategy="alternate"
//             autoPlay
//                         autoPlayInterval={1000}
                    
//                         infinite
                      
//                         disableButtonsControls
            
//         />
//     );
// };

// export default MainCarousel;


//-------------
// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { mainCarouselData } from './MainCarouselData';

// const MainCarousel = () => {
//     const items = mainCarouselData.map((item, index) => (
//         <div key={index} className="flex justify-center items-center h-64 sm:h-72 md:h-80 lg:h-96"> {/* Adjust height as needed */}
//             <img className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out" src={item.image} alt={`Slide ${index + 1}`} />
//         </div>
//     ));

//     return (
//         <div className="mt-20"> {/* Adjust mt-20 to move the carousel down if needed */}
//             <AliceCarousel
//                 mouseTracking
//                 items={items}
//                 responsive={{
//                     0: { items: 1 },
//                     768: { items: 2 } // Shows 2 items per slide on wider screens
//                 }}
//                 controlsStrategy="alternate"
//                 autoPlay
//                 autoPlayInterval={1000}
//                 infinite
//                 disableButtonsControls
//             />
//             {/* Centered Content */}
//             <div className="flex flex-col mt-10 items-center text-center sm:text-left">
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-8">
//                     <span className="block font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">ALL-IN-ONE</span>
//                     <span className="block font-serif relative">
//                         <span className="animated-text bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">LIFESTYLE HUB</span>
//                     </span>
//                 </h1>
//                 {/* Description */}
//                 <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-4 px-6 w-full text-center shadow-sm mb-4 sm:mb-8">
//                     <p className="text-gray-800 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed">
//                         <span className="font-semibold">ShopEase is a website where users can upload a photo of their dress and get personalized styling suggestions for accessories like earrings, purses, handbags, and sandals for women, and shirts, T-shirts, sneakers, and other recommended outfits for men.</span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MainCarousel;
import React from 'react';
import circleImage1 from '../../assets/images/girl.jpg'; // Replace with your image path
import circleImage2 from '../../assets/images/girl1.jpg'; // Replace with your image path
import circleImage3 from '../../assets/images/boy1.jpg'; // Replace with your image path
import circleImage4 from '../../assets/images/boy2.jpg'; // Replace with your image path
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function MainCarousel() {
  const items = [
    <div className=" items flex justify-center space-x-4 py-8 bg-gray-100">
    <div className="items iw-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg hover:cursor-pointer overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img src={circleImage1} alt="Square 1" className="w-full h-full object-cover" />
    </div>
    <div className="items w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg hover:cursor-pointer overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img src={circleImage2} alt="Square 2" className="w-full h-full object-cover" />
    </div>
    <div className="items w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg hover:cursor-pointer overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img src={circleImage3} alt="Square 3" className="w-full h-full object-cover" />
    </div>
    <div className="items w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg hover:cursor-pointer overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img src={circleImage4} alt="Square 4" className="w-full h-full object-cover" />
    </div>
  </div>
  ];

  return (
    <div className="relative bg-gradient-to-r from-pink-100 to-purple-100 flex flex-col justify-between">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{
          0: { items: 1 },
          768: { items: 2 } // Shows 2 items per slide on wider screens
        }}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={2000}
        infinite
              disableButtonsControls
              disableDotsControls
      />
      
      {/* Top Squares */}
    
      
      {/* Main Content */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 h-full">
        {/* Centered Content */}
        <div className="flex flex-col mt-10 items-center text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-8">
            <span className="block font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">ALL-IN-ONE</span>
            <span className="block font-serif relative">
              <span className="animated-text bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">LIFESTYLE HUB</span>
            </span>
          </h1>
          {/* Description */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-4 px-6 w-full text-center shadow-sm mb-4 sm:mb-8">
            <p className="text-gray-800 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed">
              <span className="font-semibold font-signature">ShopEase is a website where users can upload a photo of their dress and get personalized styling suggestions for accessories like earrings, purses, handbags, and sandals for women, and shirts, T-shirts, sneakers, and other recommended outfits for men.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCarousel;