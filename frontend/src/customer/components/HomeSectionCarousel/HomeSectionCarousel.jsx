// import React from 'react'
// import AliceCarousel from 'react-alice-carousel'
// import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
// import { Button } from '@headlessui/react';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// const HomeSectionCarousel = () => {
//     const responsive = {
//         0: { items: 1 },
//        720: { items: 3 },
//         1024: { items: 5.5 },
//     };

//     const items =[1,1,1,1,1].map((item) => <HomeSectionCard />)
//     return (
//       <div className='relative px-4 lg:px-8'>
//       <div className='relative p-5 mt-56'>
//           <AliceCarousel
//               items={items}
//               disableButtonsControls
//               infinite
//               responsive={responsive}
//                 />
//                 <Button variant="contained" className="z-50 bg-white" sx={{position:'absolute' , top:"8rem" , right:"0rem" , transform:"translateX(50%) rotate(90deg)" , bgColor:"white"}}  aria-label="next">
//                     <KeyboardArrowLeftIcon sx={{ transform : "rotate(90deg)", color:"black"}}/>
//                 </Button>
//                 </div>
//                 </div>
//   )
// }

// export default HomeSectionCarousel
import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({ data , sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Create a ref for AliceCarousel

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev(); // Use slidePrev method
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Update activeIndex
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext(); // Use slideNext method
      setActiveIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1)); // Update activeIndex
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 40).map((item) => (
    <HomeSectionCard product={item} key={item.id} /> // Ensure each item has a unique key
  ));

  return (
    <div className="border mt-10">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 ml-4 ">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Attach ref to AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex < items.length - 1 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
            style={{
              position: "absolute",
              top: "50%",
              right: "0.5rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon className="transform rotate-90" />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
            style={{
              position: "absolute",
              top: "50%",
              left: "0.5rem",
              transform: "translateY(-50%) rotate(-90deg)",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon className="transform rotate-90" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;




// import React, { useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css"; // Ensure you import the CSS
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// import { Button } from "@headlessui/react";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { womens } from "../../../Data/womens"; // Adjust the path as needed

// const HomeSectionCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5.5 },
//   };

//   const slidePrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0)); // Prevent negative index
//   const slideNext = () => setActiveIndex((prev) => Math.min(prev + 1, items.length - 1)); // Prevent exceeding index

//   const syncActiveIndex = ({ item }) => setActiveIndex(item);

//   const items = womens.slice(0, 10).map((item) => (
//     <HomeSectionCard product={item} key={item.id} /> // Ensure each item has a unique key
//   ));

//   return (
//     <div className="border mt-52">
//       <div className="relative p-5">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           infinite
//           responsive={responsive}
//           disableDotsControls
//           onSlideChange={syncActiveIndex}
//           activeIndex={activeIndex}
//         />

//         {activeIndex !== items.length - 5 && (
//           <Button
//             variant="contained"
//             className="z-50 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
//             onClick={slideNext}
//             style={{
//               position: "absolute",
//               top: "50%",
//               right: "0.5rem",
//               transform: "translateX(50%) rotate(90deg)",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon className="transform rotate-90" />
//           </Button>
//         )}
//         {activeIndex > 0 && (
//           <Button
//             variant="contained"
//             className="z-50 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
//             onClick={slidePrev}
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "0.5rem",
//               transform: "translateY(-50%) rotate(-90deg)",
//             }}
//             aria-label="prev"
//           >
//             <KeyboardArrowLeftIcon className="transform rotate-90" />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;