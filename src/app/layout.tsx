import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SessionProvider } from "next-auth/react";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First Choice General Trading LLC  Dubai",
  description: "Home Interior Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      <GoogleTagManager gtmId="G-2R4EVV4KDM" />
      <head>
        {/* google search console code */}
        <meta
          name="google-site-verification"
          content="5Sq62wmFfr_NoTOytLUYU0f1Dk0xsamV7gOfW_7jH7k"
        />
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          <SessionProvider>{children}</SessionProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
