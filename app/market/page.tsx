"use client";

import { useState, useMemo } from "react";
import CardMarket from "@/components/ui/CardsMarket";
import { cardMarketMock } from "../../public/mocks/Mocks";

export default function MarketPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Math", "Science", "History"];

  // 🔎 FILTRO + BUSCA
  const filteredItems = useMemo(() => {
    return cardMarketMock.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = selectedCategory
        ? item.category === selectedCategory
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Explore o Market
          </h1>
          <p className="mt-2 text-gray-600">
            Encontre materiais, serviços e conteúdos acadêmicos de alta qualidade.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">

          {/* SIDEBAR */}
          <aside className="w-full lg:w-72">

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              {/* SEARCH */}
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar produtos..."
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* CATEGORIES */}
              <div className="mt-6">
                <h2 className="mb-3 text-sm font-semibold text-gray-900">
                  Categorias
                </h2>

                <div className="flex flex-wrap gap-2 lg:flex-col">

                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`rounded-lg px-3 py-2 text-sm transition ${selectedCategory === null
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                  >
                    Todas
                  </button>

                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-lg px-3 py-2 text-sm transition ${selectedCategory === cat
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* GRID */}
          <div className="flex-1">

            {/* RESULT COUNT */}
            <div className="mb-4 text-sm text-gray-500">
              {filteredItems.length} resultado(s) encontrado(s)
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="transition-all duration-300 hover:scale-[1.02]"
                  >
                    <CardMarket
                      title={item.title}
                      description={item.description}
                      value={item.price}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-500">
                  Nenhum resultado encontrado.
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}