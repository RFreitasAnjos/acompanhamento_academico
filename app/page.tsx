import AOSReveal from "@/components/AOSReveal";
import { cardMarketMock } from "@/public/mocks/Mocks";
import Hero from "@/components/templates/Hero";
import BusinessCard from "@/components/templates/BusinessCard";
import Testimonials from "@/components/templates/Testimonials";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import CardMarket from "@/components/ui/CardsMarket";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />

      {/* MARKET */}
      <section className="relative bg-surface py-12 sm:py-16 lg:py-16">
        {/* BACKGROUND EFFECT (mais suave e inclusivo) */}
        <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="mb-10 text-center lg:mb-12">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Explore o Market
            </h2>

            <p className="mx-auto max-w-2xl text-sm text-muted sm:text-base">
              Descubra uma variedade de recursos acadêmicos, desde materiais de estudo até serviços personalizados, tudo em um só lugar.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...cardMarketMock]
              .reverse()
              .slice(0, 3)
              .map((item, index) => {
                const isHighlight = index === 0;

                return (
                  <AOSReveal
                    key={item.id}
                    animation="fade-up"
                    delay={index * 150}
                    className="h-full"
                  >
                    <div
                      className={`
                        relative flex h-full flex-col overflow-hidden rounded-3xl border bg-surface p-1
                        transition-all duration-300
                        hover:-translate-y-1 hover:shadow-xl
                        ${
                          isHighlight
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border"
                        }
                      `}
                    >
                      {isHighlight && (
                        <div className="absolute right-4 top-4 z-20 rounded-full bg-linear-to-r from-primary to-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-primary/20">
                          New
                        </div>
                      )}

                      {/* glow interno */}
                      {isHighlight && (
                        <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-secondary/5" />
                      )}

                      <div className="relative flex h-full flex-col justify-between rounded-3xl bg-surface p-5 sm:p-6">
                        <CardMarket
                          id={item.id}
                          title={item.title}
                          description={item.description}
                          value={item.price}
                          category={item.category}
                          imageUrl={item.imageUrl}
                        />
                      </div>
                    </div>
                  </AOSReveal>
                );
              })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* BUSINESS CARD */}
      <BusinessCard />

      {/* NEWSLETTER */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 className="mb-2 text-2xl font-bold">
            Fique por dentro
          </h2>

          <p className="mb-6 text-muted">
            Receba novidades e atualizações direto no seu email.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Seu email"
              className="input flex-1 rounded-lg px-4 py-3"
            />

            <button className="btn-primary rounded-lg px-6 py-3 sm:whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
}