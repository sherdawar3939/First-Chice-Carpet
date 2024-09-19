import React from "react";
import { Card, List } from "antd";
import {
  ShoppingCartOutlined,
  ClockCircleOutlined,
  SmileOutlined,
  HomeOutlined,
} from "@ant-design/icons";

export const CurtainWhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Choose Your Products",
      description:
        "Browse our collection of premium curtains and blinds to find the perfect style and fabric for your space.",
      icon: <HomeOutlined style={{ color: "#faad14", fontSize: "30px" }} />,
    },
    {
      title: "Select Your Desired Items",
      description:
        "Pick your favorite designs, customize your size, and add the items to your cart.",
      icon: (
        <ShoppingCartOutlined style={{ color: "#52c41a", fontSize: "30px" }} />
      ),
    },
    {
      title: "Simple Checkout Process",
      description:
        "Place your order easily with our straightforward online checkout system.",
      icon: <SmileOutlined style={{ color: "#faad14", fontSize: "30px" }} />,
    },
    {
      title: "Fast Delivery",
      description: "Enjoy quick and hassle-free delivery to your doorstep.",
      icon: (
        <ClockCircleOutlined style={{ color: "#1890ff", fontSize: "30px" }} />
      ),
    },
  ];

  return (
    <Card className="p-4 md:p-8">
      <h1 className="text-center text-4xl mb-4 font-medium text-black/90">
        Get a Stunning Collection of Quality Curtains
        <br /> From Interior Company Dubai
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
                <h1 className="text-black/70 text-sm font-normal">
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
