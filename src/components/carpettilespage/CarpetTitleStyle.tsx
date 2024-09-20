import React from "react";
import { Card, List } from "antd";
import {
  LayoutOutlined,
  BgColorsOutlined,
  BorderOutlined,
} from "@ant-design/icons";

export const CarpetTileStyles: React.FC = () => {
  const styles = [
    {
      title: "Modern and Minimalist",
      description:
        "Choose sleek, solid-colored tiles in neutral tones for a clean, contemporary look that complements modern interiors.",
      icon: <LayoutOutlined style={{ color: "#faad14", fontSize: "30px" }} />,
    },
    {
      title: "Bold and Artistic",
      description:
        "For a more creative touch, opt for patterned or geometric tiles that add a unique flair to your space.",
      icon: <BgColorsOutlined style={{ color: "#52c41a", fontSize: "30px" }} />,
    },
    {
      title: "Textured and Plush",
      description:
        "Tiles with a textured finish provide a luxurious feel underfoot, ideal for bedrooms and cozy living areas.",
      icon: <BorderOutlined style={{ color: "#fa8c16", fontSize: "30px" }} />,
    },
  ];

  return (
    <Card className="p-4 md:p-8">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-center text-4xl mb-4 font-medium text-black/90">
          Carpet Tile Styles for Every Taste
        </h1>
      </div>
      <h2 className="text-jusitfy text-lg font-normal text-black/70 mb-8">
        Dubai’s diverse marketplace demands a variety of styles, and carpet
        tiles cater to all design preferences:
      </h2>
      <List
        itemLayout="vertical"
        dataSource={styles}
        renderItem={(item) => (
          <List.Item>
            <div className="flex items-center space-x-3">
              {item.icon}
              <div>
                <h1 className="text-black/90 text-xl font-semibold">
                  {item.title}
                </h1>
                <h1 className="text-black/70 text-sm font-normal text-jusitfy">
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
