import React from 'react';
import { FaTachometerAlt, FaChartLine, FaSearch, FaLightbulb } from 'react-icons/fa';
import heroImg from '../assets/hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 lg:py-40">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Unlock the Power of Social Media Insights with <span className="text-yellow-400">SocialPulse</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Analyze your social media performance with ease. Get insights on engagement metrics, discover trends, and improve your content strategy today.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="#get-started"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
            >
              Get Started
            </a>
          </div>
        </div>

        
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <img
            src={heroImg} // Replace with your own image URL
            alt="Social Media Analytics"
            className="w-full max-w-sm mx-auto lg:max-w-md shadow-lg rounded-lg"
          />
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-500 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
