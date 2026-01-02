
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#343A40]">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 font-bold uppercase tracking-widest text-[10px]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Tecnologia de Ponta
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-none">
            Soluções Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Totalmente <br />Customizáveis.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
            A 7DenTech desenvolve soluçoes de T.I sob medida, entendendo que cada negócio é único. Transformamos sua visão em realidade digital de alto impacto.
          </p>
          <div className="flex flex-wrap gap-5 pt-4">
           
           <a href="#servicos" className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Conhecer Serviços
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="relative w-full aspect-square max-w-[550px] p-8 flex items-center justify-center">
            {/* Logo7.png com padding para não parecer cortada */}
          <img 
            src="assets/7semFundo3-Photoroom.png" 
            alt="7DenTech Digital Solution" 
            className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(37,99,235,0.3)] animate-float opacity-50"
          />

          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
