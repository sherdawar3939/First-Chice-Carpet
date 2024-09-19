"use client";
import React, { useState } from "react";
import { FiPhone, FiMail, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="bg-[#14B1E7] text-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <a href="tel:0427671930" className="flex items-center space-x-2">
            <FiPhone className="text-[#FFC100]" />
            <span>+971568842551</span>
          </a>
          <a
            href="https://wa.me/971568842551" // Replace with your WhatsApp number
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaWhatsapp className="text-green-400" />
            <span>+971568842551</span>
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white text-[#14B1E7] shadow-md">
        <div className="flex justify-between items-center p-4">
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
            <Image
              width={100}
              height={100}
              src="/logo.jpg"
              alt="Avante Homes"
              className="h-12"
            />
          </div>

          {/* Search Icon on the Right (Visible in Mobile) */}
          <div className="block lg:hidden">
            <button onClick={handleSearch} aria-label="Search">
              <FiSearch className="text-2xl text-[#14B1E7]" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 flex-grow justify-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/carpets">Carpets</NavLink>
            <NavLink href="/curtains">Curtains</NavLink>
            <NavLink href="/rugs">Rugs</NavLink>
            <NavLink href="/flooring">Flooring</NavLink>
            <NavLink href="/carpettiles">Carpet tiles</NavLink>
            <NavLink href="/contactus">Contact us</NavLink>
          </div>

          {/* Search Bar (Desktop Only) */}
          <form
            onSubmit={handleSearch}
            className="hidden lg:flex items-center space-x-2 border rounded-lg bg-gray-100 px-3 py-2"
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
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white text-[#14B1E7] shadow-md">
            <div className="flex flex-col space-y-2 p-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/carpets">Carpets</NavLink>
              <NavLink href="/curtains">Curtains</NavLink>
              <NavLink href="/rugs">Rugs</NavLink>
              <NavLink href="/flooring">Flooring</NavLink>
              <NavLink href="/carpettiles">Carpet tiles</NavLink>
              <NavLink href="/contactus">Contact us</NavLink>
              {/* Mobile Search Bar */}
              <form
                onSubmit={handleSearch}
                className="flex items-center space-x-2 border rounded-lg bg-gray-100 px-3 py-2 mt-4"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-sm text-[#14B1E7] flex-grow"
                />
                <button type="submit" aria-label="Search">
                  <FiSearch className="text-[#14B1E7]" />
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
