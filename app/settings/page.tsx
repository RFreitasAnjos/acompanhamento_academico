"use client";

import Aside from "@/components/ui/Aside";
import { useAside } from "@/contexts/AsideContext";

export default function SettingsPage() {
  const { isOpen } = useAside();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`flex flex-col md:flex-row ${isOpen ? "md:gap-0" : ""}`}>

        {/* ASIDE */}
        <Aside />

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="mb-6 text-3xl font-bold text-gray-900">Settings</h1>

          <div className="space-y-6">
            {/* ACCOUNT SETTINGS CARD */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xl">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Account Settings</h2>

              <form className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* BOTÃO DE SALVAR */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-500 px-6 py-3 text-white font-semibold transition hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            {/* OUTROS CARDS DE CONFIGURAÇÃO (OPCIONAL) */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xl">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Preferences</h2>
              <p className="text-gray-600">Configure suas preferências do app, notificações e integrações.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}