import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First Choice General Trading LLC  Dubai",
  description: "Home Interior Design",
  verification: {
    google: "tzGhhrkOka3QpWhp7_omdhnoqbYoHmgCU4cKvEjX1FY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      <body className={inter.className}>
        {/* google analytics score */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M3KB9ZX5X1"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M3KB9ZX5X1');`}
        </Script>
        <AntdRegistry>
          <SessionProvider>{children}</SessionProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
