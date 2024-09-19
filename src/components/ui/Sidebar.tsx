"use client";
import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import type { MenuProps } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import sidebar from "./sidebar.module.css";
import { sidebarItems } from "@/constant/sidebarItems";
import Image from "next/image";

const { Sider } = Layout;

const Sidebar = ({
  collapsed,
  onCollapse,
}: {
  collapsed: any;
  onCollapse: any;
}) => {
  const role = "user";

  return (
    <Sider
      className="z-50"
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={280}
    >
      <div className="flex justify-center items-center" style={{ padding: 16 }}>
        <div className="block lg:hidden">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onCollapse}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <Image width={200} height={200} alt="Logo" src="/logo.png" />
      </div>

      <Menu
        style={{
          background: "#FFFFFF",
          marginTop: 30,
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
