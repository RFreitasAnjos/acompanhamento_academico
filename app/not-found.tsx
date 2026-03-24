"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [secondsRemaining, setSecondsRemaining] = useState(15);
  const progress = (secondsRemaining / 15) * 100;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      router.replace("/");
    }, 15000);

    const intervalId = window.setInterval(() => {
      setSecondsRemaining((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <section className="w-full max-w-2xl rounded-3xl border border-border bg-surface p-8 text-center shadow-xl sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
          Essa pagina sumiu do quadro
        </h1>

        <p className="mt-4 text-base text-muted sm:text-lg">
          O endereco acessado nao existe ou foi movido. Volte para a pagina inicial para continuar navegando.
        </p>

        <div className="mt-6 space-y-2 text-left">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            <span>Retorno automatico</span>
            <span>{secondsRemaining}s</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-surface-muted ring-1 ring-border">
            <div
              className="h-full rounded-full bg-linear-to-r from-primary to-secondary transition-[width] duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Voltar para o inicio
          </Link>
        </div>
      </section>
    </main>
  );
}