import { Metadata } from "next";
type SEOType = {
  [key: string]: Metadata & {
    subcategories?: Record<string, Metadata>;
  };
};

export const SEO = {
  home: {
    title: "Buy Carpets from Carpet Stores in Dubai | First Choice Flooring",
    description:
      "Buy premium carpets, rugs, curtains, and flooring from trusted carpet stores in Dubai. Get the best prices with expert installation across the UAE.",

    alternates: {
      canonical: "https://firschoicecarpet.ae/",
    },
  },

  contact: {
    title:
      "Contact for Carpets, Rugs & Flooring in Dubai | First Choice Flooring",
    description:
      "Get in touch for premium carpets, rugs, curtains, and flooring in Dubai. Request a free quote, book a showroom visit, or schedule installation today.",
    alternates: {
      canonical: "https://firschoicecarpet.ae/contactus",
    },
  },

  about: {
    title: "First Choice Carpet",
    description:
      "About First Choice Flooring | Quality Flooring & Interiors Dubai",
    alternates: {
      canonical: "https://firschoicecarpet.ae/aboutus",
    },
  },

  carpets: {
    title: "Buy Carpets Online UAE | First Choice Flooring",
    description:
      "Buy carpets online in UAE at competitive prices. Shop modern, classic, and wall-to-wall carpets in Dubai with fast delivery and expert fitting.",
    alternates: {
      canonical: "https://firschoicecarpet.ae/carpets",
    },

    subcategories: {
      "wall-to-wall-carpet": {
        title: "Buy Wall-to-Wall Carpets in Dubai | First Choice Flooring",
        description:
          "Buy premium wall-to-wall carpets in Dubai from First Choice Flooring. Stylish, durable, and perfect for homes, offices, and commercial spaces.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/carpets/wall-to-wall-carpet",
        },
      },

      "office-carpet": {
        title: "Premium Office Carpet Supplier Dubai | First Choice Flooring",
        description:
          "Get high-quality office carpets in Dubai with First Choice Flooring. Trusted supplier delivering durable, stylish carpets for professional workplaces.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/carpets/office-carpet",
        },
      },

      "home-carpet": {
        title: "Buy Home Carpets Dubai | First Choice Flooring",
        description:
          "Shop luxurious home carpets in Dubai from First Choice Flooring. Supplied for living rooms, bedrooms, and residential spaces with comfort and style.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/carpets/home-carpet",
        },
      },

      "living-room-carpet": {
        title: "Buy Living Room Carpets Dubai | First Choice Flooring",
        description:
          "Discover premium living room carpets in Dubai at First Choice Flooring. Elegant, soft, and durable carpets to enhance your home interiors.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/carpets/living-room-carpet",
        },
      },

      "mosque-carpet": {
        title: "Buy Mosque Carpets Dubai | First Choice Flooring",
        description:
          "Buy premium mosque carpets in Dubai from First Choice Flooring. Our high-quality, durable mosque carpets offer elegance and comfort for prayer halls, with custom sizing and beautiful designs to fit any space in UAE.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/carpets/mosque-carpet",
        },
      },

      "residential-carpet": {
        title: "Residential Carpets Dubai | First Choice Flooring",
        description:
          "Upgrade your home with premium residential carpets in Dubai from First Choice Flooring. Comfortable, stylish, and durable flooring solutions.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/carpets/residential-carpet",
        },
      },

      "hotel-carpet": {
        title: "Hotel Carpet Supplier Dubai | First Choice Flooring",
        description:
          "First Choice Flooring supplies luxury hotel carpets in Dubai. Durable, elegant, and ideal for high-traffic hospitality spaces.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/carpets/hotel-carpet",
        },
      },
    },
  },

  curtains: {
    title: "Buy Curtains Online UAE | First Choice Flooring",
    description:
      "Buy curtains online in UAE including blackout and custom designs. Get professional measurement and installation services in Dubai.",
    alternates: {
      canonical: "https://firschoicecarpet.ae/curtains",
    },

    subcategories: {
      "living-room-curtain": {
        title: "Buy Living Room Curtains Dubai | First Choice carpet",
        description:
          "Upgrade your living room with premium curtains in Dubai from First Choice Carpet. Stylish, durable, and perfect for adding elegance and comfort to your home.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/curtains/living-room-curtain",
        },
      },

      "sheer-curtain": {
        title: "Buy Sheer Window Curtains Dubai | First Choice carpet",
        description:
          "Shop high-quality sheer window curtains in Dubai at First Choice Carpet. Lightweight, elegant, and ideal for letting in natural light while maintaining privacy.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/curtains/sheer-curtain",
        },
      },

      "master-room-curtain": {
        title: "Luxurious Master Bedroom Curtains Dubai | First Choice carpet",
        description:
          "Add luxury to your master bedroom with curtains from First Choice Carpet in Dubai. Durable, stylish, and designed for complete privacy and elegance.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/curtains/master-room-curtain",
        },
      },

      "motorized-curtain": {
        title: "Buy Motorized Window Curtains Dubai | First Choice carpet",
        description:
          "Get convenient and stylish motorized window curtains in Dubai from First Choice Carpet. Easy-to-operate, modern, and perfect for smart homes or offices.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/curtains/motorized-curtain",
        },
      },

      "roller-blinds": {
        title: "Custom Roller Blinds Supplier UAE | First Choice carpet",
        description:
          "First Choice Carpet supplies custom roller blinds across the UAE. Durable, stylish, and perfect for homes, offices, and commercial spaces.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/curtains/roller-blinds",
        },
      },
    },
  },

  rugs: {
    title: "Buy Rugs in Dubai | First Choice Flooring",
    description:
      "Buy rugs in Dubai at the best prices. Shop modern, luxury, and traditional rugs with fast delivery across the UAE.",
    alternates: {
      canonical: "https://firschoicecarpet.ae/rugs",
    },

    subcategories: {
      "sisal-rugs": {
        title: "Shop Natural & Durable Rugs | First Choice Carpet UAE",
        description:
          "Shop eco-friendly sisal rugs in Dubai from First Choice Carpet. Stylish, durable, and perfect for homes, offices, and high-traffic areas with a warm, natural look.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/rugs/sisal-rugs",
        },
      },

      "area-rugs": {
        title: "Area Rugs Suppliers UAE | First Choice Carpet",
        description:
          "Discover stylish area rugs suppliers in UAE at First Choice Flooring. Add comfort, color, and elegance to any room with versatile designs for homes and offices.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/rugs/area-rugs",
        },
      },

      "round-rugs": {
        title: "Buy Round Rugs Dubai | First Choice Carpet",
        description:
          "Discover elegant round rugs in Dubai at First Choice Carpet. Perfect for creating focal points in living rooms, dining areas, and contemporary interiors.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/rugs/round-rugs",
        },
      },

      "shaggy-rugs": {
        title: "Buy Shaggy Rugs Dubai | First Choice Carpet",
        description:
          "Explore soft and luxurious shaggy rugs suppliers in UAE at First Choice Flooring. Perfect for cozy living spaces, offering comfort, warmth, and modern style.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/rugs/shaggy-rugs",
        },
      },

      "custom-rugs": {
        title: "Custom Rugs Suppliers UAE | First Choice Flooring",
        description:
          "Design custom rugs suppliers in UAE with First Choice Flooring. Choose your size, shape, and style for a perfect fit that matches your interior décor.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/rugs/custom-rugs",
        },
      },
    },
  },

  flooring: {
    title: "Purchase Vinyl Flooring in Dubai | First Choice Flooring",
    description:
      "Buy vinyl flooring in Dubai for homes and offices. Explore durable, stylish, and waterproof flooring with expert installation across UAE.",
    alternates: {
      canonical: "https://firschoicecarpet.ae/flooring",
    },

    subcategories: {
      "vinyl-flooring": {
        title: "Vinyl Flooring Suppliers UAE | First Choice Flooring",
        description:
          "Shop high-quality vinyl flooring suppliers in UAE with First Choice Flooring. Durable, waterproof, and stylish options perfect for homes and commercial spaces.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/flooring/vinyl-flooring",
        },
      },

      "parquet-flooring": {
        title: "Shop Elegant Parquet Flooring Dubai | First Choice Flooring",
        description:
          "Upgrade your interiors with elegant parquet flooring from First Choice Carpet Dubai. Beautiful wood-style floors, durable and supplied with expert installation across UAE.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/flooring/parquet-flooring",
        },
      },

      "lvt-flooring": {
        title: "Luxury LVT Flooring Suppliers UAE | First Choice Flooring",
        description:
          "Shop luxury LVT flooring in Dubai from First Choice Carpet. Stylish, durable, and low-maintenance vinyl tiles perfect for homes, offices, and commercial spaces across UAE.",
        alternates: {
          canonical: "https://firschoicecarpet.ae/flooring/lvt-flooring",
        },
      },
    },
  },

  carpettiles: {
    title: "Get Floor Carpet Tiles in Dubai | First Choice Flooring",
    description:
      "Buy floor carpet tiles in Dubai for commercial and office spaces. Get premium quality tiles with professional supply and fitting services.",
    alternates: {
      canonical: "https://firschoicecarpet.ae/carpettiles",
    },

    subcategories: {
      "interlocking-carpet-tiles": {
        title: "Buy Interlocking Carpet Tiles Dubai | First Choice Carpet",
        description:
          "Shop premium interlocking carpet tiles in Dubai from First Choice Carpet. Easy to install, durable, and perfect for offices, homes & commercial spaces.",
        alternates: {
          canonical:
            "https://firschoicecarpet.ae/carpettiles/interlocking-carpet-tiles",
        },
      },

      "peel-and-stick-carpet-tiles": {
        title: "Peel & Stick Carpet Tiles Dubai | First Choice Carpet",
        description:
          "Discover peel and stick carpet tiles suppliers in UAE at First Choice Flooring. Self-adhesive, hassle-free installation with stylish and long-lasting designs.",
        alternates: {
          canonical:
            "https://firschoicecarpet.ae/carpettiles/peel-and-stick-carpet-tiles",
        },
      },

      "commercial-carpet-tiles": {
        title: "Buy Commercial Carpet Tiles UAE | First Choice Flooring",
        description:
          "Upgrade your business with commercial carpet tiles in Dubai from First Choice Carpet. Durable, high-performance tiles designed for offices, retail & corporate spaces in UAE.",
        alternates: {
          canonical:
            "https://firschoicecarpet.ae/carpettiles/commercial-carpet-tiles",
        },
      },

      "residential-carpet-tiles": {
        title: "Residential Carpet Tiles Suppliers UAE | First Choice Flooring",
        description:
          "Buy residential carpet tiles in Dubai from First Choice Carpet. Soft, stylish, and durable — perfect for living rooms, bedrooms and family spaces with fast UAE delivery.",
        alternates: {
          canonical:
            "https://firschoicecarpet.ae/carpettiles/residential-carpet-tiles",
        },
      },

      "basement-carpet-tiles": {
        title:
          "Buy Basement Carpet Tiles Suppliers UAE | First Choice Flooring",
        description:
          "Shop basement carpet tiles suppliers in UAE at First Choice Flooring. Moisture-resistant, durable, and perfect for transforming basement spaces with ease.",
        alternates: {
          canonical:
            "https://firschoicecarpet.ae/carpettiles/basement-carpet-tiles",
        },
      },
    },
  },
} as const satisfies SEOType;
