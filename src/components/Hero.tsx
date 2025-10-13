import React from 'react'
import { Smartphone, CheckCircle } from 'lucide-react'
import AppScreenshot from '../assets/app-screenshot-clear.png'

interface HeroProps {
  onCtaClick: () => void
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforme Seus <span className="text-primary">Treinos</span> em Resultados
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              O app completo para rastrear sua evolução na academia, gerenciar treinos e alcançar seus objetivos fitness. Por apenas R$ 14,90!
            </p>

            {/* Key benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-200">Registre exercícios, séries e carga facilmente</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-200">Acompanhe seu progresso com gráficos detalhados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-200">Templates prontos (Push/Pull/Legs e mais)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-200">Funciona offline - sempre disponível</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onCtaClick}
                className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition text-lg shadow-lg shadow-primary/30"
              >
                Criar Conta - R$ 14,90
              </button>
              <button
                onClick={() => document.getElementById('premium')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass border border-gray-700 hover:border-primary text-white font-semibold px-8 py-4 rounded-xl transition text-lg"
              >
                Ver Planos e Preços
              </button>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                <span>100% PWA</span>
              </div>
              <div>•</div>
              <div>Funciona Offline</div>
              <div>•</div>
              <div>Dados Seguros</div>
            </div>
          </div>

          {/* Right content - Mock phone with REAL screenshot */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto w-[300px] h-[600px] bg-dark-card rounded-[3rem] border-8 border-gray-700 shadow-2xl overflow-hidden">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10"></div>
              
              {/* Real App Screenshot */}
              <div className="absolute inset-0 overflow-hidden">
                {/* 
                  TODO: Add your real TrainLog screenshot here
                  1. Take a screenshot from app.trainlog.site
                  2. Save as: public/app-screenshot.png or .jpg
                  3. Recommended size: 1080x2340px (9:19.5 ratio)
                  4. Uncomment the img tag below
                */}
                
                {/* OPTION 1: Use real screenshot (recommended) */}
                <img 
                  src={AppScreenshot} 
                  alt="TrainLog App Screenshot" 
                  className="w-full h-full object-fill object-top"
                  loading="eager"
                />
                
                {/* OPTION 2: Current mockup (remove when using real screenshot) */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-dark-bg to-dark-card p-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Hoje</h3>
                    <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm">
                      🔥 7 dias de treino consecutivos
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass rounded-2xl p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Treino Push</span>
                        <span className="text-primary text-sm">Em andamento</span>
                      </div>
                      <div className="text-gray-400 text-sm">5 exercícios • 45 min</div>
                    </div>

                    <div className="glass rounded-2xl p-4 border border-gray-700">
                      <div className="text-white font-semibold mb-2">Evolução Semanal</div>
                      <div className="flex items-end gap-2 h-20">
                        <div className="flex-1 bg-primary/30 rounded-t" style={{height: '40%'}}></div>
                        <div className="flex-1 bg-primary/30 rounded-t" style={{height: '60%'}}></div>
                        <div className="flex-1 bg-primary/30 rounded-t" style={{height: '80%'}}></div>
                        <div className="flex-1 bg-primary rounded-t" style={{height: '100%'}}></div>
                        <div className="flex-1 bg-primary/20 rounded-t" style={{height: '30%'}}></div>
                        <div className="flex-1 bg-primary/20 rounded-t" style={{height: '20%'}}></div>
                        <div className="flex-1 bg-primary/20 rounded-t" style={{height: '10%'}}></div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-white px-6 py-3 rounded-xl shadow-xl font-bold">
              R$ 14,90 vitalício
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
