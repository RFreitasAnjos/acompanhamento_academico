import Link from "next/link";
import SocialProof from "./SocialProof";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Hero(){
   return (
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center">

            {/* CARD PRINCIPAL */}
            <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8 lg:p-8">

              {/* BACKGROUND EFFECTS */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

              {/* CONTAINER FLEX */}
              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* ESQUERDA (TEXTO) */}
                <div className="w-full lg:max-w-xl">

                  {/* TAG */}
                  <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 sm:text-sm">
                    Plataforma Acadêmica
                  </span>

                  {/* TITLE */}
                  <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                    Organize seu progresso acadêmico com{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      inteligência
                    </span>
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="mb-5 text-sm text-gray-600 sm:text-base">
                    Acompanhe sua evolução, descubra oportunidades no marketplace e conte com suporte profissional para alcançar melhores resultados acadêmicos.
                  </p>

                  {/* ACTIONS */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">

                    <Link
                      href="/services"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:w-auto"
                    >
                      Explorar Serviços
                    </Link>

                    <Link
                      href="/market"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 sm:w-auto"
                    >
                      Ver Market
                    </Link>

                  </div>

                  <SocialProof />

                </div>

                {/* DIREITA (CAROUSEL) */}
                <div className="w-full lg:max-w-sm flex justify-center lg:justify-end">
                  <TestimonialsCarousel />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
   )
}