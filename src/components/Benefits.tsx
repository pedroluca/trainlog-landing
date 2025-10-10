import React from 'react';
import { Target, Users, TrendingUp, Heart } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Foco nos Resultados',
      description: 'Acompanhe cada repetição e veja sua evolução semana a semana. Dados concretos para decisões inteligentes.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Para Todos os Níveis',
      description: 'Seja você iniciante ou avançado, o TrainLog se adapta ao seu ritmo e objetivos.'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Progressão Constante',
      description: 'Visualize seu crescimento e mantenha-se motivado com estatísticas detalhadas e gamificação.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Saúde em Primeiro Lugar',
      description: 'Monitore seu corpo de forma completa: peso, gordura corporal e medidas personalizadas.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 px-4 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por Que Escolher o <span className="text-primary">TrainLog?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mais do que um app, é seu parceiro na jornada fitness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-6 glass rounded-2xl p-8 border border-gray-800 hover:border-primary transition"
            >
              <div className="text-primary flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-400">Gratuito para Começar</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">PWA</div>
            <div className="text-gray-400">Funciona Offline</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">∞</div>
            <div className="text-gray-400">Exercícios Disponíveis</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-400">Sempre Disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
