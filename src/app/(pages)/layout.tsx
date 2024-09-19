import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <WhatsappIcon />
      <Footer />
    </>
  );
}
