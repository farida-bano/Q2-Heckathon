"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Image component

export default function Carousel() {
  const router = useRouter();

  const handleAddToCart = () => {
    console.log("Item added to cart!");
    alert("Item added to cart!"); 
  };

  const handleBuyNow = () => {
    // Navigate 
    router.push('/checkout'); 
  };

  const handleReadMore = () => {
    // Navigate 
    router.push('/product-details'); 
  };

  return (
    <section>
      <div className="bg-[#23856D] flex flex-col lg:flex-row items-center justify-center pt-10 px-6 lg:px-20">
        <div className="flex flex-col text-center lg:text-left lg:mr-10">
          <p className="text-xl mb-5 text-white uppercase tracking-wide">
            Summer 2020
          </p>
          <h1 className="text-6xl mb-5 font-bold text-white mt-2">
            Vita Classic Product
          </h1>
          <p className="text-sm mb-5 text-white mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex justify-center md:justify-start flex-row items-center space-x-2">
            <p className="text-2xl font-bold text-white mt-6">$16.48</p>
            <button 
              className="mt-4 px-10 py-4 bg-[#2DC071] text-white font-bold rounded hover:bg-[#28a45e] transition-colors duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image
            src="/boy.png"
            alt="Vita Classic Product"
            width={500}  // Add width and height
            height={500}
            className="w-full max-w-sm lg:max-w-md object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="bg-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20">
        <div className="mt-8 lg:mt-0">
          <Image
            src="/girl-boy.png"
            alt="Carousel 2"
            width={500}  // Add width and height
            height={500}
            className="w-full max-w-sm lg:max-w-md object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col pt-10 lg:pt-0 text-center lg:text-left lg:ml-10">
          <p className="font-bold mb-5 text-[#BDBDBD] tracking-wide">
            SUMMER 2020
          </p>
          <h1 className="text-6xl mb-5 font-bold text-[#252B42] mt-2">
            Part of the Neural Universe
          </h1>
          <p className="text-sm mb-5 text-[#737373] mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex mb-3 justify-center md:justify-start flex-col lg:flex-row items-center space-x-2">
            <button 
              className="mt-4 px-10 py-4 bg-[#2DC071] text-white font-bold rounded hover:bg-[#28a45e] transition-colors duration-300"
              onClick={handleBuyNow}
            >
              BUY NOW
            </button>
            <button 
              className="font-bold px-10 py-4 text-[#2DC071] mt-6 border rounded border-[#2DC071] hover:bg-[#2DC071] hover:text-white transition-colors duration-300"
              onClick={handleReadMore}
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
