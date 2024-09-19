"use client";

import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "@/app/loading";
import Sidebar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <Layout hasSider>
      <Sidebar collapsed={undefined} onCollapse={undefined} />
      <Contents collapsed={undefined} onCollapse={undefined}>
        {children}
      </Contents>
    </Layout>
  );
};

export default DashboardLayout;
