"use client";

import { Avatar, Button, Dropdown, Layout, Row, Space } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header: AntHeader } = Layout;

const Header = ({
  collapsed,
  onCollapse,
}: {
  collapsed: any;
  onCollapse: any;
}) => {
  const { data: session } = useSession();

  return (
    <AntHeader
      style={{
        background: "#FFFFFF",
        padding: "0 2px",
      }}
    >
      <div className="flex justify-between items-center">
        <div style={{ flex: "1" }} className="hidden lg:block">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onCollapse}
            style={{
              fontSize: "20px",
              width: 64,
              height: 64,
              marginLeft: 0,
            }}
          />
        </div>
        <div>
          <p className="text-black/90 mr-5">{session?.user?.email}</p>
        </div>
        <div>
          {session && (
            <button
              className="text-blue-500 hover:text-red-600 font-bold mr-2 "
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
