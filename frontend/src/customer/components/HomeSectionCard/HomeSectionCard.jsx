

import React from "react";
// import Image1 from "../../assets/images/boy7.jpg";
const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3  pt-8 border">
      <div className="h-[18rem] w-[13rem] ">
        <img
          src={product.image}
          alt="Square 1"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{ product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;