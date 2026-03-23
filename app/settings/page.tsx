"use client";

import Aside from "@/components/ui/Aside";
import { useAside } from "@/contexts/AsideContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function SettingsPage() {
  const { isOpen } = useAside();

  return (
    <div className="min-h-screen bg-background">
      <div className={`flex flex-col md:flex-row ${isOpen ? "md:gap-0" : ""}`}>

        {/* ASIDE */}
        <Aside />

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Settings</h1>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-8 lg:p-10">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-foreground">Theme</h2>
                <p className="mt-1 text-sm text-muted">Use the automatic mode or force light and dark manually.</p>
              </div>

              <ThemeToggle className="w-full sm:w-auto" />
            </div>

            {/* ACCOUNT SETTINGS CARD */}
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-8 lg:p-10">
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Account Settings</h2>

              <form className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-muted">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-muted">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-muted">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-muted">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* BOTÃO DE SALVAR */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-8 lg:p-10">
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Preferences</h2>
              <p className="text-muted">Configure suas preferências do app, notificações e integrações.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}