import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const TOTAL_USERS = 22 
  // - avatar: Emoji que representa o usuário (💪 🏋️‍♀️ 🎯 🌟 🔥 💯 ⚡ 🏆 etc)
  
  const testimonials = [
    {
      name: 'Cinthia Alves',
      role: 'Enfermeira',
      avatar: '💪',
      rating: 5,
      text: 'O sistema é ótimo, fácil, prático e dinâmico.'
    },
    {
      name: 'Tharlis Fábio',
      role: 'Web Designer',
      avatar: '🏋️‍♀️',
      rating: 5,
      text: 'Curti demais o sistema. Dá pra anotar os treinos rapidinho, salvar tudo e ainda usar o timer pra controlar os intervalos. Fica bem mais fácil manter a sequência e ver o que já foi feito. É simples de usar e funciona certinho, muito prático pra quem treina.'
    },
    // Adicione mais depoimentos copiando o formato acima:
    // {
    //   name: 'Seu Nome Aqui',
    //   role: 'Seu Papel',
    //   avatar: '🔥',
    //   rating: 5,
    //   text: 'Seu depoimento aqui...'
    // },
  ]

  return (
    <section className="py-20 px-4 bg-dark-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Nossos <span className="text-primary">Usuários Dizem</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Junte-se a centenas de atletas que já transformaram seus treinos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 border border-gray-800 hover:border-primary transition relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Avatar */}
              <div className="text-5xl mb-4">{testimonial.avatar}</div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-800">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof numbers */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full border border-gray-800">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm">💪</div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm">🏋️</div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm">⭐</div>
            </div>
            <span className="text-gray-300">
              <span className="font-bold text-white">{TOTAL_USERS}+</span> atletas já estão treinando melhor
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
