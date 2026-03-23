"use client";

import { Dispatch, SetStateAction } from "react";

type MarketSidebarProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  selectedCategory: string | null;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
  minPrice: string;
  setMinPrice: Dispatch<SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: Dispatch<SetStateAction<string>>;
  categories: string[];
  onClearFilters: () => void;
};

export default function MarketSidebar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  categories,
  onClearFilters,
}: MarketSidebarProps) {
  return (
    <aside className="w-full lg:sticky lg:top-24 lg:w-80 lg:self-start">
      <div className="rounded-3xl border border-border bg-surface/90 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Filtros
            </h2>
            <p className="mt-1 text-sm text-muted">
              Refine a busca por categoria e valor.
            </p>
          </div>

          <button
            type="button"
            onClick={onClearFilters}
            className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-surface-muted"
          >
            Limpar
          </button>
        </div>

        {/* SEARCH */}
        <div className="mt-5">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Buscar
          </label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar produtos..."
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted shadow-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
          />
        </div>

        {/* PRICE FILTER */}
        <div className="mt-6">
          <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Valor
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <span className="mb-1 block text-xs text-muted">Mínimo</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="0.00"
                className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted shadow-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <span className="mb-1 block text-xs text-muted">Máximo</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="99.99"
                className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted shadow-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Categorias
          </h3>

          <div className="flex flex-wrap gap-2 lg:flex-col">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                selectedCategory === null
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-surface-muted text-foreground hover:bg-surface"
              }`}
            >
              Todas
            </button>

            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20"
                    : "bg-surface-muted text-foreground hover:bg-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
