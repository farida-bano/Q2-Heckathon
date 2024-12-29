"use client"
import React, { useState } from "react";
import Image from "next/image";

const BestProduct = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const products = [
    {
      id: 1,
      image: "/41.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 2,
      image: "/42.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 3,
      image: "/43.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 4,
      image: "/44.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 5,
      image: "/51.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 6,
      image: "/52.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 7,
      image: "/53.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 8,
      image: "/54.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ];

  // Handle color click with type annotation
  const handleColorClick = (color: string) => {
    setActiveImage(color); 
  };

  return (
    <section className="py-10 px-4 md:px-4 lg:px-16">
      <div className="text-center mb-8">
        <p className="text-2xl text-[#737373]">Featured Products</p>
        <h2 className="text-2xl font-bold text-[#252B42]">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="lg:px-40 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <div className="relative mb-4 group">
              <Image
                src={activeImage || product.image}
                alt={product.name}
                layout="responsive"
                width={239}
                height={427}
                className="transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-base font-bold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.department}</p>
            <div className="flex justify-center items-center space-x-2 mt-2">
              <p className="text-[#BDBDBD] font-bold">{product.originalPrice}</p>
              <p className="text-[#23856D] font-bold">{product.discountedPrice}</p>
            </div>
            <div className="flex justify-center items-center mt-2 space-x-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full cursor-pointer border-2 border-white hover:ring-2 ring-offset-2 ring-[#23856D] transition-all duration-200"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestProduct;
