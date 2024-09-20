import React from "react";
import { Card, List } from "antd";
import {
  EnvironmentOutlined,
  RetweetOutlined,
  ExclamationCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";

export const RugsWhyChooseUs: React.FC = () => {
  // Why Rugs Matter content
  const whyRugsMatter = {
    title: "Why Rugs Matter in Interior Design in Dubai",
  };

  // Tips for Maintaining Rugs content
  const maintenanceTips = [
    {
      title: "Regular Vacuuming",
      description:
        "Vacuum rugs once or twice a week to remove dust and dirt. Be gentle, especially with delicate rugs, and avoid using a beater bar to prevent damage.",
      icon: (
        <EnvironmentOutlined style={{ color: "#faad14", fontSize: "30px" }} />
      ),
    },
    {
      title: "Rotate the Rug",
      description:
        "Rotate your rug every few months to prevent uneven wear from sunlight, foot traffic, or furniture pressure.",
      icon: <RetweetOutlined style={{ color: "#52c41a", fontSize: "30px" }} />,
    },
    {
      title: "Address Spills Immediately",
      description:
        "Blot spills right away with a dry cloth to avoid stains. Use mild detergent for tougher spots, but test it first on a small area.",
      icon: (
        <ExclamationCircleOutlined
          style={{ color: "#fa541c", fontSize: "30px" }}
        />
      ),
    },
    {
      title: "Professional Cleaning",
      description:
        "Have your rugs professionally cleaned once or twice a year to remove deep-seated dirt and allergens.",
      icon: <SmileOutlined style={{ color: "#1890ff", fontSize: "30px" }} />,
    },
  ];

  return (
    <Card className="p-4 md:p-8">
      {/* Why Rugs Matter */}
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-justify text-4xl mb-4 font-medium text-black/90">
          {whyRugsMatter.title}
        </h1>
      </div>
      <p className="text-justify text-md font-normal text-black/70 mb-8">
        Rugs serve a functional purpose while enhancing the overall aesthetic of
        your home or office. They can anchor furniture arrangements, create
        focal points, and even influence the acoustics of a room. The right rug
        can tie together various design elements, providing a sense of harmony
        and balance to your space. In a city like Dubai, where style and luxury
        are key components of interior design, rugs offer an opportunity to
        express your individuality while maintaining comfort and elegance.
      </p>

      {/* Tips for Maintaining Rugs */}
      <h2 className="text-3xl mt-6 mb-4 font-medium text-black/90">
        Tips for Maintaining Rugs
      </h2>
      <List
        itemLayout="vertical"
        dataSource={maintenanceTips}
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
