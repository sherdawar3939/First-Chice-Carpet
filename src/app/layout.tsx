import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SessionProvider } from "next-auth/react";

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
      <head>
        {/* google search console code */}
        <meta
          name="google-site-verification"
          content="5Sq62wmFfr_NoTOytLUYU0f1Dk0xsamV7gOfW_7jH7k"
        />
        {/* <!-- Google tag (gtag.js) --> */}
        
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2R4EVV4KDM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2R4EVV4KDM');
</script>
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          <SessionProvider>{children}</SessionProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
