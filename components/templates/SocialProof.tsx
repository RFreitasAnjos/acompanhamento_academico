"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

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
      <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
        <p className="text-xl font-bold text-gray-900">+{Math.floor(alunos)}</p>
        <p className="text-xs text-gray-500">Alunos atendidos</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
        <p className="text-xl font-bold text-gray-900">{avaliacao}⭐</p>
        <p className="text-xs text-gray-500">Avaliação média</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
        <p className="text-xl font-bold text-gray-900">{media}</p>
        <p className="text-xs text-gray-500">Média de notas</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
        <p className="text-xl font-bold text-green-600">✔</p>
        <p className="text-xs text-gray-500">Resultados comprovados</p>
      </div>
    </div>
  );
}