import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    <div className="bg-[#0D1B2A] flex justify-center items-center min-h-screen p-4" id="contactus">
      <div className="bg-gradient-to-r from-[#1B263B] to-[#0D1B2A]  rounded-lg overflow-hidden lg:w-2/3 w-full flex flex-col lg:flex-row">

        <div className="bg-[#1B263B] text-white p-10 flex-1 flex flex-col justify-center rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl w-full lg:w-[485px]">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-8">Let’s Connect and <br/> Create Together!</h2>
          <p className="mb-6 text-[14px] lg:text-base">
            Have questions or feedback? Get in touch with our friendly support team for assistance. We're here to help!
          </p>
          
          <div className="space-y-6">
            {/* Our Office */}
            <div>
              <h4 className="font-semibold mb-2">Address</h4>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-xl" />
                <p>PO Box 24, Lecanto, FL 34460.</p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-xl" />
                <p>info@mygarageoutlet.com</p>
              </div>
            </div>

            {/* Phone */}
            <div>
              <h4 className="font-semibold mb-2">Number</h4>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-3 text-xl" />
                <p>(888) 862-0399 ext. 101</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-[#0B111D] p-10 pl-12 flex-1 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl">
          <h2 className="text-xl lg:text-[32px] font-bold mb-6 text-white text-left mt-8">Closer Than a Click Away</h2>
          
          <form className="space-y-8 mt-10">
            <div>
              <label className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                placeholder="e.g. John"
                className="mt-1 w-full border-b bg-transparent border-gray-300 text-white focus:outline-none focus:border-gray-500 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                placeholder="e.g. John@gmail.com"
                className="mt-1 w-full border-b bg-transparent border-gray-300 text-white focus:outline-none focus:border-gray-500 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Phone Number</label>
              <input
                type="text"
                placeholder="e.g. 0491 570 156"
                className="mt-1 w-full border-b bg-transparent border-gray-300 text-white focus:outline-none focus:border-gray-500 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Message</label>
              <textarea
                placeholder="Enter your message here"
                className="mt-1 w-full border-b bg-transparent border-gray-300 text-white focus:outline-none focus:border-gray-500 py-2 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[170px] h-[60px] bg-[#EF1C68] text-[16px] text-[#181818] font-semibold py-3 rounded-full transition duration-200 hover:bg-[#EF1C68] focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
    <Footer />

    </>
  );
};

export default Contact;
