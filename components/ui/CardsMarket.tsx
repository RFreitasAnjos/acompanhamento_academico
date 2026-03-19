export default function CardMarket({ title, description, value }: { title: string; description: string; value: number }) {
   return (
      <div className="flex h-full w-full flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-5">
         <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">{title}</h3>
         <p className="text-base leading-6 text-gray-700 sm:text-lg">{description}</p>
         <p className="mt-auto text-2xl font-bold text-gray-900">${value.toFixed(2)}</p>
      </div>
   );
}