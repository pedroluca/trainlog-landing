import React from 'react';
import { X, Crown } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleAccessApp = () => {
    window.open('https://app.trainlog.site', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-dark-card rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8 border-2 border-amber-500 shadow-2xl">
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center relative z-10">
          <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-6">
            <Crown className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Upgrade para <span className="text-gradient-premium">Premium</span>
          </h2>

          <p className="text-gray-400 mb-6">
            Você precisa ter uma conta ativa para fazer o upgrade para Premium.
          </p>

          <div className="bg-dark-bg border border-amber-500/30 rounded-xl p-6 mb-6 text-left">
            <h3 className="text-lg font-bold text-white mb-3">✨ Como fazer o upgrade:</h3>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-gradient-premium font-bold mr-2">1.</span>
                <span><strong className="text-white">Já tenha uma conta</strong> criada no TrainLog</span>
              </li>
              <li className="flex items-start">
                <span className="text-gradient-premium font-bold mr-2">2.</span>
                <span>Acesse seu <strong className="text-white">perfil</strong> no app</span>
              </li>
              <li className="flex items-start">
                <span className="text-gradient-premium font-bold mr-2">3.</span>
                <span>Procure a badge com o escrito <span className="inline-block bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs font-bold">FREE</span> indicando seu plano atual</span>
              </li>
              <li className="flex items-start">
                <span className="text-gradient-premium font-bold mr-2">4.</span>
                <span><strong className="text-white">Clique na badge</strong> e siga as instruções para upgrade</span>
              </li>
              <li className="flex items-start">
                <span className="text-gradient-premium font-bold mr-2">5.</span>
                <span>Pague <strong className="text-amber-500">R$ 14,90</strong> via PIX e pronto! 🎉</span>
              </li>
            </ol>
          </div>

          <div className="bg-gradient-premium/10 border border-amber-500/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-300">
              💡 <strong className="text-white">Ainda não tem conta?</strong> Crie primeiro por R$ 10 e depois faça o upgrade quando quiser!
            </p>
          </div>

          <button
            onClick={handleAccessApp}
            className="w-full bg-gradient-premium hover:opacity-90 text-white font-bold py-4 rounded-lg transition mb-4 shadow-lg shadow-amber-500/30"
          >
            Acessar Meu Perfil
          </button>

          <p className="text-sm text-gray-500">
            👑 Upgrade único e vitalício • Recursos avançados
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumModal;
