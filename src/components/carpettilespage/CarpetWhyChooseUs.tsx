import React from "react";
import { Card, List } from "antd";
import {
  CheckCircleOutlined,
  SmileOutlined,
  SoundOutlined,
  ClearOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

export const CarpetWhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Durability",
      description:
        "Made from tough, long-lasting materials, carpet tiles are resistant to wear and tear, making them perfect for high-traffic areas such as offices, lobbies, and hallways.",
      icon: <SmileOutlined style={{ color: "#faad14", fontSize: "30px" }} />,
    },
    {
      title: "Easy Installation",
      description:
        "Carpet tiles are simple to install and can be done without professional assistance, reducing time and labor costs. You can create your own patterns or replace individual tiles without disrupting the entire floor.",
      icon: (
        <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "30px" }} />
      ),
    },
    {
      title: "Customizable Design",
      description:
        "Available in a wide range of colors, patterns, and textures, carpet tiles allow you to create unique, eye-catching designs tailored to your space's interior decor.",
      icon: <SoundOutlined style={{ color: "#fa8c16", fontSize: "30px" }} />,
    },
    {
      title: "Low Maintenance",
      description:
        "Cleaning and maintaining carpet tiles is easy—any damaged or stained tile can be replaced individually, without the need for costly repairs or replacing the entire carpet.",
      icon: <ClearOutlined style={{ color: "#1890ff", fontSize: "30px" }} />,
    },
  ];

  return (
    <Card className="p-4 md:p-8">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-justify text-4xl mb-4 font-medium text-black/90">
          Why Choose Carpet Tiles in Dubai?
        </h1>
      </div>
      <h2 className="text-justify text-lg font-normal text-black/70 mb-8">
        Dubai&apos;s dynamic marketplace demands practical and aesthetically
        pleasing flooring solutions that can withstand the city&apos;s unique
        climate and high foot traffic. Carpet tiles meet these requirements with
        ease, offering numerous benefits:
      </h2>
      <List
        itemLayout="vertical"
        dataSource={features}
        renderItem={(item) => (
          <List.Item>
            <div className="flex items-center space-x-3">
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
      <h2 className="text-lg font-bold text-black/90 mt-8">
        Benefits of Carpet Tiles in Commercial and Residential Spaces
      </h2>
      <h3 className="text-black/90 text-md mt-4 font-bold">
        1. Commercial Spaces:
      </h3>
      <p className="text-black/70 text-sm mb-4 text-justify">
        Carpet tiles are an excellent choice for office spaces, showrooms,
        retail stores, and other commercial areas. Their sound-absorbing
        properties reduce noise, creating a quieter and more productive
        environment. They offer flexibility in design, enabling businesses to
        create a brand-specific look by mixing and matching colors or creating
        custom layouts.
      </p>
      <h3 className="text-black/90 text-md font-bold">
        2. Residential Spaces:
      </h3>
      <p className="text-black/70 text-sm text-justify">
        In homes, carpet tiles offer a soft and warm underfoot feel, ideal for
        living rooms, bedrooms, and play areas. Their modular design ensures
        easy replacement of individual tiles, making them family-friendly,
        especially in homes with kids or pets. Homeowners in Dubai can opt for
        moisture-resistant carpet tiles, perfect for areas with higher humidity
        levels, like basements or entranceways.
      </p>
    </Card>
  );
};
