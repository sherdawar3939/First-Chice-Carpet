import React from "react";
import { Button, Carousel } from "antd";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-slider relative overflow-hidden">
      <Carousel>
        <div className="relative w-full h-[60vh] md:h-screen flex items-center justify-center">
          <img
            src="/images/carpet.jpg"
            alt="Slider 1"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-10">
            <div className="text-start text-white">
              <h1 className="text-2xl md:text-5xl font-bold mb-4 py-10">
                Transform Your Space <br />
                with Luxurious Carpets
              </h1>
              <p className="text-base md:text-xl mb-6 font-light">
                Discover our premium selection of carpets, perfect for every
                room. Elevate your home or office with comfort and style.
              </p>
              <button className="bg-gradient-to-r from-[#14B1E7] to-[#FFC100] hover:bg-gradient-to-r hover:bg-[#FFC100] hover:to-[#14B1E7] border-none px-4 md:px-10 py-5 text-sm font-medium tracking-widest rounded-md">
                Explore Carpets
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[60vh] md:h-screen flex items-center justify-center">
          <img
            src="/images/chair.jpg"
            alt="Slider 2"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-10">
            <div className="text-start text-white">
              <h1 className="text-2xl md:text-5xl font-bold mb-4 py-10">
                Stylish Curtains for Every Room
              </h1>
              <p className="text-base md:text-xl mb-6 font-normal">
                From motorized curtains to sheer elegance, find the perfect
                match for your home’s aesthetic
              </p>
              <button className="hover:bg-[#14B1E7] bg-[#FFC100] border-none px-4 md:px-16 py-5 text-sm font-medium tracking-widest rounded-md">
                Visit Now
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[60vh] md:h-screen flex items-center justify-center">
          <img
            src="/images/rugs.jpg"
            alt="Slider 3"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-10">
            <div className="text-start text-white">
              <h1 className="text-2xl md:text-5xl font-bold mb-4 py-10">
                Step into Luxury with Premium Flooring
              </h1>
              <p className="text-base md:text-xl mb-6 font-light">
                Upgrade your flooring with our wide range of vinyl, parquet, and
                LVT options for a modern, durable finish.
              </p>
              <button className="bg-[#14B1E7] hover:bg-[#FFC100] border-none px-4 md:px-16 py-5 text-sm font-medium tracking-widest rounded-md">
                View Flooring
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
