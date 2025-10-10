import React from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-white">TrainLog</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('recursos')} className="text-gray-300 hover:text-primary transition">
              Recursos
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-300 hover:text-primary transition">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('premium')} className="text-gray-300 hover:text-primary transition">
              Premium
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-primary transition">
              Contato
            </button>
            <button
              onClick={onCtaClick}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Começar Agora
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('recursos')} className="text-gray-300 hover:text-primary transition text-left">
              Recursos
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-300 hover:text-primary transition text-left">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('premium')} className="text-gray-300 hover:text-primary transition text-left">
              Premium
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-primary transition text-left">
              Contato
            </button>
            <button
              onClick={onCtaClick}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition text-center"
            >
              Começar Agora
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
