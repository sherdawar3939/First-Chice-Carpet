import { Metadata } from "next";

export const SEO = {
  home: {
    title: "Buy Carpets from Carpet Stores in Dubai | First Choice Flooring",
    description:
      "Buy premium carpets, rugs, curtains, and flooring from trusted carpet stores in Dubai. Get the best prices with expert installation across the UAE.",
  },

  contact: {
    title:
      "Contact for Carpets, Rugs & Flooring in Dubai | First Choice Flooring",
    description:
      "Get in touch for premium carpets, rugs, curtains, and flooring in Dubai. Request a free quote, book a showroom visit, or schedule installation today.",
  },

  about: {
    title: "First Choice Carpet",
    description:
      "About First Choice Flooring | Quality Flooring & Interiors Dubai",
  },

  carpets: {
    title: "Buy Carpets Online UAE | First Choice Flooring",
    description:
      "Buy carpets online in UAE at competitive prices. Shop modern, classic, and wall-to-wall carpets in Dubai with fast delivery and expert fitting.",
  },

  curtains: {
    title: "Buy Curtains Online UAE | First Choice Flooring",
    description:
      "Buy curtains online in UAE including blackout and custom designs. Get professional measurement and installation services in Dubai.",
  },

  rugs: {
    title: "Buy Rugs in Dubai | First Choice Flooring",
    description:
      "Buy rugs in Dubai at the best prices. Shop modern, luxury, and traditional rugs with fast delivery across the UAE.",
  },

  flooring: {
    title: "Purchase Vinyl Flooring in Dubai | First Choice Flooring",
    description:
      "Buy vinyl flooring in Dubai for homes and offices. Explore durable, stylish, and waterproof flooring with expert installation across UAE.",
  },

  carpettiles: {
    title: "Get Floor Carpet Tiles in Dubai | First Choice Flooring",
    description:
      "Buy floor carpet tiles in Dubai for commercial and office spaces. Get premium quality tiles with professional supply and fitting services.",
  },
} as const satisfies Record<string, Metadata>;
