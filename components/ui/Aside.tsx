"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAside } from "@/contexts/AsideContext";

export default function Aside() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isOpen, closeAside } = useAside();
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsAuthenticated(window.localStorage.getItem("academic:isAuthenticated") === "true");
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (asideRef.current && !asideRef.current.contains(event.target as Node)) {
        closeAside();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, closeAside]);

  function handleLogout() {
    window.localStorage.removeItem("academic:isAuthenticated");
    window.localStorage.removeItem("academic:userName");
    window.localStorage.removeItem("academic:userRole");
    window.localStorage.removeItem("academic:userAvatar");
    setIsAuthenticated(false);
  }

  return (
    <>
      {/* BACKDROP OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-30 bg-slate-950/55 transition-opacity duration-300 md:hidden"
          onClick={closeAside}
        />
      )}

      {/* ASIDE DRAWER */}
      <aside
        ref={asideRef}
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-72 overflow-y-auto bg-slate-950 p-5 text-slate-100 transition-transform duration-300 ease-out md:static md:h-screen md:shrink-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
      {isAuthenticated ? (
        <div className="space-y-6">
          
          {/* PERFIL */}
          <div className="flex flex-col items-center gap-3 md:items-start md:gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/20">
              <Image
                src="/profile-avatar.svg"
                alt="Profile"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold md:text-2xl">Perfil</h2>
              <p className="text-sm text-slate-300">Você está autenticado.</p>
            </div>
          </div>

          {/* STATUS CARD */}
          <div className="rounded-3xl bg-white/10 p-4 text-slate-200 shadow-inner">
            <p className="font-medium text-white">Acesso ativo</p>
            <p className="mt-1 text-sm">Aqui você pode acompanhar seu painel, atividades e serviços vinculados à conta.</p>
          </div>

          {/* LOGOUT */}
          <button
            type="button"
            onClick={handleLogout}
            className="w-full rounded-2xl bg-linear-to-r from-red-500 to-red-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            Logout
          </button>

          {/* NAVEGAÇÃO */}
          <nav>
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
              <li>
                <Link href="/profile" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-white/10">Profile</Link>
              </li>
              <li>
                <Link href="/followup" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-white/10">Follow Up</Link>
              </li>
              <li>
                <Link href="/settings" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-white/10">Settings</Link>
              </li>
              <li>
                <Link href="/support" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-white/10">Support</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold md:text-2xl">Acesso público</h2>
            <p className="text-sm text-slate-300">Você está navegando sem autenticação.</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-4 text-slate-200 shadow-inner">
            <p className="font-medium text-white">Informações acessíveis</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li>• Serviços disponíveis</li>
              <li>• Market público</li>
              <li>• Contato e suporte</li>
              <li>• Informações do projeto</li>
            </ul>
          </div>

        </div>
      )}
      </aside>
    </>
  );
}