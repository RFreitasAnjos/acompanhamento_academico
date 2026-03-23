'use client';

import { Check } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { plansMock } from '@/public/mocks/Mocks';
import Link from 'next/link';

const planStyles = {
  Simples: {
    border: 'border-amber-700/40 ring-1 ring-amber-700/10',
    badge: 'bg-amber-700 text-white shadow-amber-700/20',
    accent: 'text-amber-700',
    label: 'Bronze',
  },
  Ouro: {
    border: 'border-yellow-500 ring-2 ring-yellow-500/20',
    badge: 'bg-yellow-500 text-white shadow-yellow-500/20',
    accent: 'text-yellow-500',
    label: 'Gold',
  },
  Platinum: {
    border: 'border-slate-300 ring-1 ring-slate-200',
    badge: 'bg-slate-300 text-slate-900 shadow-slate-400/20',
    accent: 'text-slate-300',
    label: 'Platinum',
  },
} as const;

export default function ServicesPlans() {
  return (
    <section className="relative bg-background py-12 sm:py-16 lg:py-20">

      {/* BACKGROUND EFFECT */}
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-10 text-center lg:mb-14">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Planos para sua jornada acadêmica
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted sm:text-base">
            Escolha o plano ideal para gerenciar projetos, acompanhar progresso e explorar oportunidades no marketplace.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {plansMock.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl border bg-surface p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8
              ${planStyles[plan.name as keyof typeof planStyles]?.border ?? 'border-border'}
              `}
            >

              {/* BADGE */}
              {planStyles[plan.name as keyof typeof planStyles] && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-semibold ${planStyles[plan.name as keyof typeof planStyles].badge}`}>
                    <FaStar /> {planStyles[plan.name as keyof typeof planStyles].label}
                  </span>
                </div>
              )}

              {/* NOME */}
              <h3 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
                {plan.name}
              </h3>

              <p className="mb-5 text-sm text-muted">
                {plan.description}
              </p>

              {/* PREÇO */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* FEATURES */}
              <ul className="mb-6 space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`mt-0.5 h-5 w-5 ${planStyles[plan.name as keyof typeof planStyles]?.accent ?? 'text-primary'}`} />
                    <span className="text-sm text-muted">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full rounded-xl py-3 font-medium transition-all duration-300
                ${plan.popular
                  ? 'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg'
                  : 'border border-border text-foreground hover:bg-surface-muted'
                }`}
              >
                {plan.cta}
              </button>

            </div>
          ))}

        </div>

        {/* FOOTER */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted">
            Todos os planos incluem acesso ao dashboard, integração e suporte.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block text-sm text-primary hover:underline"
          >
            Fale conosco para mais informações
          </Link>
        </div>

      </div>
    </section>
  );
}