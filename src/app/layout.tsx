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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="tzGhhrkOka3QpWhp7_omdhnoqbYoHmgCU4cKvEjX1FY"
        />
        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKGXZZBP');
          `}
        </Script>
      </head>
      
      {/* <!-- Google tag (gtag.js) --> */}
      <body className={inter.className}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKGXZZBP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* google analytics score */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M3KB9ZX5X1"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M3KB9ZX5X1');
  gtag('config', 'AW-16827241503');
  `}
        </Script>
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
   function gtag_report_conversion(url) {
     var callback = function () {
       if (typeof(url) != 'undefined') {
      window.location = url;
     }
   };
  gtag('event', 'conversion', {
      'send_to': 'AW-16827241503/pc3lCMrG4cAbEJ-o7dc-',
      'event_callback': callback
  });
  return false;
}
`}
        </Script>
        <AntdRegistry>
          <SessionProvider>{children}</SessionProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
