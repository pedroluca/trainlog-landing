import React, { useState } from 'react';
import { Check, Crown, Zap } from 'lucide-react';
import PremiumModal from './PremiumModal';

interface PremiumProps {
  onCtaClick: () => void;
}

const Premium: React.FC<PremiumProps> = ({ onCtaClick }) => {
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);

  const freeFeatures = [
    'Registro ilimitado de treinos',
    'Biblioteca de exercícios completa',
    'Templates básicos de treino',
    'Histórico de 7 dias nas atividades',
    'Modo offline',
  ];

  const premiumFeatures = [
    'TUDO da conta padrão',
    'Histórico ilimitado de treinos',
    'Acesso total ao Feed de amigos',
    'Selo Premium exclusivo',
    'Controles de privacidade avançados',
    'Análises avançadas e estatísticas',
    'Gráficos de progresso detalhados',
    'Suporte prioritário',
  ];

  return (
    <section id="premium" className="py-20 px-4 bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-premium rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-premium text-white px-6 py-2 rounded-full font-bold mb-4">
            💎 PLANOS E PREÇOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comece Sua Jornada <span className="text-gradient-premium">Hoje Mesmo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conta padrão gratuita + pacote Premium com recursos exclusivos por R$ 9,90
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Account */}
          <div className="glass rounded-3xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-white">Conta Gratuita</h3>
                <p className="text-gray-400">Tudo que você precisa</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold text-primary mb-2">Grátis</div>
              <div className="text-primary text-sm font-semibold">CADASTRO 100% GRATUITO</div>
              <div className="text-gray-400 mt-1">Acesso completo para sempre</div>
            </div>

            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCtaClick}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-4 rounded-xl transition"
            >
              Começar Grátis
            </button>
          </div>

          {/* Premium Plan */}
          <div className="relative">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-premium text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg z-10">
              ⭐ EXPERIÊNCIA COMPLETA
            </div>

            <div className="glass rounded-3xl p-8 border-2 border-amber-500 relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="w-8 h-8 text-amber-500" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Premium</h3>
                    <p className="text-gray-400">Recursos avançados</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-gradient-premium">R$ 9,90</span>
                  </div>
                  <div className="text-primary text-sm font-semibold">UPGRADE ÚNICO E VITALÍCIO</div>
                  <div className="text-amber-500 text-sm mt-1">💳 Complemente a sua experiência</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setIsPremiumModalOpen(true)}
                  className="w-full bg-gradient-premium hover:opacity-90 text-white font-bold px-6 py-4 rounded-xl transition shadow-lg shadow-amber-500/30"
                >
                  Upgrade para Premium
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment info */}
        <div className="text-center mt-12 text-gray-400 text-sm max-w-3xl mx-auto">
          <p className="text-lg font-semibold text-white mb-3">Como Funciona:</p>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="glass rounded-lg p-4 border border-gray-800">
              <p className="font-semibold text-primary mb-2">1️⃣ Conta Padrão</p>
              <p className="text-sm">Crie sua conta gratuitamente e tenha acesso a todos os recursos essenciais do app, para sempre. Sem custo!</p>
            </div>
            <div className="glass rounded-lg p-4 border border-gray-800">
              <p className="font-semibold text-amber-500 mb-2">2️⃣ Premium (R$ 9,90) - Acesso Total</p>
              <p className="text-sm">Potencialize seus resultados com ferramentas avançadas e apoie o desenvolvimento do projeto com um pagamento único!</p>
            </div>
          </div>
          <p className="mt-4">💡 Upgrade Premium via PIX com aprovação rápida por WhatsApp</p>
          <p className="mt-2 font-semibold text-white">Conta grátis para sempre! Premium sem mensalidade! 🎉</p>
        </div>
      </div>

      {/* Premium Modal */}
      <PremiumModal isOpen={isPremiumModalOpen} onClose={() => setIsPremiumModalOpen(false)} />
    </section>
  );
};

export default Premium;
