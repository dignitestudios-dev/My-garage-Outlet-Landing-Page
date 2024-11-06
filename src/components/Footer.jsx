import React from 'react';
import { logo } from "../assets/export.js"; // Make sure the path is correct
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { footerbg,appstore,playstore } from "../assets/export.js"; // Make sure the path is correct

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white relative">
      <div className="relative z-10 lg:-mb-20">
        <div className="container mx-auto text-center">
          <div 
            className="p-10 rounded-2xl max-w-3xl mx-auto shadow-lg lg:w-[874px] lg:h-[284px] bg-[#EF1C68]"
            style={{ backgroundImage: `url(${footerbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-[20px] font-medium">
            Ready to Explore?            </h2>
            <h3 className="text-[32px] font-medium text-white"> Download the App Now</h3>
            <p className="text-[14px] mx-auto">
            Download My Garage Outlet today and be part of a community that loves to find <br/> and share unique treasures.</p>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="#">
                <img
                  src={playstore}
                  alt="Google Play"
                  className="h-14"
                />
              </a>
              <a href="#">
                <img
                  src={appstore}
                  alt="App Store"
                  className="h-14"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#040808] py-16 relative mt-10 p-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-white text-2xl font-bold">
              <img src={logo} alt="Logo" />
            </div>
          </div>

          <div className="my-5 md:my-0 flex flex-col items-center lg:ml-36 text-white">
            <h3 className="font-medium mb-3 lg:text-[24px] mt-4">Find us on Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-lg hover:text-[#EF1C68] border border-white rounded-full p-3">
                <FaFacebookF />
              </a>
              <a href="#" className="text-lg hover:text-[#EF1C68] border border-white rounded-full p-3">
                <FaTwitter />
              </a>
              <a href="#" className="text-lg hover:text-[#EF1C68] border border-white rounded-full p-3">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-white">
            <p className="lg:text-[20px]">We’re always happy to help.</p>
            <p className="mt-2 text-[14px] font-light">info@mygarageoutlet.com</p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 pt-10 text-sm text-white">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
            <p className="mt-3 text-sm md:order-1 order-2 text-center md:text-left">
            Copyright © 2024 MyGarageOutlet. All rights reserved.            </p>

            <div className="flex space-x-3 md:order-2 order-1 text-white">
              <a href="#" className="hover:text-[#EF1C68]">Terms of Services</a>
              <span> | </span>
              <a href="#" className="hover:text-teal-400">Privacy Policy</a>
              <span> | </span>
              <a href="#" className="hover:text-teal-400">FAQs</a>
              <span> | </span>
              <a href="/contact-us" className="hover:text-teal-400">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
