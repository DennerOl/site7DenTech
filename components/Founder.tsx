
import React, { useEffect, useState } from 'react';
import { apiService } from '../services/apiService';
import { FounderInfo } from '../types';

const Founder: React.FC = () => {
  const [founder, setFounder] = useState<FounderInfo | null>(null);

  useEffect(() => {
    apiService.getFounder().then(setFounder);
  }, []);

  if (!founder) return null;

  return (
    <section id="fundador" className="py-32 bg-[#343A40] text-white relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group max-w-[400px] w-full">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-transparent rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-white/5 p-2 bg-gradient-to-b from-white/10 to-transparent">
              <img 
                  src="assets/EuModelo1.jpeg"
                  alt={founder.name} 
                  className="w-full aspect-[4/5] object-cover object-top rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-sm">Liderança e Qualificação</h2>
              <h3 className="text-5xl font-extrabold text-white leading-tight">{founder.name}</h3>
              <div className="inline-block px-4 py-1.5 bg-blue-600/10 border border-blue-600/20 text-blue-400 rounded-lg font-bold text-sm uppercase tracking-widest">
                {founder.role}
              </div>
            </div>
            
            <p className="text-gray-300 text-xl leading-relaxed font-light">
              {founder.bio}
            </p>
            
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-6xl text-white/5 font-black group-hover:text-blue-500/10 transition-colors">7</div>
              <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Excelência Profissional
              </h4>
              <p className="mb-10 text-gray-400 text-lg leading-relaxed">
                Possui uma boa qualificação profissional para atender seus clientes, unindo visão estratégica de negócio à execução técnica impecável.
              </p>
              <ul className="grid sm:grid-cols-2 gap-6">
                {founder.qualifications.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-500 border border-blue-600/20 mt-1">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm lg:text-base leading-snug">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
