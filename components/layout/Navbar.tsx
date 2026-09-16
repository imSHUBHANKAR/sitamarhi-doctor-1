"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Doctor", href: "#about" },
  { name: "Specializations", href: "#specializations" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">
        
        {/* ==================== LOGO ==================== */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/icons/doctor-logo.svg"
            alt="Dr. Mohit Chowdhury"
            width={50}
            height={10}
            className="h-auto w-[40px] object-contain sm:w-[70px]"
            priority
          />
        </Link>

        {/* ==================== DESKTOP NAVIGATION ==================== */}
        <div className="hidden items-center lg:flex">
          <div className="flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative whitespace-nowrap text-[13px] font-medium text-slate-700 transition-colors duration-200 hover:text-[#0D9484]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Appointment Button */}
          <Link
            href="/appointment"
            className="ml-6 inline-flex items-center justify-center rounded-md bg-[#0D9484] px-5 py-3 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#07584f] hover:shadow-md"
          >
            Book Appointment
          </Link>
        </div>

        {/* ==================== MOBILE MENU BUTTON ==================== */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
        >
          {isOpen ? (
            /* Close Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* ==================== MOBILE MENU ==================== */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 pb-5 pt-3 sm:px-8">
          
          {/* Mobile Links */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:text-[#0D9484]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Appointment */}
          <Link
            href="/appointment"
            onClick={closeMenu}
            className="mt-4 flex w-full items-center justify-center rounded-md bg-[#0D9484] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#07584f]"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}