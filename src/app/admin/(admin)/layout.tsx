"use client";

import { useState } from "react";
import { Layout } from "antd";
import Sidebar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout hasSider style={{ minHeight: "100vh", overflowY: "hidden" }}>
        <Sidebar collapsed={collapsed} onCollapse={toggleCollapse} />
        <Contents collapsed={collapsed} onCollapse={toggleCollapse}>
          {children}
        </Contents>
      </Layout>
    </>
  );
}
