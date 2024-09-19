"use client";

import { Layout } from "antd";
import Header from "./header";

const { Content } = Layout;

const Contents = ({
  collapsed,
  onCollapse,
  children,
}: {
  collapsed: any;
  onCollapse: any;
  children: React.ReactNode;
}) => {
  const base = "admin";
  return (
    <Layout
      style={{
        height: "100vh",
        overflowY: "unset",
      }}
      className={`w-screen lg:static ${collapsed ? "sticky" : "fixed"}`}
    >
      <Header collapsed={collapsed} onCollapse={onCollapse}></Header>
      <Content
        className="w-full"
        style={{
          height: "calc(100vh - 64px)",
          overflowY: "auto",
          color: "black",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default Contents;
