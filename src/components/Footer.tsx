import React from 'react';
import { Dumbbell, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-white">TrainLog</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforme seus treinos em resultados. O app completo para rastrear sua evolução na academia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-dark-card hover:bg-dark-lighter p-2 rounded-lg transition text-gray-400 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-dark-card hover:bg-dark-lighter p-2 rounded-lg transition text-gray-400 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-dark-card hover:bg-dark-lighter p-2 rounded-lg transition text-gray-400 hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition"
                >
                  Recursos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('premium')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition"
                >
                  Premium
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} TrainLog. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm">
            Feito com ❤️ para atletas brasileiros
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
