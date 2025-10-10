import React from 'react';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-400">
            Tire suas dúvidas ou solicite seu acesso Premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-8 border border-gray-800 hover:border-primary transition group flex flex-col items-center text-center"
          >
            <div className="bg-primary/20 p-4 rounded-full mb-4 group-hover:bg-primary/30 transition">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400 mb-4">
              Fale conosco diretamente pelo WhatsApp
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <span>Enviar mensagem</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:contato@trainlog.app"
            className="glass rounded-2xl p-8 border border-gray-800 hover:border-primary transition group flex flex-col items-center text-center"
          >
            <div className="bg-primary/20 p-4 rounded-full mb-4 group-hover:bg-primary/30 transition">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-4">
              Prefere email? Respondemos rapidamente
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <span>contato@trainlog.app</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* FAQ Quick */}
        <div className="mt-16 glass rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Perguntas Frequentes</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Como funciona o pagamento?</h4>
              <p className="text-gray-400">R$ 10 pagamento único para criar sua conta e ter acesso completo. O Premium (R$ 14,90) é um upgrade opcional com recursos extras, também pagamento único.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">O app funciona offline?</h4>
              <p className="text-gray-400">Sim! Como PWA, o TrainLog funciona completamente offline. Seus dados sincronizam automaticamente quando você volta a ter conexão.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Meus dados estão seguros?</h4>
              <p className="text-gray-400">Totalmente! Usamos Firebase, uma plataforma do Google, garantindo máxima segurança e privacidade dos seus dados.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">O Premium é obrigatório?</h4>
              <p className="text-gray-400">Não! O Premium é totalmente opcional. Com R$ 10 você já tem acesso completo ao app. O Premium é só um bônus com recursos extras para quem quiser ainda mais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
