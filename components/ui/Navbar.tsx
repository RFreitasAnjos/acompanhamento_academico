"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAside } from "@/contexts/AsideContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

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
    <nav className={`${navbarPositionClass} ${navbarMobileVisibilityClass} z-50 w-full border-b border-border bg-surface/90 backdrop-blur-xl transition-transform duration-300 ${
        isVisible || isAsideOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
      }`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="hidden text-lg font-bold tracking-tight text-foreground sm:text-xl md:block"
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

          <Link href="/services" className="text-sm text-muted transition hover:text-primary">
            Serviços
          </Link>

          <Link href="/market" className="text-sm text-muted transition hover:text-primary">
            Market
          </Link>

          <Link href="/contact" className="text-sm text-muted transition hover:text-primary">
            Contato
          </Link>

          {/* CTA */}
          <Link
            href="/login"
            className="ml-2 rounded-xl bg-linear-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Login
          </Link>

          <ThemeToggle compact />

        </div>

        {/* MOBILE */}
        <div className="relative flex w-full items-center justify-between md:hidden">
          <div className="flex items-center">
            {isPrivatePage && (
              <button
                type="button"
                onClick={handleAsideButtonClick}
                className={`flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface p-2 shadow-sm transition-opacity duration-300 hover:bg-surface-muted ${
                  isAsideOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                aria-label="Toggle sidebar"
                aria-expanded={isAsideOpen}
                aria-hidden={isAsideOpen}
              >
                <span className="relative block h-5 w-5">
                  <FaArrowAltCircleRight
                    className={`absolute inset-0 h-5 w-5 text-foreground transition-all duration-300 ${
                      isAsideOpen ? "opacity-0 rotate-90" : "opacity-100"
                    }`}
                  />
                </span>
              </button>
            )}
          </div>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-lg font-bold tracking-tight text-foreground"
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
            <summary className="relative flex cursor-pointer list-none items-center justify-center rounded-xl border border-border bg-surface p-2 shadow-sm transition hover:bg-surface-muted">

              <FaBars
                className={`h-5 w-5 text-foreground transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-90" : "opacity-100"
                }`}
              />

              <FaTimes
                className={`absolute h-5 w-5 text-foreground transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
              />

            </summary>

            <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-xl">

              <Link href="/" className="block rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-surface-muted">
                Home
              </Link>

              <Link href="/services" className="block rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-surface-muted">
                Services
              </Link>

              <Link href="/market" className="block rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-surface-muted">
                Market
              </Link>

              <Link href="/profile" className="block rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-surface-muted">
                Profile
              </Link>

              <Link href="/contact" className="block rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-surface-muted">
                Contact
              </Link>

              {/* CTA MOBILE */}
              <Link
                href="/login"
                className="mt-2 block rounded-xl bg-linear-to-r from-primary to-secondary px-4 py-2 text-center text-sm font-medium text-white shadow-md transition hover:shadow-lg"
              >
                Login
              </Link>

              <div className="mt-2">
                <ThemeToggle compact className="w-full justify-between" />
              </div>

            </div>
          </details>
        </div>

      </div>
    </nav>
  );
}