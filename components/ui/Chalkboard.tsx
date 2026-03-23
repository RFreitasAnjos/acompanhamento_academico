"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    if (seconds <= 0) {
      router.push("/");
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      
      <div className="w-full max-w-lg text-center space-y-6">
        
        {/* TÍTULO */}
        <h1 className="text-5xl font-bold text-foreground">
          404
        </h1>

        {/* TEXTO */}
        <div className="space-y-2">
          <p className="text-lg text-foreground font-medium">
            Página não encontrada
          </p>
          <p className="text-sm text-muted-foreground">
            Você será redirecionado automaticamente para a página inicial.
          </p>
        </div>

        {/* CONTADOR */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl font-bold text-emerald-500">
            {seconds}s
          </div>

          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-1000"
              style={{
                width: `${(seconds / 15) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* AÇÃO IMEDIATA */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition shadow-md"
          >
            Ir para Home agora
          </Link>
        </div>

      </div>
    </div>
  );
}