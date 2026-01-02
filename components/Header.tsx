import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/90 backdrop-blur-md shadow-2xl py-2 border-b border-white/5"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo e Nome - Ajustados para mobile */}
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src="/assets/7simbolo7D.png"
            alt="7DenTech Logo"
            className="h-10 w-auto md:h-16 lg:h-20 object-contain"
          />
          <span className="font-bold text-lg md:text-2xl tracking-tighter text-white">
            7DENTECH
          </span>
        </div>

        {/* Navegação Desktop - Permanece oculta no mobile */}
        <nav className="hidden md:flex gap-10 font-medium">
          <a
            href="#inicio"
            className="text-gray-300 hover:text-blue-400 transition-colors text-sm uppercase tracking-widest"
          >
            Início
          </a>
          <a
            href="#empresa"
            className="text-gray-300 hover:text-blue-400 transition-colors text-sm uppercase tracking-widest"
          >
            Empresa
          </a>
          <a
            href="#servicos"
            className="text-gray-300 hover:text-blue-400 transition-colors text-sm uppercase tracking-widest"
          >
            Serviços
          </a>
          <a
            href="#fundador"
            className="text-gray-300 hover:text-blue-400 transition-colors text-sm uppercase tracking-widest"
          >
            Fundador
          </a>
        </nav>

        {/* Botão Fale Conosco - Responsivo */}
        <a
          href="#contato"
          className="bg-blue-600 text-white px-3 py-2 md:px-6 md:py-2.5 rounded-lg text-xs md:text-base font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95 whitespace-nowrap"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
};

export default Header;
