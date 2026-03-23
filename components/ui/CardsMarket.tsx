import Image from "next/image";
import Link from "next/link";

type CardMarketProps = {
   id: number;
   title: string;
   description: string;
   value: number;
   category: string;
   imageUrl: string;
};

export default function CardMarket({
   id,
   title,
   description,
   value,
   category,
   imageUrl,
}: CardMarketProps) {
   return (
      <Link
         href={`/market/${id}`}
         aria-label={`Ver detalhes de ${title}`}
         className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
         <article className="flex h-full flex-col">
            <div className="relative aspect-4/3 overflow-hidden bg-surface-muted">
               <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
               />
               <div className="absolute left-4 top-4 rounded-full border border-border bg-surface/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted backdrop-blur">
                  {category}
               </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
               <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                     {title}
                  </h3>
                  <p className="text-sm leading-6 text-muted sm:text-base">
                     {description}
                  </p>
               </div>

               <div className="mt-auto flex items-center justify-between gap-3">
                  <div>
                     <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                        Price
                     </span>
                     <p className="text-2xl font-bold tracking-tight text-foreground">
                        ${value.toFixed(2)}
                     </p>
                  </div>

                  <span className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm transition group-hover:shadow-md">
                     Detalhes
                  </span>
               </div>
            </div>
         </article>
      </Link>
   );
}