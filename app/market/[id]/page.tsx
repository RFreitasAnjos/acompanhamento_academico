import Image from "next/image";
import { cardMarketMock } from "@/public/mocks/Mocks";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ContentPage({ params }: Props) {
  const { id } = await params;

  const item = cardMarketMock.find((item) => item.id === Number(id));

  if (!item) {
    return <div className="p-4 text-foreground sm:p-6 lg:p-8">Item not found</div>;
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-border bg-surface/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-h-70 bg-linear-to-br from-primary-soft via-surface to-accent-soft p-6 sm:p-8">
            <div className="flex h-full items-center justify-center rounded-3xl border border-border bg-surface/70 p-4 shadow-inner">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={1200}
                height={800}
                className="max-h-80 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10">
            <div className="space-y-4">
              <span className="inline-flex w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {item.category}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{item.title}</h2>
              <p className="text-base leading-7 text-muted sm:text-lg">{item.description}</p>

              <div className="rounded-2xl border border-border bg-surface-muted p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Price</p>
                <p className="text-3xl font-bold tracking-tight text-foreground">${item.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-primary to-secondary px-5 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition hover:shadow-xl">
                Comprar agora
              </button>
              <button className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-5 py-3 font-semibold text-foreground transition hover:bg-surface-muted">
                Falar com suporte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}