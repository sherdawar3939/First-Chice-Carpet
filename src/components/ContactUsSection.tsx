import React from "react";
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const ContactUsSection = () => {
  return (
    <section className="bg-[#14B1E7] py-20 text-center mb-20">
      <h2 className="text-4xl font-semibold text-black bg-gradient-to-r from-[#FFC100] to-[#FFC100] inline-block px-6 py-2 rounded-lg">
        Get in Touch With First Choice General Trading LLC
      </h2>
      <p className="text-white mt-6 max-w-2xl mx-auto text-justify px-5">
        We’re here to assist you with any questions or concerns you may have.
        Whether you’d like to speak directly with one of our advisors or prefer
        to communicate via email, we’re ready to help.
      </p>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="#" className="text-white text-2xl">
          <FacebookOutlined />
        </a>

        <a href="#" className="text-white text-2xl">
          <TwitterOutlined />
        </a>
        <a href="#" className="text-white text-2xl">
          <InstagramOutlined />
        </a>
      </div>
    </section>
  );
};

export default ContactUsSection;
