import React from "react";
import { Card, Divider } from "antd";
import {
  TeamOutlined,
  StarOutlined,
  RocketOutlined,
  EyeOutlined,
} from "@ant-design/icons";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="w-full bg-[#FFC100] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-black/90">About Us</h1>
          <p className="text-xl font-semibold text-black/90">
            Revolutionizing Interior Design in Dubai
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="shadow-2xl" bordered={false}>
            <h2 className="text-3xl font-bold text-center text-[#14B1E7] mb-6">
              Who We Are
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img src="/images/logo.png" alt="Our Team" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-md font-normal leading-relaxed text-black/70 mb-4">
                  We are a team of expert interior designers in Dubai who have
                  come together with an idea to revolutionize the way you
                  experience interior design. First Choice General Trading LLC
                  offers the highest quality interior design items, sourced with
                  care and delivered with excellence.
                </p>
                <p className="text-md font-normal leading-relaxed text-black/70">
                  Our passionate team ensures that each item meets our high
                  standards of quality and design, providing you with products
                  that not only look great but also stand the test of time.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#14B1E7] mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <StarOutlined
                    style={{ color: "#faad14", fontSize: "30px" }}
                  />
                ),
                title: "Quality",
                description:
                  "We provide only the highest quality products with rigorous checks for beauty and durability.",
              },
              {
                icon: (
                  <TeamOutlined
                    style={{ color: "#52c41a", fontSize: "30px" }}
                  />
                ),
                title: "Integrity",
                description:
                  "We build trust with transparency, clear communication, and ethical practices.",
              },
              {
                icon: (
                  <RocketOutlined
                    style={{ color: "#f5222d", fontSize: "30px" }}
                  />
                ),
                title: "Customer Satisfaction",
                description:
                  "We strive to exceed your expectations with exceptional products and personalized service.",
              },
              {
                icon: (
                  <EyeOutlined style={{ color: "#1890ff", fontSize: "30px" }} />
                ),
                title: "Innovation",
                description:
                  "We embrace creativity to stay ahead of trends and offer fresh, stylish solutions.",
              },
            ].map((value, idx) => (
              <Card
                key={idx}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                bordered={false}
              >
                <div className="text-center">
                  {value.icon}
                  <h3 className="text-xl font-semibold my-4 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#14B1E7] mb-8 underline">
            Our Mission & Vision
          </h2>
          <Card className="shadow-2xl" bordered={false}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#14B1E7] mb-4">
                  Our Mission
                </h3>
                <p className="text-md leading-relaxed text-black/70 font-normal mb-4">
                  Our mission is centered on perfection and customer
                  satisfaction. We are committed to delivering exceptional
                  products and services that exceed your expectations.
                </p>
                <p className="text-md leading-relaxed text-black/70 font-normal mb-4">
                  Our efficient delivery system ensures that your order arrives
                  at your doorstep quickly and in perfect condition, so you can
                  enjoy your new products without delay.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#14B1E7] mb-4">
                  Our Vision
                </h3>
                <p className="text-md leading-relaxed text-black/70 font-normal mb-4">
                  Our vision is to become the number one interior design company
                  in Dubai. Through continuous improvement and innovation, we
                  are dedicated to expanding our product range, enhancing our
                  services, and providing the best possible shopping experience.
                </p>
                <p className="text-md leading-relaxed text-black/70 font-normal mb-4">
                  We take customer feedback seriously and continually work to
                  improve based on your opinions.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
