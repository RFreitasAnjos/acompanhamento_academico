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
    return <div className="p-4 sm:p-6 lg:p-8">Item not found</div>;
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eff6ff,#f8fafc_45%,#f9fafb_100%)] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-white/70 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-h-70 bg-linear-to-br from-blue-100 via-white to-purple-100 p-6 sm:p-8">
            <div className="flex h-full items-center justify-center rounded-3xl border border-white/80 bg-white/70 p-4 shadow-inner">
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
              <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                {item.category}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{item.title}</h2>
              <p className="text-base leading-7 text-gray-600 sm:text-lg">{item.description}</p>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Price</p>
                <p className="text-3xl font-bold tracking-tight text-gray-900">${item.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-blue-500 to-purple-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-xl">
                Comprar agora
              </button>
              <button className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">
                Falar com suporte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}