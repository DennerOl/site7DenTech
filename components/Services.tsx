
import React, { useEffect, useState } from 'react';
import { apiService } from '../services/apiService';
import { Service } from '../types';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    apiService.getServices().then(setServices);
  }, []);

  return (
    <section id="servicos" className="py-32 bg-[#343A40] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">O que entregamos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossas Especialidades</h3>
          <p className="text-gray-400 text-lg">
            Design Responsivo e Tecnologia de Ponta integrados em soluções robustas para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/50 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
              <div className="relative h-full p-10 bg-[#0a1128] rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-blue-600/20 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
