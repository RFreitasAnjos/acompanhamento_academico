import Image from "next/image";
import { FaChalkboardTeacher } from "react-icons/fa";

export default function BusinessCard() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl lg:max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-8 lg:p-10">

          {/* EFEITO DE FUNDO */}
          <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-primary/15 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-secondary/15 blur-3xl"></div>

          {/* CONTEÚDO */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6 md:flex-row md:items-center md:text-left md:gap-10">

            {/* FOTO */}
            <div className="shrink-0">
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-surface shadow-lg sm:h-32 sm:w-32 lg:h-36 lg:w-36 md:mx-0">
                <Image
                  src="https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg"
                  alt="profissional"
                  width={144}
                  height={144}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* TEXTO */}
            <div className="flex-1">

              {/* TAG */}
              <span className="mb-2 inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                Educadora & Especialista
              </span>

              {/* TÍTULO */}
              <h2 className="mb-3 text-lg font-bold leading-tight text-foreground sm:text-xl lg:text-2xl">
                Profissional dedicada ao desenvolvimento acadêmico
              </h2>

              {/* DESCRIÇÃO */}
              <p className="mb-4 text-sm leading-relaxed text-muted sm:text-base">
                Acompanhamento acadêmico com foco no desenvolvimento individual e evolução educacional.
              </p>

              {/* FORMAÇÃO */}
              <div className="rounded-2xl border border-border bg-surface-muted p-4 text-left shadow-inner">

                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">
                  Formação
                </h3>

                <ul className="space-y-1 text-sm text-muted">
                  <li className="flex items-center gap-2">
                    <FaChalkboardTeacher />
                    Licenciatura em História
                  </li>
                  <li className="flex items-center gap-2">
                    <FaChalkboardTeacher />
                    Licenciatura em Pedagogia
                  </li>
                  <li className="flex items-center gap-2">
                    <FaChalkboardTeacher />
                    Pós-graduação em Atendimento Educacional Especializado
                  </li>
                </ul>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}