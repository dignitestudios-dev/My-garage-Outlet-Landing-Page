import React from 'react';
import { feature1, feature2, feature3, feature4, feature5, feature6,gradient } from "../assets/export.js";

const Features = () => {
  const features = [
    { 
      title: "Host Your Own Event", 
      description: "Organize a sale in minutes by filling out a simple form with essential details like location, date, and pictures.", 
      image: feature1  
    },
    { 
      title: "Monetization Made Easy", 
      description: "For a small fee, enhance the visibility of your sale to reach more people, all through a secure and seamless payment gateway.", 
      image: feature2 
    },
    { 
      title: "Connect with Social Features", 
      description: "The app transforms garage sales into a social event, building a supportive, thriving community.", 
      image: feature3 
    },
    { 
      title: "Direct Messaging System", 
      description: "Chat with other users to negotiate, discuss details, and coordinate transactions smoothly for a hassle-free experience.", 
      image: feature4  
    },
    { 
      title: "Radius & Zip Code Search", 
      description: "Easily find sales near you using radius or zip code search, and plan your route for a streamlined shopping experience.", 
      image: feature5  
    },
    { 
      title: "Interactive Map Integration", 
      description: "Plan your shopping day with interactive maps showing sale locations. Optimize your journey by mapping the best routes to each sale spot.", 
      image: feature6  
    }
  ];

  return (
<div 
      className="flex flex-col items-center py-10 text-white"
      style={{
        background: `url(${gradient}), #0D1B2A`,
        backgroundPosition: 'center',       
        backgroundRepeat: 'no-repeat',      
      }}
    >      
      <div className="w-full max-w-6xl px-4" id="features">
        <h2 className="text-[50px] font-bold text-[#EF1C68] mb-2 text-left">Key Features <span className='text-white'>of</span> <br/><span className="font-bold text-left text-[50px] text-white">My Garage Outlet!</span> </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4 max-w-6xl">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-[#192A40] rounded-3xl shadow-lg text-center flex flex-col items-center space-y-4"
          >
            <h4 className="text-xl font-semibold pl-6 pr-6 pt-8 text-[#EF1C68]">{feature.title}</h4>
            <p className="text-gray-300 text-sm pl-6 pr-6">{feature.description}</p>
            <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-lg pl-8 pr-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
