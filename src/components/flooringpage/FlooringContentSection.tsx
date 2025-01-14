import React from "react";
import Image from "next/image"; // Importing Next.js optimized Image component

const FlooringContentSection: React.FC = () => {
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
            Trendy Flooring Dubai Options For Interior Design in Dubai
          </h2>
          <p className="text-white mb-6 text-justify font-normal text-sm">
            First Choice General Trading LLC is your go-to destination for
            stylish and high-quality flooring solutions in Dubai. Our wide range
            <br />
            <br />
            of trendy flooring options will elevate your interior design,
            blending aesthetics with functionality to meet your unique needs.
            Explore our offerings below and find the perfect flooring to
            transform your space.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://wa.me/971555243724" // Replace with your WhatsApp number
              target="_blank"
            >
              <button className="bg-[#FFC100] text-white px-4 py-2 rounded-md hover:bg-[#14B1E7] transition">
                Book Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlooringContentSection;
