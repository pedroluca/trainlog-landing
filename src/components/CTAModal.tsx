import React from 'react';
import { X } from 'lucide-react';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CTAModal: React.FC<CTAModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleAccessApp = () => {
    window.open('https://app.trainlog.site', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-dark-card rounded-2xl max-w-md w-full p-8 border border-gray-800 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">💪</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Criar Sua Conta
          </h2>

          <p className="text-gray-400 mb-6">
            Para começar a usar o TrainLog, você precisa criar sua conta no app.
          </p>

          <div className="bg-dark-bg border border-gray-700 rounded-xl p-6 mb-6 text-left">
            <h3 className="text-lg font-bold text-white mb-3">📋 Como funciona:</h3>
            <ol className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">1.</span>
                <span>Acesse o app e faça seu cadastro</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">2.</span>
                <span>Efetue o pagamento de <strong className="text-white">R$ 10</strong> via PIX</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">3.</span>
                <span>Aguarde a aprovação (rápida!)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">4.</span>
                <span>Pronto! Sua conta vitalícia está ativa 🎉</span>
              </li>
            </ol>
          </div>

          <button
            onClick={handleAccessApp}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition mb-4"
          >
            Acessar o App
          </button>

          <p className="text-sm text-gray-500">
            🔒 Pagamento seguro via PIX • Acesso vitalício
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTAModal;
