import React from 'react';
import { heroimage, herobg } from "../assets/export"; 
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      className="relative text-white items-center min-h-screen"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',  
      }}
    >
      <Navbar className="absolute top-0 left-0 right-0 bg-transparent z-20" />

      <div className="text-center py-20" id="home"> 
        <h2 className="text-sm md:text-[16px] mb-4 tracking-wider font-light" id="home">
        Welcome to My Garage Outlet        </h2>
        <p className="text-4xl md:text-5xl mt-2 font-bold mb-4 uppercase">
        Discover, Host, and Connect <br/> with Local Garage Sales!       </p>
        <h2 className="text-sm md:text-[14px] tracking-wider font-light mt-8">
        My Garage Outlet is the ultimate app for finding, hosting, and sharing local garage sales. Discover unique finds nearby,<br/> create your own sale, and connect with a community of thrifters—all in one social experience.       </h2>
      </div>

      <div className="w-full flex justify-center">
        <img
          src={heroimage}
          alt="Mobile App Mockup"
          className="relative mx-auto max-w-xs md:max-w-md lg:max-w-3xl z-10 mb-32"
        />
      </div>  
    </div>
  );
};

export default Hero;
