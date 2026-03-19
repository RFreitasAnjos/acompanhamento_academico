"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5581984671475"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl"
    >
      {/* ÍCONE */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-white"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.697 4.607 1.896 6.482L4 29l7.72-1.85A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm0 21.8c-1.93 0-3.72-.56-5.23-1.52l-.37-.23-4.58 1.1 1.22-4.46-.24-.38A9.8 9.8 0 1 1 16 24.8zm5.39-7.35c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.02 3.09 4.89 4.33.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
      </svg>

      {/* TEXTO (some no mobile pequeno) */}
      <span className="hidden sm:block text-sm font-medium">
        Fale conosco
      </span>
    </a>
  );
}