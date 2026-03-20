import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-linear-to-b from-gray-950 to-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        {/* GRID */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">

          {/* BRAND */}
          <div>
            <h2 className="text-lg font-bold text-gray-200">Victória Educacional</h2>
            <p className="mt-2 max-w-sm text-sm text-gray-400">
              Plataforma completa para acompanhamento acadêmico, serviços e exploração de conteúdos.
            </p>
          </div>

          {/* LINKS */}
          <div className="col-span-2 text-sm text-gray-400">
            <span className="font-semibold text-gray-200 block mb-2">Links</span>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <Link href="/" className="transition hover:text-blue-400">Home</Link>
              <Link href="/services" className="transition hover:text-blue-400">Serviços</Link>
              <Link href="/market" className="transition hover:text-blue-400">Market</Link>
              <Link href="/contact" className="transition hover:text-blue-400">Contato</Link>
              <Link href="/followup" className="transition hover:text-blue-400">Follow-up</Link>
              <Link href="/about" className="transition hover:text-blue-400">Sobre</Link>
              <Link href="/notification" className="transition hover:text-blue-400">Notificações</Link>
              <Link href="/settings" className="transition hover:text-blue-400">Configurações</Link>
            </div>
          </div>

          {/* AUTHOR */}
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <span className="font-semibold text-gray-200">Developer</span>

            <a
              href="https://rfreitasanjos.github.io/meu-portifolio/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              Renan Freitas
            </a>

            <p className="text-xs text-gray-500">
              Built with modern web technologies.
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-6 h-px bg-gray-800" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} Academic Project. All rights reserved.</p>

          <p className="text-gray-600">
            Built for academic tracking, services, and market exploration.
          </p>
        </div>

      </div>
    </footer>
  );
}