import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#14B1E7] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* About Company Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Company</h3>
          <p>
            The leader in UAE’s Fix it services, including Curtains, Blinds and
            Flooring installation and Fixing.
          </p>
        </div>

        {/* Connect with Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
          <a
            href="https://wa.me/971568842551" // Replace with your WhatsApp number
            target="_blank"
          >
            <p className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-400" />
              <span>+971568842551</span>
            </p>
          </a>
          <p className="flex items-center space-x-2 mt-2">
            <FiPhone className="text-yellow-400" />
            <span>+971568842551</span>
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/blogs" className="hover:text-yellow-400 underline">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="/aboutus" className="hover:text-yellow-400 underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="hover:text-yellow-400 underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Our Address</h3>
          <p>333 bin Thani plaza Naif Deira Dubai</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#FFC100] mt-8 py-4 text-center px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© Copyright 2024. First Choice General Trading LLC Dubai</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/" className="text-white hover:text-yellow-400">
              <FaFacebook />
            </a>
            <a href="/" className="text-white hover:text-yellow-400">
              <FaInstagram />
            </a>

            <a href="/" className="text-white hover:text-yellow-400">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
