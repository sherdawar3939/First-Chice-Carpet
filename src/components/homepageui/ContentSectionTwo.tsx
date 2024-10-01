import React from "react";
import Image from "next/image"; // Use this if you're using Next.js for image optimization

const ContentSectionTwo: React.FC = () => {
  return (
    <div className="bg-gray-200/30 py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-12">
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
          <Image
            src="/images/chair.jpg"
            alt="Luxury Interior Design"
            width={350}
            height={350}
            style={{ width: "350px", height: "350px" }}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center md:justify-start">
            <i className="mr-2 text-lg">🏢</i>
            Elevating Living Standards with Luxury Interior Design
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            Looking for the best interior design companies in Dubai? Interior
            design is not just about decoration; it&apos;s about improving your
            lifestyle and enhancing the way you experience your surroundings. A
            well-designed home or office not only looks impressive but also
            functions efficiently, creating a space where you can thrive. At
            First Choice, we offer an extensive selection of premium products
            that cater to your interior needs.
            <br />
            <br />
            From stylish carpets to elegant curtains, durable flooring, and
            beautiful rugs, we ensure that every product we offer is of the
            highest quality. Our interior designer in Dubai is dedicated to
            helping you get the right products that match your style, providing
            you with a seamless interior design experience.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://wa.me/971555243724" // Replace with your WhatsApp number
              target="_blank"
            >
              <button className="bg-[#14B1E7] text-white px-4 py-2 rounded-md hover:bg-[#FFC100] transition">
                Book Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
