"use client";
import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");  // Email state
  const [message, setMessage] = useState("");  // Success/Error message state
  const [isSubmitting, setIsSubmitting] = useState(false);  // Disable button during submit
  const [expandedSection, setExpandedSection] = useState<string | null>(null);  // For expandable sections

  // Handle form submission
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");  // Reset message

    // Simulate a network request or actual subscription logic
    setTimeout(() => {
      setMessage("Subscribed successfully! 🎉");
      setEmail(""); // Clear email after success
      setIsSubmitting(false);
    }, 2000); // Simulate network delay
  };

  // Handle toggle of section visibility
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="w-full bg-gray-100 flex flex-col items-center p-4 font-montserrat">
      {/* Bandage Section */}
      <div className="flex justify-between mb-4 w-full px-4 max-w-screen-xl py-6">
        <div className="relative w-[1049px] h-[58px] bg-gray-100 flex justify-center font-bold text-xl">
          <span className="absolute left-20">Bandage</span>
        </div>
        <div className="flex justify-start gap-5 items-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex justify-center items-center">
            <FaFacebook className="w-[24px] h-[24px] text-blue-600" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex justify-center items-center">
            <FaInstagram className="w-[24px] h-[24px] text-pink-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex justify-center items-center">
            <FaTwitter className="w-[24px] h-[24px] text-blue-400" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex justify-center items-center">
            <FaYoutube className="w-[24px] h-[24px] text-red-600" />
          </a>
        </div>
      </div>

      {/* Sections in One Row (Side by Side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-4 max-w-screen-xl mx-auto">
        {/* Company Info Section */}
        <div className="w-[148px] h-[240px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Company Info</h4>
          <p className="text-xs mb-2">Learn more about our company, mission, and career opportunities.</p>
          <h5 onClick={() => toggleSection('company-about')} className="text-sm font-semibold hover:underline cursor-pointer">About Us</h5>
          {expandedSection === 'company-about' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Our company is dedicated to providing top-notch solutions in the tech industry.</p>
            </div>
          )}
          <h5 onClick={() => toggleSection('company-careers')} className="text-sm font-semibold hover:underline cursor-pointer">Careers</h5>
          {expandedSection === 'company-careers' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>We offer various opportunities in software development, marketing, and more!</p>
            </div>
          )}
          <h5 onClick={() => toggleSection('company-hiring')} className="text-sm font-semibold hover:underline cursor-pointer">We Are Hiring</h5>
          {expandedSection === 'company-hiring' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Join our dynamic team to create the next big tech solutions!</p>
            </div>
          )}
          <h5 onClick={() => toggleSection('company-blog')} className="text-sm font-semibold hover:underline cursor-pointer">Blog</h5>
          {expandedSection === 'company-blog' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Read our latest posts and articles about tech trends and innovations.</p>
            </div>
          )}
        </div>

        {/* Legal Info */}
        <div className="w-[152px] h-[240px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Legal</h4>
          <p className="text-xs mb-2">Understand the terms and policies that govern our services.</p>
          <h5 onClick={() => toggleSection('legal-privacy')} className="text-sm font-semibold hover:underline cursor-pointer">Privacy Policy</h5>
          {expandedSection === 'legal-privacy' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>We value your privacy and are committed to protecting your personal data.</p>
            </div>
          )}
          <h5 onClick={() => toggleSection('legal-terms')} className="text-sm font-semibold hover:underline cursor-pointer">Terms of Service</h5>
          {expandedSection === 'legal-terms' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>By using our services, you agree to the terms and conditions provided here.</p>
            </div>
          )}
        </div>

        {/*Info*/}
        <div className="w-[180px] h-[240px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Features</h4>
          <p className="text-xs mb-2">Explore the features that make our platform unique.</p>
          <h5 onClick={() => toggleSection('features-marketing')} className="text-sm font-semibold hover:underline cursor-pointer">Business Marketing</h5>
          {expandedSection === 'features-marketing' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Our platform provides powerful tools for business marketing and growth.</p>
            </div>
          )}
          <h5 onClick={() => toggleSection('features-analytic')} className="text-sm font-semibold hover:underline cursor-pointer">User Analytic</h5>
          {expandedSection === 'features-analytic' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Gain insights into user behavior to improve your service or product.</p>
            </div>
          )}
          <h5 onClick={() => toggleSection('features-chat')} className="text-sm font-semibold hover:underline cursor-pointer">Live Chat</h5>
          {expandedSection === 'features-chat' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Engage with your users instantly using our live chat feature.</p>
            </div>
          )}
          <h5 onClick={() => toggleSection('features-support')} className="text-sm font-semibold hover:underline cursor-pointer">Unlimited Support</h5>
          {expandedSection === 'features-support' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Our team is here to assist you 24/7 with any technical issues you face.</p>
            </div>
          )}
        </div>

        
        <div className="w-[152px] h-[240px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Resources</h4>
          <p className="text-xs mb-2">Find tools, guides, and demos to help you get started.</p>
          <h5 onClick={() => toggleSection('resources-ios')} className="text-sm font-semibold hover:underline cursor-pointer">IOS & Android</h5>
          {expandedSection === 'resources-ios' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Get our app on both iOS and Android devices for full functionality.</p>
            </div>
          )}
          <h5 onClick={() => toggleSection('resources-demo')} className="text-sm font-semibold hover:underline cursor-pointer">Watch a Demo</h5>
          {expandedSection === 'resources-demo' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Check out our demo to see the platform in action.</p>
            </div>
          )}
          <h5 onClick={() => toggleSection('resources-customers')} className="text-sm font-semibold hover:underline cursor-pointer">Customers</h5>
          {expandedSection === 'resources-customers' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Explore our customer success stories and testimonials.</p>
            </div>
          )}
          <h5 onClick={() => toggleSection('resources-api')} className="text-sm font-semibold hover:underline cursor-pointer">API</h5>
          {expandedSection === 'resources-api' && (
            <div className="mt-2 text-xs text-gray-600">
              <p>Integrate our API with your system for seamless functionality.</p>
            </div>
          )}
        </div>
      </div>

      {/* "Get in Touch" Section */}
      <div className="w-[220px] h-[240px] bg-white text-black flex flex-col justify-center items-center p-2">
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
            disabled={isSubmitting}
            className="w-[48%] h-[40px] bg-blue-400 text-white font-semibold rounded-r-md hover:bg-blue-500 disabled:bg-blue-300"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

      
        {message && (
          <p className={`text-center text-sm ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </div>

     
     
      <div className="mt-[2px] border-t pt-4 text-center text-sm text-gray-500 w-[600px] mx-auto h-[24px]">
        Made With Love By Finland | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
