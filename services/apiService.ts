
import { Service, FounderInfo, ContactForm } from '../types';

/**
 * Esta classe simula a comunicação com seu back-end Java (Spring Boot, etc).
 * No seu ambiente real, troque os caminhos para os endpoints configurados no seu Controller.
 */
const BASE_URL = '/api/v1'; // Prefixo padrão para APIs Java

export const apiService = {
  // GET /api/v1/services
  async getServices(): Promise<Service[]> {
    // Simulação de retorno do banco via Java
    return [
      {
        id: 1,
        title: 'Sistemas Web Sob Medida',
        description: 'Desenvolvemos sistemas robustos e escaláveis focados na regra de negócio da sua empresa.',
        icon: '💻'
      },
      {
        id: 2,
        title: 'Sites Institucionais',
        description: 'Presença digital marcante com design moderno e totalmente responsivo para todos os dispositivos.',
        icon: '🌐'
      },
      {
        id: 3,
        title: 'Consultoria em T.I.',
        description: 'Orientação especializada para otimizar seus processos tecnológicos e infraestrutura.',
        icon: '🛡️'
      }
    ];
    // Exemplo real: return fetch(`${BASE_URL}/services`).then(res => res.json());
  },

  // GET /api/v1/founder
  async getFounder(): Promise<FounderInfo> {
    return {
      name: 'Fundador da 7DenTech',
      role: 'CEO & Lead Developer',
      bio: 'Com vasta experiência no mercado de tecnologia, lidera a 7DenTech com o compromisso de entregar excelência e inovação em cada projeto.',
      imageUrl: 'https://picsum.photos/seed/founder/400/400',
      qualifications: [
        'Especialista em Análise e Desenvolvimento Web Fullstack',
        'Consultor Estratégico de TI',
        'Especialista em UX/UI Design'
      ]
    };
    // Exemplo real: return fetch(`${BASE_URL}/founder`).then(res => res.json());
  },

  // POST /api/v1/contact
  async sendContact(data: ContactForm): Promise<boolean> {
    console.log('Enviando dados para o Java Backend:', data);
    return true;
    // Exemplo real: 
    // const res = await fetch(`${BASE_URL}/contact`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
    // return res.ok;
  }
};
