import React from 'react';
import { about } from "../assets/export.js";

const About = () => {
  return (
    <div className="bg-[#0D1B2A] flex flex-col lg:flex-row justify-center items-center lg:px-20 -mt-2" id="aboutus">
      <div className="relative overflow-hiddenlg:mb-0">
        <img 
          src={about} 
          alt="Phone"
          className="w-auto h-auto sm:w-[400px] lg:h-auto lg:w-auto"
        />
      </div>

      <div className="lg:w-1/3 text-center lg:text-left lg:ml-15">
        <h2 className="text-xl sm:text-3xl lg:text-[50px] font-bold mb-6 text-white">
        About Us        </h2>
        <p className="md:text-[20px] lg:text-[20px] sm:text-[12px] mb-4 font-medium text-white">
        Revolutionizing the Garage Sale Experience        </p>
        <p className="text-white md:text-[15px] lg:text-[15px] sm:text-[12px] mb-4">
        My Garage Outlet was created to bring the classic garage sale experience into the digital age. We know that garage sales are more than just transactions—they’re a way to connect, share stories, and find treasures. Our mission is to make it easier for everyone to host and discover garage sales nearby, while creating a connected, vibrant community.        </p>
        <p className="text-white md:text-[15px] lg:text-[15px] sm:text-[12px] mb-8">
        Join us and be part of the neighborhood!        </p>
      </div>
    </div>
  );
};

export default About;