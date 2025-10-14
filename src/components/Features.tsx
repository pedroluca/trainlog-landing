import React from 'react';
import { 
  Activity, 
  TrendingUp, 
  Calendar, 
  BookOpen, 
  Award, 
  BarChart3,
  Cloud
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Registro de Treinos',
      description: 'Anote exercícios, séries, repetições e carga de forma rápida e intuitiva durante o treino.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Acompanhamento de Progresso',
      description: 'Visualize sua evolução com gráficos detalhados de peso, medidas corporais e desempenho.'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Biblioteca de Exercícios',
      description: 'Acesso a centenas de exercícios organizados por grupo muscular com busca e filtros.'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Templates Prontos',
      description: 'Use modelos pré-definidos como Push/Pull/Legs, Upper/Lower ou crie seus próprios treinos.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Sistema de Streaks',
      description: 'Mantenha sua motivação alta com acompanhamento de dias consecutivos de treino.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Métricas Corporais',
      description: 'Registre peso, percentual de gordura e medidas do corpo ao longo do tempo.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Sincronização na Nuvem',
      description: 'Seus dados sempre seguros e acessíveis de qualquer dispositivo.'
    },
  ];

  return (
    <section id="recursos" className="py-20 px-4 bg-dark-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recursos Completos para <span className="text-primary">Seu Treino</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tudo que você precisa para transformar sua rotina de treinos e alcançar resultados reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 border border-gray-800 hover:border-primary transition group cursor-pointer"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
