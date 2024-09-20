import React, { useRef } from "react";
import { Carousel } from "antd";
import Link from "next/link";

const slides = [
  {
    title: "Transform Your Space with Luxurious Carpets",
    description:
      "Discover our premium selection of carpets, perfect for every room. Elevate your home or office with comfort and style.",
    buttonText: "Explore Carpets",
    buttonLink: "/carpets",
    imageUrl: "/images/carpet.jpg",
  },
  {
    title: "Stylish Curtains for Every Room",
    description:
      "From motorized curtains to sheer elegance, find the perfect match for your home’s aesthetic.",
    buttonText: "Visit Now",
    buttonLink: "/curtains",
    imageUrl: "/images/chair.jpg",
  },
  {
    title: "Step into Luxury with Premium Flooring",
    description:
      "Upgrade your flooring with our wide range of vinyl, parquet, and LVT options for a modern, durable finish.",
    buttonText: "View Flooring",
    buttonLink: "/flooring",
    imageUrl: "/images/rugs.jpg",
  },
];

const HeroSection: React.FC = () => {
  const carouselRef = useRef<any>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className="hero-slider relative overflow-hidden">
      <Carousel
        ref={carouselRef}
        autoplay
        speed={1700}
        autoplaySpeed={5000}
        easing="ease-in-out"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-[60vh] md:h-screen flex items-center justify-center"
          >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-2000 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-10">
              <div className="text-center text-white">
                <h1 className="text-2xl md:text-5xl font-bold mb-4 py-10">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl mb-6 font-light">
                  {slide.description}
                </p>
                <div className="flex justify-center">
                  <Link href={slide.buttonLink}>
                    <button className="text-white bg-gradient-to-r from-[#14B1E7] to-[#FFC100] hover:bg-gradient-to-r hover:from-[#FFC100] hover:to-[#14B1E7] border-none px-4 md:px-10 w-60 py-5 text-sm font-medium tracking-widest rounded-md transition-transform transform hover:scale-105 duration-300">
                      {slide.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Previous and Next Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 transition"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 transition"
      >
        &#8594;
      </button>
    </div>
  );
};

export default HeroSection;
