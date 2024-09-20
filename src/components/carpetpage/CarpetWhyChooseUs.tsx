import React from "react";
import { Card, List } from "antd";
import {
  CheckCircleOutlined,
  SmileOutlined,
  SoundOutlined,
  ClearOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons"; // Import additional icons as needed

export const CarpetWhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Soft Underfoot Comfort",
      description:
        "Experience the plush, cozy feel of our carpets, adding warmth to any room.",
      icon: <SmileOutlined style={{ color: "#faad14", fontSize: "30px" }} />,
    },
    {
      title: "Low Maintenance",
      description:
        "Our carpets are easy to clean and maintain, staying fresh with minimal effort.",
      icon: (
        <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "30px" }} />
      ),
    },
    {
      title: "Noise Reduction",
      description:
        "Designed for sound insulation, our carpets help create a quieter, more peaceful environment.",
      icon: <SoundOutlined style={{ color: "#fa8c16", fontSize: "30px" }} />,
    },
    {
      title: "Improved Air Quality",
      description:
        "Our carpets trap dust and allergens, promoting a cleaner, healthier living space.",
      icon: <ClearOutlined style={{ color: "#1890ff", fontSize: "30px" }} />,
    },
  ];

  return (
    <Card className="p-4 md:p-8">
      <h1 className="text-center text-4xl mb-4 font-medium text-black/90">
        The Advantages of Our Carpets
      </h1>
      <h2 className="text-justify text-lg font-normal text-black/70 mb-8">
        Transform your space with our stylish and comfortable carpets, available
        in a variety of colors and textures. Here&apos;s why our carpets are the
        perfect choice for your home:
      </h2>
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
