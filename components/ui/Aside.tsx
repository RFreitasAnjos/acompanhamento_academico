"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Aside() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsAuthenticated(window.localStorage.getItem("academic:isAuthenticated") === "true");
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  function handleLogout() {
    window.localStorage.removeItem("academic:isAuthenticated");
    window.localStorage.removeItem("academic:userName");
    window.localStorage.removeItem("academic:userRole");
    window.localStorage.removeItem("academic:userAvatar");
    setIsAuthenticated(false);
  }

  return (
    <aside className="w-full bg-gray-900 p-5 text-white md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:w-72 md:shrink-0 md:overflow-y-auto">
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
              <p className="text-sm text-gray-300">Você está autenticado.</p>
            </div>
          </div>

          {/* STATUS CARD */}
          <div className="rounded-3xl bg-white/10 p-4 text-gray-200 shadow-inner">
            <p className="font-medium text-white">Acesso ativo</p>
            <p className="mt-1 text-sm">Aqui você pode acompanhar seu painel, atividades e serviços vinculados à conta.</p>
          </div>

          {/* LOGOUT */}
          <button
            type="button"
            onClick={handleLogout}
            className="w-full rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            Logout
          </button>

          {/* NAVEGAÇÃO */}
          <nav>
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
              <li>
                <Link href="/profile" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-gray-800">Profile</Link>
              </li>
              <li>
                <Link href="/followup" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-gray-800">Follow Up</Link>
              </li>
              <li>
                <Link href="/market" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-gray-800">Market</Link>
              </li>
              <li>
                <Link href="/contact" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-gray-800">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold md:text-2xl">Acesso público</h2>
            <p className="text-sm text-gray-300">Você está navegando sem autenticação.</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-4 text-gray-200 shadow-inner">
            <p className="font-medium text-white">Informações acessíveis</p>
            <ul className="mt-2 space-y-2 text-gray-300 text-sm">
              <li>• Serviços disponíveis</li>
              <li>• Market público</li>
              <li>• Contato e suporte</li>
              <li>• Informações do projeto</li>
            </ul>
          </div>

          <nav>
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
              <li>
                <Link href="/" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-gray-800">Home</Link>
              </li>
              <li>
                <Link href="/services" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-gray-800">Services</Link>
              </li>
              <li>
                <Link href="/market" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-gray-800">Market</Link>
              </li>
              <li>
                <Link href="/contact" className="block rounded-xl px-4 py-2 text-sm transition hover:bg-gray-800">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </aside>
  );
}