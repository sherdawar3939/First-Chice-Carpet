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
  BuildOutlined,
  ScissorOutlined,
  GoldOutlined,
  UserSwitchOutlined,
  DropboxOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons"; // Import more relevant icons

interface StylingElement {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const elements: StylingElement[] = [
  {
    name: "Wall to Wall Carpet",
    icon: <ShopOutlined />,
    link: "/carpets",
  },
  {
    name: "Office Carpet",
    icon: <ApartmentOutlined />,
    link: "/carpets",
  },
  {
    name: "Home Carpet",
    icon: <HomeOutlined />,
    link: "/carpets",
  },
  {
    name: "Living Room Carpet",
    icon: <AppstoreOutlined />,
    link: "/carpets",
  },
  {
    name: "Mosque Carpet",
    icon: <BankOutlined />,
    link: "/carpets",
  },
  {
    name: "Residential Carpet",
    icon: <TeamOutlined />,
    link: "/carpets",
  },
  {
    name: "Hotel Carpet",
    icon: <EnvironmentOutlined />,
    link: "/carpets",
  },
  {
    name: "Living Room Curtain",
    icon: <BulbOutlined />,
    link: "/curtains",
  },
  {
    name: "Sheer Curtain",
    icon: <CloudOutlined />,
    link: "/curtains",
  },
  {
    name: "Master Room Curtain",
    icon: <ControlOutlined />,
    link: "/curtains",
  },
  {
    name: "Motorized Curtain",
    icon: <OrderedListOutlined />,
    link: "/curtains",
  },
  {
    name: "Roman Blinds",
    icon: <BorderOutlined />,
    link: "/curtains",
  },
  {
    name: "Sisal Rugs",
    icon: <CodeSandboxOutlined />,
    link: "/rugs",
  },
  {
    name: "Area Rugs",
    icon: <HeatMapOutlined />,
    link: "/rugs",
  },
  {
    name: "Round Rugs",
    icon: <BorderOuterOutlined />,
    link: "/rugs",
  },
  {
    name: "Shaggy Rugs",
    icon: <HighlightOutlined />,
    link: "/rugs",
  },
  {
    name: "Custom Rugs",
    icon: <PictureOutlined />,
    link: "/rugs",
  },
  {
    name: "Vinyl Flooring",
    icon: <BarcodeOutlined />,
    link: "/flooring",
  },
  {
    name: "Parquet Flooring",
    icon: <LayoutOutlined />,
    link: "/flooring",
  },
  {
    name: "LVT Flooring",
    icon: <BorderOuterOutlined />,
    link: "/flooring",
  },
  {
    name: "Interlocking Carpet Tiles",
    icon: <BuildOutlined />, // Represents interlocking/building
    link: "/carpettiles",
  },
  {
    name: "Peel & Stick Carpet Tiles",
    icon: <ScissorOutlined />, // Scissors for peel & stick
    link: "/carpettiles",
  },
  {
    name: "Commercial Carpet Tiles",
    icon: <GoldOutlined />, // Gold/business icon for commercial
    link: "/carpettiles",
  },
  {
    name: "Residential Carpet Tiles",
    icon: <UserSwitchOutlined />, // Residential/community switch
    link: "/carpettiles",
  },
  {
    name: "Basement Carpet Tiles",
    icon: <DeploymentUnitOutlined />, // Storage/basement reference
    link: "/carpettiles",
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
              <div className="text-[50px] flex items-center justify-center p-5 bg-gray-200/30 rounded-full text-[#14B1E7] hover:text-[#FFC100] transition">
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
