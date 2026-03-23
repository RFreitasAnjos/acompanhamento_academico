"use client";

import { useEffect, useMemo, useState } from "react";
import CardMarket from "@/components/ui/CardsMarket";
import MarketSidebar from "@/components/ui/MarketSidebar";
import { cardMarketMock } from "@/public/mocks/Mocks";

type GridColumns = 2 | 3 | 4;

const gridClassByColumns: Record<GridColumns, string> = {
  2: "grid grid-cols-1 gap-6 sm:grid-cols-2",
  3: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

function GridModeIcon({ columns }: { columns: GridColumns }) {
  const cells = Array.from({ length: columns });

  return (
    <span className="flex items-center justify-center rounded-xl bg-surface-muted p-2">
      <span className={`grid gap-0.5 ${columns === 4 ? 'grid-cols-2' : columns === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
        {cells.map((_, index) => (
          <span
            key={index}
            className="h-2.5 w-2.5 rounded-sm bg-primary shadow-sm"
          />
        ))}
      </span>
    </span>
  );
}

export default function MarketPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [gridColumns, setGridColumns] = useState<GridColumns>(3);

  useEffect(() => {
    const storedColumns = window.localStorage.getItem("academic:market-grid-columns");
    if (storedColumns === "2" || storedColumns === "3" || storedColumns === "4") {
      setGridColumns(Number(storedColumns) as GridColumns);
      return;
    }

    const width = window.innerWidth;
    setGridColumns(width >= 1280 ? 4 : width >= 768 ? 3 : 2);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("academic:market-grid-columns", String(gridColumns));
  }, [gridColumns]);

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

  const handleToggleGridColumns = () => {
    setGridColumns((currentColumns) => {
      if (currentColumns === 2) {
        return 3;
      }

      if (currentColumns === 3) {
        return 4;
      }

      return 2;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:px-6 lg:px-8">

        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        {/* HEADER */}
        <div className="relative mb-10 flex flex-col gap-4 rounded-4xl border border-border bg-surface/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Market
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Explore o Market
            </h1>
            <p className="text-base leading-7 text-muted sm:text-lg">
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

            {/* GRID CONTROLS */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm font-medium text-muted">
                {filteredItems.length} resultado(s) encontrado(s)
              </div>

              <button
                type="button"
                onClick={handleToggleGridColumns}
                className="group hidden items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md md:inline-flex"
                aria-label="Alterar quantidade de colunas"
                title="Alternar entre 2, 3 e 4 colunas"
              >
                <GridModeIcon columns={gridColumns} />

                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
                    Colunas
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {gridColumns}xN
                  </span>
                </span>

                <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary transition group-hover:bg-primary group-hover:text-white">
                  Alterar
                </span>
              </button>
            </div>

            <div className={gridClassByColumns[gridColumns]}>

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
                <div className="col-span-full rounded-3xl border border-border bg-surface p-6 text-center text-muted shadow-sm">
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