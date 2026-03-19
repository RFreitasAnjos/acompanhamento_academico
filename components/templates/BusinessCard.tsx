export default function BusinessCard() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="mx-auto max-w-5xl lg:max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xl">

          {/* EFEITO DE FUNDO */}
          <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl"></div>

          {/* CONTEÚDO */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6 md:flex-row md:items-center md:text-left md:gap-10">

            {/* FOTO */}
            <div className="flex-shrink-0">
              <div className="h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36 overflow-hidden rounded-full border-4 border-white shadow-lg mx-auto md:mx-0">
                <img
                  src="https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg"
                  alt="profissional"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* TEXTO */}
            <div className="flex-1">

              {/* TAG */}
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                Educadora & Especialista
              </span>

              {/* TÍTULO */}
              <h2 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl leading-tight">
                Profissional dedicada ao desenvolvimento acadêmico
              </h2>

              {/* DESCRIÇÃO */}
              <p className="mb-4 text-sm text-gray-600 sm:text-base leading-relaxed">
                Acompanhamento acadêmico com foco no desenvolvimento individual e evolução educacional.
              </p>

              {/* FORMAÇÃO */}
              <div className="rounded-2xl bg-gray-50 p-4 shadow-inner text-left">

                <h3 className="mb-2 text-xs font-semibold text-gray-800 uppercase tracking-wide">
                  Formação
                </h3>

                <ul className="space-y-1 text-sm text-gray-600">
                  <li>🎓 Licenciatura em História</li>
                  <li>🎓 Licenciatura em Pedagogia</li>
                  <li>📚 Pós-graduação em Atendimento Educacional Especializado</li>
                </ul>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}