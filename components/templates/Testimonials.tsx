import { testimonials } from "@/public/mocks/Mocks";
import AOSReveal from "../AOSReveal";

export default function Testimonials() {
   return (
      <section className="bg-white py-12 sm:py-16">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
               O que estão dizendo os nossos clientes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
               {testimonials.map((t, index) => (
                  <AOSReveal
                     key={t.id}
                     animation="fade-up"
                     delay={index * 100}
                     className="h-full rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8 flex flex-col justify-between"
                  >
                     <div>
                        <h4 className="font-bold text-gray-800">{t.name}</h4>
                        <span className="text-sm text-gray-500">{t.role}</span>
                     </div>
                     <p className="text-gray-600 mb-6">
                        &ldquo;{t.message}&rdquo;
                     </p>
                  </AOSReveal>
               ))}
            </div>
         </div>
      </section>
   )
}