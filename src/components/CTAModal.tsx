import React from 'react';
import { X } from 'lucide-react';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CTAModal: React.FC<CTAModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  const handleAccessWebApp = () => {
    window.open('https://app.trainlog.site', '_blank');
    onClose();
  };

  const handleDownloadApk = () => {
    window.open('https://trainlog.site/download/TrainLog.apk', '_blank');
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
            Acesse o TrainLog
          </h2>

          <p className="text-gray-400 mb-6">
            Agora você pode acessar o app diretamente pelo navegador (PWA) <b>ou</b> baixar o APK para Android.
          </p>


          <div className="bg-dark-bg border border-gray-700 rounded-xl p-6 mb-6 text-left">
            <h3 className="text-lg font-bold text-white mb-3">📋 Escolha uma opção:</h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAccessWebApp}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition"
              >
                Acessar via WebApp (PWA)
              </button>
              <button
                onClick={handleDownloadApk}
                className="w-full bg-dark-card border border-primary text-primary font-bold py-3 rounded-lg transition hover:bg-primary/10"
              >
                Baixar APK para Android
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              O WebApp funciona em qualquer dispositivo. O APK é exclusivo para Android.
            </p>
          </div>

          <p className="text-sm text-gray-500 text-center">
            🔒 Pagamento seguro via PIX • Acesso vitalício
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTAModal;
