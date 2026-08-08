"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/data";
import Logo from "@/assets/icons/Logo.svg";
import { Button } from "@/components/ui/button";


const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 mx-4 lg:hidden">
      {/* Navbar */}
      <div
        className={`flex h-16 w-full items-center justify-between bg-[#d8d5d5] px-5 ${isMenuOpen ? "rounded-t-2xl" : "rounded-2xl"}`}
      >
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <Logo className="h-6 w-8.5" />

          <span className="text-xl font-bold text-brand-secondary">
            Nexcent
          </span>
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex size-10 items-center justify-center"
        >
          <div className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-6 bg-brand-secondary transition-all duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-brand-secondary transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-brand-secondary transition-all duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-full z-50 w-full overflow-hidden bg-[#d8d5d5] rounded-b-2xl shadow-lg transition-all duration-300 ${
          isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-center text-base font-medium text-neutral-d-gray transition-colors hover:text-brand-primary"
            >
              {link.name}
            </Link>
          ))}

          {/* Auth buttons */}
          <div className="mt-2 flex flex-col gap-3">
            <Button variant="secondary" className="w-full">
              Login
            </Button>

            <Button className="w-full">Sign Up</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MobileNavbar;
