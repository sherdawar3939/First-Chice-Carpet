import React from "react";
import { Card, List } from "antd";
import {
  CheckCircleOutlined,
  RocketOutlined,
  DollarCircleOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

export const FlooringWhyChooseUs: React.FC = () => {
  // Features list for flooring solutions
  const features = [
    {
      title: "Top Quality",
      description:
        "Shop 100% genuine, top-quality flooring products from the leading interior designers in Dubai. We offer only the most recommended and reliable options.",
      icon: (
        <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "30px" }} />
      ),
    },
    {
      title: "Fast Delivery",
      description:
        "Receive your flooring products quickly and efficiently. We promise prompt delivery to your doorstep within the agreed time frame.",
      icon: <RocketOutlined style={{ color: "#1890ff", fontSize: "30px" }} />,
    },
    {
      title: "Great Prices",
      description:
        "Enjoy the best competitive pricing in the Dubai flooring market. Our diverse range of products fits all budget ranges.",
      icon: (
        <DollarCircleOutlined style={{ color: "#faad14", fontSize: "30px" }} />
      ),
    },
    {
      title: "Outstanding Customer Support",
      description:
        "Benefit from our dedicated customer support team, ready to assist you with any questions or concerns. We’re here to ensure your satisfaction every step of the way.",
      icon: (
        <CustomerServiceOutlined
          style={{ color: "#fa541c", fontSize: "30px" }}
        />
      ),
    },
  ];

  return (
    <Card className="p-4 md:p-8">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-justify text-4xl mb-4 font-medium text-black/90">
          Get Your Flooring Solutions at Your Doorstep
        </h1>
      </div>

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
