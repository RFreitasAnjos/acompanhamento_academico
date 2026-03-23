"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Ana Souza",
    role: "Estudante de Pedagogia",
    text: "Minha evolução foi absurda depois do acompanhamento. Hoje tenho muito mais segurança nos trabalhos acadêmicos.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Universitário",
    text: "A plataforma me ajudou a organizar tudo. Minhas notas subiram de forma consistente.",
    rating: 4.5,
  },
  {
    name: "Juliana Alves",
    role: "Pós-graduação",
    text: "O suporte é diferenciado. Sempre tive orientação clara e objetiva.",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  const testimonial = testimonials[index];

  return (
    <div className="relative w-full max-w-md">

      {/* BOTÃO PREV */}
      <button
        onClick={prev}
        className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-surface p-2 shadow-md transition hover:scale-110 hover:bg-surface-muted"
      >
        ←
      </button>

      {/* BOTÃO NEXT */}
      <button
        onClick={next}
        className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-surface p-2 shadow-md transition hover:scale-110 hover:bg-surface-muted"
      >
        →
      </button>

      {/* CARD */}
      <div className="relative h-65 overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-xl transition-all duration-500">

        {/* glow */}
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-secondary/15 blur-3xl" />

        {/* CONTEÚDO */}
        <div className="relative z-10 flex h-full flex-col justify-between">

          {/* TOP */}
          <div>

            {/* USER */}
            <div className="mt-4 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-primary to-secondary font-bold text-white">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted">
                  {testimonial.role}
                </p>
              </div>

            </div>

            {/* STARS */}
            <div className="mb-3 flex items-center gap-1 text-accent">
              {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                <FaStar key={i} className="h-5 w-5" />
              ))}
              <span className="ml-1 text-xs text-muted">
                {testimonial.rating}
              </span>
            </div>

            {/* TEXT */}
            <p className="line-clamp-4 text-sm leading-relaxed text-muted">
              “{testimonial.text}”
            </p>

          </div>



        </div>
      </div>

      {/* INDICADORES */}
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 cursor-pointer rounded-full transition-all ${i === index ? "w-4 bg-primary" : "w-2 bg-border"
              }`}
          />
        ))}
      </div>
    </div>
  );
}