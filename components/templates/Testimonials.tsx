import { testimonials } from "@/public/mocks/Mocks";
import AOSReveal from "../AOSReveal";

export default function Testimonials() {
   return (
      <section className="bg-background py-12 sm:py-16">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
               O que estão dizendo os nossos clientes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
               {testimonials.map((t, index) => (
                  <AOSReveal
                     key={t.id}
                     animation="fade-up"
                     delay={index * 100}
                     className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
                  >
                     <div>
                        <h4 className="font-bold text-foreground">{t.name}</h4>
                        <span className="text-sm text-muted">{t.role}</span>
                     </div>
                     <p className="mb-6 text-muted">
                        &ldquo;{t.message}&rdquo;
                     </p>
                  </AOSReveal>
               ))}
            </div>
         </div>
      </section>
   )
}