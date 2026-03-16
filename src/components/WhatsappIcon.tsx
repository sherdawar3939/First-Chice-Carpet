"use client";
import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";

const WhatsappIcon = () => {
  const handleClick = (e: any) => {
    e.preventDefault();

    if (
      typeof window !== "undefined" &&
      (window as any).gtag_report_conversion
    ) {
      (window as any).gtag_report_conversion("https://wa.me/971555243724");
    } else {
      window.open("https://wa.me/971555243724", "_blank");
    }
  };
  return (
    <a
      href="https://wa.me/971555243724" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-4 right-0 z-50"
    >
      <FaWhatsappSquare className="text-green-500 text-6xl" />
    </a>
  );
};

export default WhatsappIcon;
