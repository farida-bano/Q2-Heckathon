"use client"; 

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    '/farida.png', // Your original image
    '/a.png',      // Additional image 1
    '/b.png'       // Additional image 2
  ];

  // Handle auto-sliding
  useEffect(() => {
    if (isHovered) return; // Don't change image if hovered
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [isHovered, images.length]); // Adding `images.length` to the dependency array

  const handleShopNowClick = () => {
    router.push('/shop');
  };

  // Manual navigation functions
  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  // Hover handlers to pause/resume auto-sliding
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="relative w-full h-[716px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image 
          src={images[currentImage]} 
          alt={`Farida Image ${currentImage + 1}`} 
          layout="fill" 
          objectFit="cover" 
          className="object-center transition-all duration-500 ease-in-out" 
        />
      </div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start text-left px-6 sm:px-10 lg:px-20 py-6 lg:py-12">
        <div className="font-montserrat font-bold text-[18px] leading-[24px] tracking-[0.1px] text-white">
          <p>SUMMER 2020</p>
        </div>

        <div className="font-montserrat font-bold text-[40px] sm:text-[58px] leading-[60px] sm:leading-[90px] tracking-[0.2px] text-white mt-4">
          <h1>New Collection</h1>
        </div>

        <div className="w-full sm:w-[376px] h-[90px] text-[#fafafa] flex items-center justify-start rounded-lg mt-4 font-semibold text-lg sm:text-xl pl-8">
          We are how large objects will act, <br /> but things on a small scale
        </div>

        {/* Button */}
        <div className="mt-8">
          <span 
            className="font-montserrat font-bold text-[30px] leading-[30px] tracking-[0.2px] bg-[#2DC071] text-white inline-block py-[20px] px-[40px] rounded-[5px] text-center cursor-pointer transition duration-300 ease-in-out hover:bg-[#28a054] hover:scale-105"
            onClick={handleShopNowClick}
          >
            SHOP NOW
          </span>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
          <button 
            className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 focus:outline-none"
            onClick={handlePrevImage}
          >
            <span className="text-3xl">←</span> {/* Left Arrow */}
          </button>
          <button 
            className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 focus:outline-none"
            onClick={handleNextImage}
          >
            <span className="text-3xl">→</span> {/* Right Arrow */}
          </button>
        </div>

        {/* Image Indicators (Dots) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full bg-white opacity-50 cursor-pointer transition-all duration-300 ${
                index === currentImage ? 'opacity-100' : ''
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
