import React from "react";
import { Card, List } from "antd";
import {
  CheckCircleOutlined,
  SecurityScanOutlined,
  CarOutlined,
  SmileOutlined,
  CrownOutlined,
  SolutionOutlined,
} from "@ant-design/icons"; // Import additional icons as needed

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "High-Quality Products",
      description:
        "We source only the finest carpets, curtains, rugs, and flooring, ensuring that you receive long-lasting and stylish solutions for your interior design needs.",
      icon: (
        <CheckCircleOutlined style={{ color: "#faad14", fontSize: "30px" }} />
      ),
    },
    {
      title: "Quick Delivery",
      description:
        "Our interior company in Dubai offers fast and quick delivery of your order according to your needs. We are able to handle bulk orders.",
      icon: <CarOutlined style={{ color: "#52c41a", fontSize: "30px" }} />,
    },
    {
      title: "Secure Payment",
      description:
        "Shop with confidence through our secure and reliable payment options, ensuring a smooth transaction experience.",
      icon: (
        <SecurityScanOutlined style={{ color: "#faad14", fontSize: "30px" }} />
      ),
    },
    {
      title: "Tailored Solutions",
      description:
        "Our expert team understands your vision and offers a hassle-free shopping experience that suits your style and budget.",
      icon: <SolutionOutlined style={{ color: "#1890ff", fontSize: "30px" }} />,
    },
    {
      title: "Modern & Classic Designs",
      description:
        "Whether you're after a sleek modern look or a more timeless design, we have the perfect products to enhance your space.",
      icon: <CrownOutlined style={{ color: "#f5222d", fontSize: "30px" }} />,
    },
    {
      title: "Exceptional Service",
      description:
        "We provide reliable and professional service, from product selection to installation.",
      icon: <SmileOutlined style={{ color: "#fa8c16", fontSize: "30px" }} />,
    },
  ];

  return (
    <Card className="p-4 md:p-8">
      <h1 className="text-center text-4xl mb-4 font-medium text-black/90">
        Why Choose Our Products?
      </h1>

      <List
        itemLayout="vertical"
        dataSource={features}
        renderItem={(item) => (
          <List.Item>
            <div className="flex items-center space-x-3">
              {/* Render dynamic icon here */}
              {item.icon}
              <div>
                <h1 className="text-black/90 text-xl font-semibold">
                  {item.title}
                </h1>
                <h1 className="text-black/70 text-sm font-normal text-justify">
                  {item.description}
                </h1>
              </div>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default WhyChooseUs;
