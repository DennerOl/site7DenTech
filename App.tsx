import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Founder from "./components/Founder";
import WhatsAppButton from "./components/WhatsAppButton";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f7fa] flex flex-col selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* Sessão de Apresentação com Design Melhorado */}
        <section id="empresa" className="py-32 bg-[#343A40]">
          <div className="container mx-auto px-6">
            <div className="bg-[#0a1128] rounded-[4rem] border border-white/5 shadow-3xl overflow-hidden flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-10">
                <div>
                  <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-3">
                    Sobre a 7DenTech
                  </h2>
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Sua parceira ideal em inovação digital
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed font-light">
                    A 7DenTech é uma empresa que visa desenvolver sistemas web e
                    sites sob medida para cada cliente. Entendemos que cada
                    negócio é único e merece uma solução personalizada.
                  </p>
                  <p className="text-gray-400 leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2">
                    "A 7DenTech é a parceria que a sua empresa precisa para
                    prosperar no mundo conectado."
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Utilizamos tecnologia de ponta e design responsivo para
                    garantir que sua presença digital seja impecável. Prestamos
                    consultoria em T.I. especializada para cada segmento.
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="#contato"
                    className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-600/20"
                  >
                    Solicitar Consultoria
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 bg-[#050a18] relative flex items-center justify-center p-16 lg:p-24">
                {/* Container de imagem otimizado para evitar cortes */}
                <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center bg-blue-900/10 rounded-[3rem] p-12 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-50"></div>
                  <img
                    src="/assets\tecnologia1.jpg"
                    alt="7DenTech Logo Presentation"
                    className="relative z-10 w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110  opacity-75"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Founder />

        <section
          id="contato"
          className="py-32 bg-[#050a18] border-t border-white/5 relative"
        >
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
              Vamos construir o futuro?
            </h2>
            <p className="text-gray-400 mb-14 max-w-2xl mx-auto text-lg leading-relaxed">
              Não importa o tamanho do seu desafio. Nossa equipe está pronta
              para criar a solução customizável que seu negócio exige.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:7dentech@gmail.com"
                className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Enviar E-mail
              </a>
              <a
                href="https://www.instagram.com/7dentech/?igsh=b3RweDlzNjdvM25q#"
                className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all"
              >
                Ver Portfólio
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#030712] text-gray-500 py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Coluna 1: Branding */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/7simbolo7D.png"
                  alt="Logo 7DenTech"
                  className="h-16 opacity-90"
                />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl tracking-tight leading-none">
                    7DENTECH
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-blue-500 mt-1 font-semibold">
                    Tecnologia Digital
                  </span>
                </div>
              </div>
              <p className="text-sm mt-4 max-w-xs">
                Consultoria especializada em desenvolvimento web escalável e
                soluções digitais sob medida.
              </p>
            </div>

            {/* Coluna 2: Navegação Interna */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-semibold mb-2">Empresa</h4>
              <a
                href="#inicio"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                Início
              </a>
              <a
                href="/politica-privacidade"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                Termos de Uso
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold mb-2">Conecte-se</h4>

              {/* GitHub */}
              <a
                href="https://github.com/DennerOl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-all text-sm flex items-center gap-3 group"
              >
                <svg
                  xmlns="www.w3.org"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub Open Source</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://br.linkedin.com/in/dener-oliveira-dev?trk=people-guest_people_search-card"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-all text-sm flex items-center gap-3 group"
              >
                <svg
                  xmlns="www.w3.org"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn Profissional</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/7dentech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-all text-sm flex items-center gap-3 group"
              >
                <svg
                  xmlns="www.w3.org"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram 7DenTech</span>
              </a>
            </div>
          </div>

          {/* Linha Final */}
          <div className="border-t border-white/5 pt-10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <span>
              &copy; {new Date().getFullYear()} 7DenTech - Soluções Web Sob
              Medida.
            </span>
            <div className="flex gap-4">
              <span className="text-xs uppercase tracking-widest text-gray-600">
                Desenvolvido com Tecnologia de Ponta
              </span>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;
