"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl"
        >
          <img src="https://res.cloudinary.com/exercice-disp/image/upload/v1756225698/Texto_do_seu_par%C3%A1grafo-removebg-preview_2_eugpb8.png" alt="logo" className="h-10 w-auto" />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-6 md:flex">

          <Link href="/services" className="text-sm text-gray-600 transition hover:text-blue-600">
            Services
          </Link>

          <Link href="/market" className="text-sm text-gray-600 transition hover:text-blue-600">
            Market
          </Link>

          <Link href="/contact" className="text-sm text-gray-600 transition hover:text-blue-600">
            Contact
          </Link>

          {/* CTA */}
          <Link
            href="/login"
            className="ml-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Login
          </Link>

        </div>

        {/* MOBILE */}
        <details
          className="relative md:hidden"
          onToggle={(e) => setIsOpen(e.currentTarget.open)}
        >
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition hover:bg-gray-100 relative">

            {/* Ícones animados */}
            <FaBars
              className={`h-5 w-5 text-gray-700 transition-all duration-300 ${
                isOpen ? "opacity-0 rotate-90" : "opacity-100"
              }`}
            />

            <FaTimes
              className={`absolute h-5 w-5 text-gray-700 transition-all duration-300 ${
                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            />

          </summary>

          {/* DROPDOWN */}
          <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">

            <Link href="/" className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
              Home
            </Link>

            <Link href="/services" className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
              Services
            </Link>

            <Link href="/market" className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
              Market
            </Link>

            <Link href="/profile" className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
              Profile
            </Link>

            <Link href="/contact" className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
              Contact
            </Link>

            {/* CTA MOBILE */}
            <Link
              href="/login"
              className="mt-2 block rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-center text-sm font-medium text-white shadow-md transition hover:shadow-lg"
            >
              Login
            </Link>

          </div>
        </details>

      </div>
    </nav>
  );
}