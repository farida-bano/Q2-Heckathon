"use client";
import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"; // Removed unused icons

const Footer = () => {
  // State for the email input
  const [email, setEmail] = useState("");

  // Handle form submission (for demo purposes, we just log the email)
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed with email: ", email);
    setEmail(""); // Clear email input after submission
  };

  return (
    <footer className="w-full bg-gray-100 flex flex-col items-center p-4 font-montserrat">
      {/* Bandage Section */}
      <div className="flex justify-between mb-4 w-full px-4 max-w-screen-xl py-6">
        {/* Left Side: "Bandage" Text */}
        <div className="relative w-[1049px] h-[58px] bg-gray-100 flex justify-center font-bold text-xl">
          <span className="absolute left-20">Bandage</span>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex justify-start gap-5 items-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40px] h-[40px] flex justify-center items-center"
          >
            <FaFacebook className="w-[24px] h-[24px] text-blue-600" /> {/* Facebook Icon with Blue Color */}
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40px] h-[40px] flex justify-center items-center"
          >
            <FaInstagram className="w-[24px] h-[24px] text-pink-600" /> {/* Instagram Icon with Pink Color */}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40px] h-[40px] flex justify-center items-center"
          >
            <FaTwitter className="w-[24px] h-[24px] text-blue-400" /> {/* Twitter Icon with Blue Color */}
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40px] h-[40px] flex justify-center items-center"
          >
            <FaYoutube className="w-[24px] h-[24px] text-red-600" /> {/* YouTube Icon with Red Color */}
          </a>
        </div>
      </div>

      {/* Sections in One Row (Side by Side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-4 max-w-screen-xl mx-auto">
        {/* Company Info Section */}
        <div className="w-[148px] h-[220px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Company Info</h4>
          <h5 className="text-sm font-semibold hover:underline">About Us</h5>
          <h5 className="text-sm font-semibold hover:underline">Careers</h5>
          <h5 className="text-sm font-semibold hover:underline">We Are Hiring</h5>
          <h5 className="text-sm font-semibold hover:underline">Blog</h5>
        </div>

        {/* Legal Info Section */}
        <div className="w-[152px] h-[220px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Legal</h4>
          <h5 className="text-sm font-semibold hover:underline">Privacy Policy</h5>
          <h5 className="text-sm font-semibold hover:underline">Terms of Service</h5>
        </div>

        {/* Features Info Section */}
        <div className="w-[180px] h-[220px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Features</h4>
          <h5 className="text-sm font-semibold hover:underline">Business Marketing</h5>
          <h5 className="text-sm font-semibold hover:underline">User Analytic</h5>
          <h5 className="text-sm font-semibold hover:underline">Live Chat</h5>
          <h5 className="text-sm font-semibold hover:underline">Unlimited Support</h5>
        </div>

        {/* Resources Info Section */}
        <div className="w-[152px] h-[220px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Resources</h4>
          <h5 className="text-sm font-semibold hover:underline">IOS & Android</h5>
          <h5 className="text-sm font-semibold hover:underline">Watch a Demo</h5>
          <h5 className="text-sm font-semibold hover:underline">Customers</h5>
          <h5 className="text-sm font-semibold hover:underline">API</h5>
        </div>

        {/* "Get in Touch" Section */}
        <div className="w-[220px] h-[220px] bg-white text-black flex flex-col justify-center items-center p-2">
          {/* Heading "Get In Touch" */}
          <h4 className="text-2xl mb-2">Get In Touch</h4>

          {/* Email Input and Subscribe Button */}
          <form onSubmit={handleSubscribe} className="w-[100%] bg-white text-black flex p-2 border border-gray-300 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-[70%] h-[40px] bg-gray-200 text-black px-3 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-[48%] h-[40px] bg-blue-400 text-white font-semibold rounded-r-md hover:bg-blue-500"
            >
              Subscribe
            </button>
          </form>

          {/* Lorem Ipsum text */}
          <h5 className="text-sm text-center" style={{ width: "155px", height: "28px" }}>
            Lorem ipsum dolor sit amet
          </h5>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-[2px] border-t pt-4 text-center text-sm text-gray-500 w-[600px] mx-auto h-[24px]">
        Made With Love By Finland | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
