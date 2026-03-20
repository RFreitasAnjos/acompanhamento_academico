"use client";

import { useState, useMemo } from "react";
import CardMarket from "@/components/ui/CardsMarket";
import MarketSidebar from "@/components/ui/MarketSidebar";
import { cardMarketMock } from "@/public/mocks/Mocks";

export default function MarketPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const categories = useMemo(
    () => Array.from(new Set(cardMarketMock.map((item) => item.category))),
    []
  );

  // 🔎 FILTRO + BUSCA
  const filteredItems = useMemo(() => {
    return cardMarketMock.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = selectedCategory
        ? item.category === selectedCategory
        : true;

      const parsedMinPrice = minPrice ? Number(minPrice) : null;
      const parsedMaxPrice = maxPrice ? Number(maxPrice) : null;

      const matchesMinPrice = parsedMinPrice !== null ? item.price >= parsedMinPrice : true;
      const matchesMaxPrice = parsedMaxPrice !== null ? item.price <= parsedMaxPrice : true;

      return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
    });
  }, [search, selectedCategory, minPrice, maxPrice]);

  const handleClearFilters = () => {
    setSearch("");
    setSelectedCategory(null);
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eff6ff,#f8fafc_45%,#f9fafb_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-4 rounded-4xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Market
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore o Market
            </h1>
            <p className="text-base leading-7 text-gray-600 sm:text-lg">
              Encontre materiais, serviços e conteúdos acadêmicos de alta qualidade.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">

          {/* SIDEBAR */}
          <MarketSidebar
            search={search}
            setSearch={setSearch}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            categories={categories}
            onClearFilters={handleClearFilters}
          />

          {/* GRID */}
          <div className="flex-1">

            {/* RESULT COUNT */}
            <div className="mb-4 text-sm font-medium text-gray-500">
              {filteredItems.length} resultado(s) encontrado(s)
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="transition-all duration-300 hover:scale-[1.01]"
                  >
                    <CardMarket
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      value={item.price}
                      category={item.category}
                      imageUrl={item.imageUrl}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full rounded-3xl border border-gray-200 bg-white p-6 text-center text-gray-500 shadow-sm">
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