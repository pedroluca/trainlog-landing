import React from 'react';
import { UserPlus, Dumbbell, TrendingUp, Trophy } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="w-10 h-10" />,
      title: 'Crie Sua Conta',
      description: 'Cadastre-se por apenas R$ 14,90 e tenha acesso vitalício ao app completo.'
    },
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: 'Registre Seus Treinos',
      description: 'Use templates prontos ou crie seus próprios treinos personalizados.'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Acompanhe o Progresso',
      description: 'Visualize sua evolução com gráficos e estatísticas detalhadas.'
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: 'Alcance Seus Objetivos',
      description: 'Mantenha-se motivado e veja os resultados acontecerem!'
    }
  ];

  return (
    <section className="py-20 px-4 bg-dark-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Como <span className="text-primary">Funciona?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comece a usar em 4 passos simples
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}

              <div className="relative z-10 text-center">
                {/* Step number */}
                <div className="bg-primary/20 text-primary font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="inline-block bg-dark-bg p-4 rounded-2xl mb-4 text-primary">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Pronto para começar sua jornada?</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-primary/30"
          >
            Criar Conta - R$ 14,90
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
