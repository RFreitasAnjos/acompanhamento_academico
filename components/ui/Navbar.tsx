"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAside } from "@/contexts/AsideContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isOpen: isAsideOpen, toggleAside, closeAside } = useAside();
  const pathname = usePathname();
  const isPrivatePage = ["/profile", "/followup", "/settings"].includes(pathname);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]);

    
  const navbarPositionClass = "fixed top-0";
  const navbarMobileVisibilityClass = "block";
  const handleAsideButtonClick = () => {
    if (isAsideOpen) {
      closeAside();
      return;
    }

    toggleAside();
  };

  return (
    <nav className={`${navbarPositionClass} ${navbarMobileVisibilityClass} z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl transition-transform duration-300 ${
        isVisible || isAsideOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
      }`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="hidden text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:block"
        >
          <Image
            src="https://res.cloudinary.com/exercice-disp/image/upload/v1756225698/Texto_do_seu_par%C3%A1grafo-removebg-preview_2_eugpb8.png"
            alt="logo"
            width={160}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-6 md:flex">

          <Link href="/services" className="text-sm text-gray-600 transition hover:text-blue-600">
            Serviços
          </Link>

          <Link href="/market" className="text-sm text-gray-600 transition hover:text-blue-600">
            Market
          </Link>

          <Link href="/contact" className="text-sm text-gray-600 transition hover:text-blue-600">
            Contato
          </Link>

          {/* CTA */}
          <Link
            href="/login"
            className="ml-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Login
          </Link>

        </div>

        {/* MOBILE */}
        <div className="relative flex w-full items-center justify-between md:hidden">
          <div className="flex items-center">
            {isPrivatePage && (
              <button
                type="button"
                onClick={handleAsideButtonClick}
                className={`flex cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition-opacity duration-300 hover:bg-gray-100 ${
                  isAsideOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                aria-label="Toggle sidebar"
                aria-expanded={isAsideOpen}
                aria-hidden={isAsideOpen}
              >
                <span className="relative block h-5 w-5">
                  <FaArrowAltCircleRight
                    className={`absolute inset-0 h-5 w-5 text-gray-700 transition-all duration-300 ${
                      isAsideOpen ? "opacity-0 rotate-90" : "opacity-100"
                    }`}
                  />
                </span>
              </button>
            )}
          </div>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-lg font-bold tracking-tight text-gray-900"
          >
            <Image
              src="https://res.cloudinary.com/exercice-disp/image/upload/v1756225698/Texto_do_seu_par%C3%A1grafo-removebg-preview_2_eugpb8.png"
              alt="logo"
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <details
            className="relative flex items-center justify-end"
            onToggle={(e) => setIsOpen(e.currentTarget.open)}
          >
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition hover:bg-gray-100 relative">

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
                className="mt-2 block rounded-xl bg-linear-to-r from-blue-500 to-purple-500 px-4 py-2 text-center text-sm font-medium text-white shadow-md transition hover:shadow-lg"
              >
                Login
              </Link>

            </div>
          </details>
        </div>

      </div>
    </nav>
  );
}