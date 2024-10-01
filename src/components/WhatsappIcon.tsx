import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/971555243724" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-0 z-50"
    >
      <FaWhatsappSquare className="text-green-500 text-6xl" />
    </a>
  );
};

export default WhatsappIcon;
