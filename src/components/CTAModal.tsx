import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, hasFirebaseConfig } from '../firebase';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CTAModal: React.FC<CTAModalProps> = ({ isOpen, onClose }) => {
  const [showGooglePlayForm, setShowGooglePlayForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (showGooglePlayForm) {
      emailInputRef.current?.focus();
      emailInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [showGooglePlayForm]);

  if (!isOpen) return null;

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleAccessWebApp = () => {
    window.open('https://apptractus.com.br', '_blank');
    onClose();
  };

  const handleDownloadApk = () => {
    window.open('https://trainlog.site/download/Tractus.apk', '_blank');
    onClose();
  };

  const handleOpenGooglePlayForm = () => {
    setShowGooglePlayForm(true);
    setError('');
    setSuccessMessage('');
  };

  const handleBackToOptions = () => {
    setShowGooglePlayForm(false);
    setError('');
    setSuccessMessage('');
  };

  const handleGooglePlayInterest = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setSuccessMessage('');

    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      setError('Digite um email valido para entrar na lista da Google Play.');
      return;
    }

    if (!db || !hasFirebaseConfig) {
      setError('Integracao temporariamente indisponivel. Tente novamente em instantes.');
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'google_play_waitlist'), {
        email: normalizedEmail,
        status: 'pending',
        source: 'landing_google_play',
        interestType: 'google_play_access',
        followUpStatus: 'needs_admin_review',
        locale: navigator.language || 'unknown',
        userAgent: navigator.userAgent || 'unknown',
        requestCount: 1,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setSuccessMessage('Perfeito! Recebemos seu email. Assim que liberarmos seu acesso na Google Play, voce recebe o link por email.');
      setEmail('');
    } catch {
      setError('Nao foi possivel registrar agora. Tente novamente em alguns minutos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-dark-card rounded-t-3xl sm:rounded-2xl max-w-md w-full max-h-[92vh] overflow-hidden border border-gray-800 shadow-2xl">
        <div className="max-h-[92vh] overflow-y-auto overscroll-contain p-5 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center pr-8 sm:pr-0">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">💪</span>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">
              Acesse o Tractus
            </h2>

            <p className="text-gray-400 mb-6">
              Crie sua conta <b>gratuitamente</b> e escolha como quer entrar no app. Se pedir acesso pela Google Play, o email vai direto para o painel do admin.
            </p>

            <div className="bg-dark-bg border border-gray-700 rounded-xl p-6 mb-6 text-left">
              <h3 className="text-lg font-bold text-white mb-3">👇 Escolha uma forma de acessar</h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleAccessWebApp}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition"
                >
                  Usar WebApp agora
                </button>
                <button
                  onClick={handleDownloadApk}
                  className="w-full bg-dark-card border border-primary text-primary font-bold py-3 rounded-lg transition hover:bg-primary/10"
                >
                  Baixar APK para Android
                </button>
                <button
                  onClick={handleOpenGooglePlayForm}
                  className="w-full bg-gradient-to-r from-[#6fdb86] to-[#27AE60] text-white font-bold py-3 rounded-lg transition hover:opacity-90"
                >
                  Quero acesso na Google Play
                </button>
              </div>

              {showGooglePlayForm && (
                <form onSubmit={handleGooglePlayInterest} className="mt-4 space-y-3 border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">Lista da Google Play</p>
                      <p className="text-xs text-gray-500">Etapa 2 de 2</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleBackToOptions}
                      className="text-xs font-semibold text-primary hover:text-primary-dark transition"
                    >
                      Voltar
                    </button>
                  </div>

                  <p className="text-sm text-gray-300">
                    Informe seu email para entrar na lista da Google Play. O admin vai ver essa solicitação, aprovar quando liberar e te enviar o link por email.
                  </p>

                  <input
                    ref={emailInputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    required
                    className="w-full bg-dark-card border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  {error && <p className="text-sm text-red-400">{error}</p>}
                  {successMessage && <p className="text-sm text-green-400">{successMessage}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-bold py-3 rounded-lg transition"
                  >
                    {isSubmitting ? 'Enviando...' : 'Entrar na lista da Google Play'}
                  </button>
                </form>
              )}

              <p className="text-xs text-gray-500 mt-4">
                O WebApp funciona em qualquer dispositivo. O APK e exclusivo para Android.
              </p>
            </div>

            <p className="text-sm text-gray-500 text-center">
              ✨ Cadastro 100% gratuito • Acesso vitalício • Convite manual pela equipe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAModal;
