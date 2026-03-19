'use client';

import { Check } from 'lucide-react';
import { plansMock } from '@/public/mocks/Mocks';
import Link from 'next/link';

export default function ServicesPlans() {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20">

      {/* BACKGROUND EFFECT */}
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-10 text-center lg:mb-14">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Planos para sua jornada acadêmica
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
            Escolha o plano ideal para gerenciar projetos, acompanhar progresso e explorar oportunidades no marketplace.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {plansMock.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl border bg-white p-6 sm:p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
              ${plan.popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}
              `}
            >

              {/* BADGE */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-xs font-semibold text-white shadow-md">
                    ⭐ Mais Popular
                  </span>
                </div>
              )}

              {/* NOME */}
              <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
                {plan.name}
              </h3>

              <p className="mb-5 text-sm text-gray-600">
                {plan.description}
              </p>

              {/* PREÇO */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* FEATURES */}
              <ul className="mb-6 space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full rounded-xl py-3 font-medium transition-all duration-300
                ${plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {plan.cta}
              </button>

            </div>
          ))}

        </div>

        {/* FOOTER */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Todos os planos incluem acesso ao dashboard, integração e suporte.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block text-sm text-blue-600 hover:underline"
          >
            Fale conosco para mais informações
          </Link>
        </div>

      </div>
    </section>
  );
}