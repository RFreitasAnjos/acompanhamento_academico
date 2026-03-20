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
          <h2 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl">
            Fale com a gente
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Tire dúvidas, solicite suporte ou entre em contato para parcerias e projetos acadêmicos.
          </p>
        </div>

        <div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

            {/* FORM */}
            <div className="w-full rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">

              <h3 className="mb-6 text-xl font-semibold text-gray-800">
                Enviar mensagem
              </h3>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Nome</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                    className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600">E-mail</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Mensagem</label>
                  <textarea
                    placeholder="Como podemos te ajudar?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none h-32"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 rounded-lg bg-blue-600 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>
            </div>

            {/* CONTATOS */}
            <div className="flex w-full flex-col gap-5 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">

              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                Outros canais
              </h3>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/profvictoriamaria"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-pink-500 via-purple-500 to-yellow-400 shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:h-52 lg:h-60"
              >
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg')] bg-cover bg-center opacity-30"></div>
                <FaInstagram className="text-white text-4xl z-10" />
                <span className="absolute bottom-2 right-2 text-white font-bold z-10 text-sm">
                  Instagram
                </span>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/5581984671475"
                target="_blank"
                className="flex items-center gap-3 rounded-lg bg-green-500 px-4 py-3 text-white transition hover:bg-green-600"
              >
                <FaWhatsapp className="text-xl" />
                <span>Falar no WhatsApp</span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="flex items-center gap-3 rounded-lg bg-blue-700 px-4 py-3 text-white transition hover:bg-blue-800"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>

              {/* DOWNLOAD */}
              <a
                href="/files/apresentacao.pdf"
                download
                className="flex items-center gap-3 rounded-lg bg-gray-800 px-4 py-3 text-white transition hover:bg-gray-900"
              >
                <FaDownload className="text-xl" />
                <span>Baixar apresentação</span>
              </a>
            </div>
          </div>
        </div>

        {/* CARD EXTRA */}
        <div className="mt-10 rounded-2xl bg-blue-600 p-6 text-white shadow-lg">
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