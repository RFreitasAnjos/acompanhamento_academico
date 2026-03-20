"use client";

import { useEffect, useState } from "react";
import Aside from "@/components/ui/Aside";
import { useAside } from "@/contexts/AsideContext";

export default function ProfilePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isOpen } = useAside();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsAuthenticated(window.localStorage.getItem("academic:isAuthenticated") === "true");
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`flex flex-col md:flex-row ${isOpen ? "md:gap-0" : ""}`}>
        <Aside />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h1 className="text-2xl font-bold sm:text-3xl">Profile Page</h1>
            <p className="mt-2 text-gray-600">
              {isAuthenticated
                ? "Conteúdo personalizado do usuário autenticado."
                : "Você pode consultar serviços, market e contato sem estar autenticado."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-xl border p-4">
                <h2 className="font-semibold">Serviços</h2>
                <p className="mt-1 text-sm text-gray-600">Explore planos e recursos disponíveis.</p>
              </div>
              <div className="rounded-xl border p-4">
                <h2 className="font-semibold">Market</h2>
                <p className="mt-1 text-sm text-gray-600">Veja os projetos e itens públicos.</p>
              </div>
              <div className="rounded-xl border p-4">
                <h2 className="font-semibold">Contato</h2>
                <p className="mt-1 text-sm text-gray-600">Fale com a equipe e tire dúvidas.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}