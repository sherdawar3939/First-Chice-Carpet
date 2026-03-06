import { SEO } from "@/app/seo";
import ContactForm from "@/components/ContactForm";
import ContactUsSection from "@/components/ContactUsSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = SEO.contact;
const page = () => {
  return (
    <div>
      <ContactUsSection />
      <ContactForm />
    </div>
  );
};

export default page;
