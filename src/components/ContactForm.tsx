import React, { useState } from "react";
import { Input, Button, message } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  CustomerServiceOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        message.success("Form submitted successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          requirement: "",
          message: "",
        }); // Reset form fields
      } else {
        message.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred. Please try again.");
    }
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-5xl mx-auto p-6  rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Contact form */}
        <div>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <div className="col-span-1">
              <label className="block text-gray-700">First Name</label>
              <Input
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700">Last Name</label>
              <Input
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700">Phone Number</label>
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700">Email</label>
              <Input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Requirement</label>
              <Input.TextArea
                name="requirement"
                placeholder="Your Requirement"
                rows={3}
                value={formData.requirement}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Your Message</label>
              <Input.TextArea
                name="message"
                placeholder="Your Message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="text-white w-full text-md font-bold bg-[#14B1E7] hover:bg-[#FFC100] py-3 rounded-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Right side: Contact information */}
        <div className=" p-6 rounded-lg bg-gray-200/40 ">
          <h2 className="text-2xl font-semibold mb-6 text-black/90">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <PhoneOutlined className="text-2xl text-black" />
              <span className="text-lg font-semibold">+971568842551</span>
            </div>
            <a href="https://wa.me/971568842551" target="_blank">
              <div className="flex items-center space-x-4 mt-4">
                <FaWhatsapp className="text-2xl text-green-400" />
                <span className="text-lg font-semibold">+971568842551</span>
              </div>
            </a>

            <div className="flex items-center space-x-4">
              <HomeOutlined className="text-2xl text-black/90" />
              <span className="text-lg font-semibold">
                333 bin Thani plaza Naif Deira Dubai
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5 px-10 mt-20">
        <div className="flex items-start space-x-4">
          <PhoneOutlined style={{ color: "#faad14", fontSize: "30px" }} />
          <div>
            <h3 className="text-xl font-semibold">Phone Support</h3>
            <p className="text-black/80 font-normal text-sm text-justify">
              Would you like to discuss your needs over the phone? Submit your
              details, and one of our knowledgeable advisors will reach out to
              you shortly.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MailOutlined style={{ color: "#1890ff", fontSize: "30px" }} />
          <div>
            <h3 className="text-xl font-semibold">Email Support</h3>
            <p className="text-black/80 font-normal text-sm text-justify">
              Prefer email? Reach us at [your email address], and our team will
              respond promptly.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <CustomerServiceOutlined
            style={{ color: "#fa8c16", fontSize: "30px" }}
          />
          <div>
            <h3 className="text-xl font-semibold">Customer Assistance</h3>
            <p className="text-black/80 font-normal text-sm text-justify">
              We are committed to resolving any issues you may encounter. Your
              satisfaction is our priority.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <DollarOutlined style={{ color: "#f5222d", fontSize: "30px" }} />
          <div>
            <h3 className="text-xl font-semibold">Ask For a Quote</h3>
            <p className="text-black/80 font-normal text-sm text-justify">
              Interested in our interior design products? Fill out the form for
              a competitive price quotation, and we will reach out to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
