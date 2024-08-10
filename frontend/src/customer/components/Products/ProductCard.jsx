import React from "react";
import Image from "../../assets/images/girl16.jpg";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="imageContainer h-[25rem]">
        {" "}
        {/* Adjusted height */}
        <img
          src={product.image}
          alt="Women's Product Images"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
                  <p className="font-bold opacity-60">{product.brand}</p>
                  <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
                  <p className="font-semibold">{product.selling_price}</p>
                  <p className="line-through opacity-50">{product.price}</p>
                  <p className="text-green-600 font-semibold">{product.disscount}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;