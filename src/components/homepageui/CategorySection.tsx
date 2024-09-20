import React from "react";
import Link from "next/link";
import {
  HomeOutlined,
  ShopOutlined,
  AppstoreOutlined,
  ApartmentOutlined,
  BankOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  BulbOutlined,
  ControlOutlined,
  CloudOutlined,
  OrderedListOutlined,
  HeatMapOutlined,
  BorderOutlined,
  CodeSandboxOutlined,
  HighlightOutlined,
  PictureOutlined,
  BarcodeOutlined,
  LayoutOutlined,
  BorderOuterOutlined,
} from "@ant-design/icons"; // Import more relevant icons

interface StylingElement {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const elements: StylingElement[] = [
  {
    name: "Wall to Wall Carpet",
    icon: <ShopOutlined />, // Store/shop related
    link: "/carpets",
  },
  {
    name: "Office Carpet",
    icon: <ApartmentOutlined />, // Office building
    link: "/carpets",
  },
  {
    name: "Home Carpet",
    icon: <HomeOutlined />, // Home icon
    link: "/carpets",
  },
  {
    name: "Living Room Carpet",
    icon: <AppstoreOutlined />, // Generic room
    link: "/carpets",
  },
  {
    name: "Mosque Carpet",
    icon: <BankOutlined />, // Mosque/building icon
    link: "/carpets",
  },
  {
    name: "Residential Carpet",
    icon: <TeamOutlined />, // Residential/home community
    link: "/carpets",
  },
  {
    name: "Hotel Carpet",
    icon: <EnvironmentOutlined />, // Hotel/travel icon
    link: "/carpets",
  },
  {
    name: "Living Room Curtain",
    icon: <BulbOutlined />, // Curtain related, light bulb
    link: "/curtains",
  },
  {
    name: "Sheer Curtain",
    icon: <CloudOutlined />, // Cloudy, light theme
    link: "/curtains",
  },
  {
    name: "Master Room Curtain",
    icon: <ControlOutlined />, // Control/power icon for master
    link: "/curtains",
  },
  {
    name: "Motorized Curtain",
    icon: <OrderedListOutlined />, // Motorized list/control
    link: "/curtains",
  },
  {
    name: "Roman Blinds",
    icon: <BorderOutlined />, // Roman style/fixed structure
    link: "/curtains",
  },
  {
    name: "Sisal Rugs",
    icon: <CodeSandboxOutlined />, // Natural/fiber like
    link: "/rugs",
  },
  {
    name: "Area Rugs",
    icon: <HeatMapOutlined />, // Cover area/rug
    link: "/rugs",
  },
  {
    name: "Round Rugs",
    icon: <BorderOuterOutlined />, // Round border icon
    link: "/rugs",
  },
  {
    name: "Shaggy Rugs",
    icon: <HighlightOutlined />, // Highlighted texture
    link: "/rugs",
  },
  {
    name: "Custom Rugs",
    icon: <PictureOutlined />, // Picture/graphic design
    link: "/rugs",
  },
  {
    name: "Vinyl Flooring",
    icon: <BarcodeOutlined />, // Vinyl records/smooth lines
    link: "/flooring",
  },
  {
    name: "Parquet Flooring",
    icon: <LayoutOutlined />, // Floor layout/pattern
    link: "/flooring",
  },
  {
    name: "LVT Flooring",
    icon: <BorderOuterOutlined />, // Tiled/flooring icon
    link: "/flooring",
  },
];

const CategorySection: React.FC = () => {
  return (
    <div className="py-8">
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0"
        style={{ gridAutoRows: "auto", rowGap: "100px" }} // Row gap 100px
      >
        {elements.map((element) => (
          <Link href={element.link} key={element.name} className="no-underline">
            <div className="flex flex-col items-center justify-center">
              <div className="text-[45px] flex items-center justify-center p-3 bg-gray-200/30 rounded-full text-[#14B1E7] hover:text-[#FFC100] transition">
                {element.icon}
              </div>
              <div
                className={`mt-2 text-center font-medium text-black/60 hover:text-[#FFC100]`}
              >
                {element.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
