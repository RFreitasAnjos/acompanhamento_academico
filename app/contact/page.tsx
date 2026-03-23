"use client";

import { FaInstagram, FaWhatsapp, FaLinkedin, FaDownload } from "react-icons/fa";
import AOSReveal from "@/components/AOSReveal";
import { useState, type FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Mensagem enviada com sucesso!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Erro ao enviar");
      }
    } catch (error) {
      console.error(error);
      alert("Erro inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AOSReveal
      as="section"
      animation="fade-up"
      className="min-h-[calc(100vh-80px)] overflow-x-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Fale com a gente
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Tire dúvidas, solicite suporte ou entre em contato para parcerias e projetos acadêmicos.
          </p>
        </div>

        <div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

            {/* FORM */}
            <div className="w-full rounded-2xl border border-border bg-surface/80 p-6 shadow-xl backdrop-blur-xl sm:p-8">

              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Enviar mensagem
              </h3>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-muted">Nome</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                    className="rounded-lg border border-border bg-surface px-4 py-3 text-foreground transition placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-muted">E-mail</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="rounded-lg border border-border bg-surface px-4 py-3 text-foreground transition placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-muted">Mensagem</label>
                  <textarea
                    placeholder="Como podemos te ajudar?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="h-32 resize-none rounded-lg border border-border bg-surface px-4 py-3 text-foreground transition placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 rounded-lg bg-primary py-3 font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>
            </div>

            {/* CONTATOS */}
            <div className="flex w-full flex-col gap-5 rounded-2xl border border-border bg-surface/80 p-6 shadow-xl backdrop-blur-xl sm:p-8">

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Outros canais
              </h3>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/profvictoriamaria"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-primary via-secondary to-accent shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:h-52 lg:h-60"
              >
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg')] bg-cover bg-center opacity-30"></div>
                <FaInstagram className="text-white text-4xl z-10" />
                <span className="absolute bottom-2 right-2 text-white font-bold z-10 text-sm">
                  Instagram
                </span>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/5581984671415?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20projetos%20acad%C3%AAmicos."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-success px-4 py-3 text-white transition hover:opacity-90"
              >
                <FaWhatsapp className="text-xl" />
                <span>Falar no WhatsApp</span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-primary px-4 py-3 text-white transition hover:bg-primary-hover"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>

              {/* DOWNLOAD */}
              <a
                href="/files/apresentacao.pdf"
                download
                className="flex items-center gap-3 rounded-lg bg-foreground px-4 py-3 text-background transition hover:opacity-90"
              >
                <FaDownload className="text-xl" />
                <span>Baixar apresentação</span>
              </a>
            </div>
          </div>
        </div>

        {/* CARD EXTRA */}
        <div className="mt-10 rounded-2xl bg-primary p-6 text-white shadow-lg">
          <h4 className="mb-2 font-semibold">
            💡 Precisa de ajuda rápida?
          </h4>
          <p className="text-sm opacity-90">
            Entre em contato com o suporte para respostas imediatas ou dúvidas sobre nossos serviços.
          </p>
        </div>

      </div>
    </AOSReveal>
  );
}