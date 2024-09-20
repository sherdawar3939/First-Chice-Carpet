import React from "react";
import Image from "next/image"; // Importing Next.js optimized Image component

export const CurtainContentSection: React.FC = () => {
  return (
    <div className="relative bg-gray-50 py-10 px-4 group">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/chair.jpg" // Your background image path
          alt="Background"
          layout="fill" // This makes the image cover the container
          objectFit="cover" // Makes sure the image covers the entire background
          objectPosition="center" // Centers the background image
          className="opacity-70 transition-opacity duration-500 group-hover:opacity-60" // Fade the background image when hovered
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-55 transition-opacity duration-500 z-0"></div>

      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-12 z-10">
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
          <Image
            src="/images/rugs.jpg"
            alt="Luxury Interior Design"
            width={350}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center md:justify-start">
            <i className="mr-2 text-lg text-white">🏢</i>
            Stylish and Elegant Curtains For Interior Design in Dubai
          </h2>
          <p className="text-white mb-6 text-justify font-normal text-sm">
            Curtains play an essential role in setting the mood and enhancing
            the style of any room. At First Choice General Trading LLC, we offer
            quality curtains and blinds designed
            <br />
            <br />
            to bring elegance, privacy, and comfort to your home. Our curtain
            collection is curated to cater to various needs and tastes, ensuring
            that you find the perfect solution for every
            <br />
            room. From classic styles to modern innovations, our selection is
            designed to elevate your interiors
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-[#FFC100] text-white px-4 py-2 rounded-md hover:bg-[#14B1E7] transition">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};