"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { FaStar, FaCheck } from "react-icons/fa";

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  const alunos = useCountUp(start ? 120 : 0, 1500);
  const avaliacao = useCountUp(start ? 4.5 : 0, 1500);
  const media = useCountUp(start ? 8.5 : 0, 1500);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
    >
      {/* CARD */}
      <div className="rounded-xl border border-border bg-surface p-4 text-center shadow-sm">
        <p className="text-xl font-bold text-foreground">+{Math.floor(alunos)}</p>
        <p className="text-xs text-muted">Alunos atendidos</p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-center shadow-sm">
        <p className="text-xl font-bold text-foreground">{avaliacao}<FaStar className="inline-block ml-1 text-accent" /></p>
        <p className="text-xs text-muted">Avaliação média</p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-center shadow-sm">
        <p className="text-xl font-bold text-foreground">{media}</p>
        <p className="text-xs text-muted">Média de notas</p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-center shadow-sm">
        <p className="text-xl font-bold text-success"><FaCheck className="inline-block ml-1" /></p>
        <p className="text-xs text-muted">Resultados comprovados</p>
      </div>
    </div>
  );
}