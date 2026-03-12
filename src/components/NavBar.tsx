"use client";
import React, { useState } from "react";
import { FiPhone, FiMail, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`hover:text-[#FFC100] ${
          isActive ? "text-[#FFC100] font-normal" : ""
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };

  const carpetSubcategory = [
    "Wall to Wall Carpet",
    "Office Carpet",
    "Home Carpet",
    "Living Room Carpet",
    "Mosque Carpet",
    "Residential Carpet",
    "Hotel Carpet",
  ];

  const curtainSubcategory = [
    "Living Room Curtain",
    "Sheer Curtain",
    "Master Room Curtain",
    "Motorized Curtain",
    "Roller Blinds",
  ];

  const rugSubcategory = [
    "Sisal Rugs",
    "Area Rugs",
    "Round Rugs",
    "Shaggy Rugs",
    "Custom Rugs",
  ];

  const flooringSubcategory = [
    "Vinyl Flooring",
    "Parquet Flooring",
    "LVT Flooring",
  ];

  const carpettilesSubcategory = [
    "Interlocking Carpet Tiles",
    "Peel and Stick Carpet Tiles",
    "Commercial Carpet Tiles",
    "Residential Carpet Tiles",
    "Basement Carpet Tiles",
  ];

  return (
    <header className="bg-[#14B1E7] text-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center p-4 gap-2">
        <div className="flex items-center justify-between md:justify-start md:space-x-4 w-full md:w-auto">
          <a href="tel:+971555243724" className="flex items-center space-x-2">
            <FiPhone className="text-[#FFC100]" />
            <span className="text-sm md:text-base">+971555243724</span>
          </a>
          <a
            href="https://wa.me/971555243724"
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaWhatsapp className="text-green-400" />
            <span className="text-sm md:text-base">+971555243724</span>
          </a>
        </div>
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <a
            href="mailto:info@firschoicecarpet.ae"
            className="flex items-center space-x-2"
          >
            <FiMail className="text-yellow-400" />
            <span className="text-sm md:text-base">
              info@firschoicecarpet.ae
            </span>
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white text-[#14B1E7] shadow-md">
        <div className="flex flex-col lg:flex-row justify-between items-center p-4">
          <div className="w-full lg:w-auto flex justify-between items-center">
            {/* Mobile Menu Toggle (Hamburger Icon on the left) */}
            <div className="block lg:hidden">
              <button onClick={toggleMobileMenu} aria-label="Toggle menu">
                {isMobileMenuOpen ? (
                  <FiX className="text-2xl text-[#14B1E7]" />
                ) : (
                  <FiMenu className="text-2xl text-[#14B1E7]" />
                )}
              </button>
            </div>

            {/* Logo (Centered on Mobile) */}
            <div className="flex-grow flex justify-center lg:justify-start">
              <Link href="/">
                <Image
                  width={80}
                  height={250}
                  src="/logo.png"
                  alt="logo"
                  className="h-16"
                />
              </Link>
            </div>

            {/* Placeholder div to balance the layout */}
            <div className="block lg:hidden w-8"></div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 flex-grow justify-center">
            <NavLink href="/">Home</NavLink>

            <div className="relative group">
              <NavLink href="/carpets">Carpets</NavLink>

              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md divide-y divide-gray-200 min-w-[200px] mr-4">
                {carpetSubcategory.map((item) => (
                  <Link
                    key={item}
                    href={`/carpets/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-6 py-3 hover:text-[#FFC100] whitespace-nowrap"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <NavLink href="/curtains">Curtains</NavLink>

              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md divide-y divide-gray-200 min-w-[200px] mr-4">
                {curtainSubcategory.map((item) => (
                  <Link
                    key={item}
                    href={`/curtains/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-6 py-3 hover:text-[#FFC100] whitespace-nowrap"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <NavLink href="/rugs">Rugs</NavLink>

              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md divide-y divide-gray-200 min-w-[200px] mr-4">
                {rugSubcategory.map((item) => (
                  <Link
                    key={item}
                    href={`/rugs/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-6 py-3 hover:text-[#FFC100] whitespace-nowrap"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <NavLink href="/flooring">Flooring</NavLink>

              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md divide-y divide-gray-200 min-w-[200px] mr-4">
                {flooringSubcategory.map((item) => (
                  <Link
                    key={item}
                    href={`/flooring/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-6 py-3 hover:text-[#FFC100] whitespace-nowrap"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <NavLink href="/carpettiles">Carpet tiles</NavLink>

              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md divide-y divide-gray-200 min-w-[200px] mr-4">
                {carpettilesSubcategory.map((item) => (
                  <Link
                    key={item}
                    href={`/carpettiles/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-6 py-3 hover:text-[#FFC100] whitespace-nowrap"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <NavLink href="/contactus">Contact us</NavLink>
          </div>

          {/* Search Bar (Mobile and Desktop) */}
          <form
            onSubmit={handleSearch}
            className="w-full lg:w-auto mt-4 lg:mt-0 flex items-center space-x-2 border rounded-lg bg-gray-100 px-3 py-2"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-sm text-black/90 flex-grow"
            />
            <button type="submit" aria-label="Search">
              <FiSearch className="text-[#14B1E7]" />
            </button>
          </form>
        </div>

        {/* Mobile Navigation Menu */}
        {/* {isMobileMenuOpen && (
          <div className="lg:hidden bg-white text-[#14B1E7] shadow-md">
            <div className="flex flex-col space-y-2 p-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/carpets">Carpets</NavLink>
              <NavLink href="/curtains">Curtains</NavLink>
              <NavLink href="/rugs">Rugs</NavLink>
              <NavLink href="/flooring">Flooring</NavLink>
              <NavLink href="/carpettiles">Carpet tiles</NavLink>
              <NavLink href="/contactus">Contact us</NavLink>
            </div>
          </div>
        )} */}
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white text-[#14B1E7] shadow-md">
            <div className="flex flex-col space-y-2 p-4">
              <NavLink href="/">Home</NavLink>

              {/* Carpets */}
              <Link
                href="/carpets"
                onClick={() =>
                  setOpenCategory(openCategory === "carpets" ? null : "carpets")
                }
                className={`block text-[#14B1E7] font-semibold ${
                  openCategory === "carpets" ? "text-[#FFC100]" : ""
                }`}
              >
                Carpets
              </Link>

              {openCategory === "carpets" &&
                carpetSubcategory.map((item: string) => {
                  const slug = item.toLowerCase().replace(/\s+/g, "-");

                  return (
                    <Link
                      key={item}
                      href={`/carpets/${slug}`}
                      className="block pl-4 py-1 text-[#14B1E7]"
                    >
                      {item}
                    </Link>
                  );
                })}

              {/* Curtains */}
              <Link
                href="/curtains"
                onClick={() =>
                  setOpenCategory(
                    openCategory === "curtains" ? null : "curtains",
                  )
                }
                className={`block text-[#14B1E7] font-semibold ${
                  openCategory === "curtains" ? "text-[#FFC100]" : ""
                }`}
              >
                Curtains
              </Link>

              {openCategory === "curtains" &&
                curtainSubcategory.map((item: string) => {
                  const slug = item.toLowerCase().replace(/\s+/g, "-");

                  return (
                    <Link
                      key={item}
                      href={`/curtains/${slug}`}
                      className="block pl-4 py-1 text-[#14B1E7]"
                    >
                      {item}
                    </Link>
                  );
                })}

              {/* Rugs */}
              <Link
                href="/rugs"
                onClick={() =>
                  setOpenCategory(openCategory === "rugs" ? null : "rugs")
                }
                className={`block text-[#14B1E7] font-semibold ${
                  openCategory === "rugs" ? "text-[#FFC100]" : ""
                }`}
              >
                Rugs
              </Link>

              {openCategory === "rugs" &&
                rugSubcategory.map((item: string) => {
                  const slug = item.toLowerCase().replace(/\s+/g, "-");

                  return (
                    <Link
                      key={item}
                      href={`/rugs/${slug}`}
                      className="block pl-4 py-1 text-[#14B1E7]"
                    >
                      {item}
                    </Link>
                  );
                })}

              {/* Flooring */}
              <Link
                href="/flooring"
                onClick={() =>
                  setOpenCategory(
                    openCategory === "flooring" ? null : "flooring",
                  )
                }
                className={`block text-[#14B1E7] font-semibold ${
                  openCategory === "flooring" ? "text-[#FFC100]" : ""
                }`}
              >
                Flooring
              </Link>

              {openCategory === "flooring" &&
                flooringSubcategory.map((item: string) => {
                  const slug = item.toLowerCase().replace(/\s+/g, "-");

                  return (
                    <Link
                      key={item}
                      href={`/flooring/${slug}`}
                      className="block pl-4 py-1 text-[#14B1E7]"
                    >
                      {item}
                    </Link>
                  );
                })}

              {/* Carpet tiles */}
              <Link
                href="/carpettiles"
                onClick={() =>
                  setOpenCategory(
                    openCategory === "carpettiles" ? null : "carpettiles",
                  )
                }
                className={`block text-[#14B1E7] font-semibold ${
                  openCategory === "carpettiles" ? "text-[#FFC100]" : ""
                }`}
              >
                Carpet tiles
              </Link>

              {openCategory === "carpettiles" &&
                carpettilesSubcategory.map((item: string) => {
                  const slug = item.toLowerCase().replace(/\s+/g, "-");

                  return (
                    <Link
                      key={item}
                      href={`/carpettiles/${slug}`}
                      className="block pl-4 py-1 text-[#14B1E7]"
                    >
                      {item}
                    </Link>
                  );
                })}

              <NavLink href="/contactus">Contact us</NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
