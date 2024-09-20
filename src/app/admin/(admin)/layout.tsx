"use client";

import { useState, useEffect } from "react";
import { Layout, Spin } from "antd";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      if (!session) {
        redirect("/login");
      }
    }
  }, [session, status]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (!session) {
    return null; // This will prevent any flash of content before redirect
  }

  return (
    <Layout hasSider style={{ minHeight: "100vh", overflowY: "hidden" }}>
      <Sidebar collapsed={collapsed} onCollapse={toggleCollapse} />
      <Contents collapsed={collapsed} onCollapse={toggleCollapse}>
        {children}
      </Contents>
    </Layout>
  );
}
