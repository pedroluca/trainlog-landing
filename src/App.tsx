import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, hasFirebaseConfig } from './firebase'
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Download,
  Dumbbell,
  Instagram,
  Menu,
  Quote,
  Rocket,
  Sparkles,
  Star,
  X,
  type LucideIcon,
} from 'lucide-react'
import LogoWhite from './assets/logo-fill.png'
import ScreenshotClear from './assets/progress-screen.png'
import ScreenshotMain from './assets/train-screen.png'

const navItems = [
  { label: 'Recursos', id: 'features' },
  { label: 'Como Funciona', id: 'como-funciona' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Preços', id: 'precos' },
]

const metrics = [
  { value: '40+', label: 'Usuários ativos' },
  { value: '1000+', label: 'Treinos registrados' },
  { value: '5.0', label: 'Nota média' },
  { value: '98%', label: 'Retenção mensal' },
]

type FeatureItem = {
  icon: LucideIcon
  title: string
  description: string
  tag: string
}



const features: FeatureItem[] = [
  {
    icon: Dumbbell,
    title: 'Registro inteligente',
    description: 'Anote séries, repetições e carga em poucos toques, sem perder o fluxo do treino.',
    tag: 'rápido',
  },
  {
    icon: BarChart3,
    title: 'Análise de progresso',
    description: 'Veja evolução de volume, frequência e PRs com uma leitura clara do que está funcionando.',
    tag: 'dados',
  },
  {
    icon: CalendarDays,
    title: 'Calendário de treino',
    description: 'Acompanhe presença, streaks e constância ao longo das semanas sem perder a visão geral.',
    tag: 'consistência',
  },
  {
    icon: Clock3,
    title: 'Ritmo entre séries',
    description: 'Mantenha o treino organizado com pausas, histórico e contexto em um único lugar.',
    tag: 'controle',
  },
  {
    icon: Rocket,
    title: 'Treinos prontos',
    description: 'Acelere a montagem de rotinas com estruturas conhecidas e ajustes rápidos para cada fase.',
    tag: 'praticidade',
  },
  {
    icon: Sparkles,
    title: 'Visual premium',
    description: 'O layout novo deixa a experiência mais marcante, com leitura forte e aparência mais moderna.',
    tag: 'design',
  },
]

const steps = [
  {
    number: '01',
    title: 'Abra e configure',
    description: 'Defina perfil, metas e rotina. A navegação já chega pronta para uso no primeiro acesso.',
  },
  {
    number: '02',
    title: 'Registre o treino',
    description: 'Escolha um treino, registre as séries e deixe o app cuidar da organização do histórico.',
  },
  {
    number: '03',
    title: 'Acompanhe a evolução',
    description: 'Use métricas, gráficos e calendário para enxergar progresso real de forma contínua.',
  },
]

const testimonials = [
  {
    name: 'Cinthia Alves',
    role: 'Enfermeira',
    text: 'O aplicativo é ótimo, fácil, prático e dinâmico.',
  },
  {
    name: 'Tharlis Fábio',
    role: 'Web Designer',
    text: 'Curti demais o app. Dá pra anotar os treinos rapidinho, salvar tudo e ainda usar o timer pra controlar os intervalos. Fica bem mais fácil manter a sequência e ver o que já foi feito. É simples de usar e funciona certinho, muito prático pra quem treina.',
  },
  {
    name: 'Lucas Oliveira',
    role: 'Powerlifter',
    text: 'Quando o app mostra PRs e volume de forma clara, a motivação sobe. O redesenho acertou exatamente esse ponto.',
  },
]

function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string
  title: string
  accent?: string
  description?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#27AE60]/90">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{' '}
        {accent ? (
          <span className="bg-gradient-to-r from-emerald-300 via-[#27AE60] to-lime-300 bg-clip-text text-transparent">
            {accent}
          </span>
        ) : null}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-white/62 sm:text-lg">
        {description}
      </p>
    </div>
  )
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistError, setWaitlistError] = useState('')
  const [waitlistSuccess, setWaitlistSuccess] = useState('')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#080808] text-white selection:bg-[#27AE60]/30 selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080808]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => scrollToSection('topo')}
            className="flex items-center gap-3 text-left"
          >
            <img src={LogoWhite} alt="TrainLog" className="h-12 md:h-14 w-12 md:w-14" />
            <div>
              <p className="text-lg font-bold tracking-tight text-white">TrainLog</p>
              <p className="text-xs text-white/50">Seu treino. Sua evolução.</p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/68 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contato')}
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#27AE60] px-5 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5"
            >
              Abrir app
              <ArrowRight className="h-4 w-4" />
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white md:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-white/10 bg-[#090909]/95 px-4 pb-5 pt-3 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-sm font-medium text-white/80"
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-white/35" />
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contato')}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#27AE60] px-4 py-4 text-sm font-semibold text-black"
              >
                Abrir app
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : null}
      </header>

      <main id="topo" className="relative pt-24 sm:pt-28">
        <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
          <div className="absolute left-1/2 top-10 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[#27AE60]/10 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />
          <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
            <div className="relative z-10 mx-auto max-w-3xl">
              <h1 className="text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-[5.5rem] lg:leading-[0.94]">
                Seu treino.{' '}
                <span className="bg-gradient-to-r from-emerald-300 via-[#27AE60] to-lime-300 bg-clip-text text-transparent">
                  Sua evolução.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/60 sm:text-xl">
                Registre cada série, acompanhe seus PRs e visualize seu progresso.
                O app que transforma dados em resultados reais na academia.
              </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <button
                    onClick={() => scrollToSection('contato')}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#27AE60] px-8 py-4 text-base font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#27AE60]/90"
                  >
                    <Download className="h-5 w-5" />
                    Baixar Grátis
                  </button>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
                  >
                    Ver Funcionalidades
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
            </div>

            <div className="relative z-10 mt-10 flex w-full items-end justify-center">
              <div className="hero-phone-second relative z-10 hidden translate-y-4 -rotate-6 drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] sm:block sm:-mr-6">
                <img
                  src={ScreenshotClear}
                  alt="Tela de progresso do TrainLog"
                  className="w-[240px] sm:w-[280px] lg:w-[300px]"
                  loading="eager"
                />
              </div>
              <div className="relative z-20 -translate-y-4 rotate-3 drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] sm:-ml-6">
                <img
                  src={ScreenshotMain}
                  alt="Tela de treino do TrainLog"
                  className="w-[240px] sm:w-[280px] lg:w-[300px]"
                  loading="eager"
                />
              </div>
            </div>

            {/* <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/55">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#27AE60]" />
                100% PWA
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Dados seguros
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Gratuito para começar
              </span>
            </div> */}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a0a0a] px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center justify-center px-5 py-5"
              >
                <p className="text-3xl font-black tracking-tight text-[#27AE60]">{metric.value}</p>
                <p className="mt-1 text-sm text-white/55">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="border-b border-white/10 bg-[#0a0a0a] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Recursos"
              title="Tudo que você precisa. Nada que"
              accent="não precisa"
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon

                return (
                  <article
                    key={feature.title}
                    className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-emerald-300 transition group-hover:bg-[#27AE60]/10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/58">{feature.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-b border-white/10 bg-[#0a0a0a] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Como funciona"
              title="Um fluxo simples para"
              accent="evoluir"
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="absolute right-5 top-5 text-5xl font-black tracking-tight text-white/5">
                    0{index + 1}
                  </div>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27AE60]/10 text-sm font-black text-emerald-300">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/58">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Depoimentos"
              title="Quem usa percebe a diferença"
              accent="logo no primeiro olhar"
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7"
                >
                  <Quote className="h-8 w-8 text-emerald-300/70" />
                  <div className="mt-5 flex gap-1 text-emerald-300">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-white/68">{testimonial.text}</p>
                  <div className="mt-7 border-t border-white/10 pt-5">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/50">{testimonial.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="precos" className="border-y border-white/10 bg-[#0a0a0a] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Planos"
              title="Pague uma vez."
              accent="Use para sempre."
              description="Comece grátis. Faça upgrade com pagamento único — sem assinatura."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {/* Free Card */}
              <article className="rounded-[1.5rem] border border-white/8 bg-[#0b0b0b] p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white/60">Free</p>
                  </div>
                </div>

                <div className="mt-6 flex items-end gap-4">
                  <div className="text-white">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">R$</span>
                      <span className="text-6xl font-black leading-none">0</span>
                      <span className="ml-2 text-sm text-white/50">/sempre</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/58">
                  Básico e funcional. Ideal para quem deseja apenas os recursos essenciais.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/68">
                  {[
                    'Acompanhamento de treinos',
                    'Treinos ilimitados',
                    'Visualização de progresso',
                    'Adicionar amigos',
                    'Conexão com treinadores',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0b0b0b] text-emerald-300">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://app.trainlog.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-transparent px-6 py-4 text-sm font-bold text-white transition hover:bg-white/3"
                >
                  Começar Grátis
                </a>
              </article>

              {/* Premium Card */}
              <article className="relative overflow-visible rounded-[1.5rem] border border-[#27AE60]/20 bg-[#07110b] p-8">
                <div className="absolute left-1/2 top-0 z-10 -translate-y-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#27AE60]/10 px-4 py-1 text-xs font-semibold text-[#27AE60]">
                    <span className="px-2 text-[12px] font-black text-black bg-[#27AE60] rounded-full">POPULAR</span>
                  </span>
                </div>

                <div className="relative">
                  <div className="inline-flex items-center gap-2">
                    <p className="text-xl font-bold text-white">Premium</p>
                  </div>

                  <div className="mt-6 flex items-end gap-4">
                    <div className="text-white">
                      <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-bold text-emerald-300">R$</span>
                        <span className="text-6xl font-black leading-none text-emerald-300">14,90</span>
                        <span className="ml-2 text-sm text-white/50">/vitalício</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
                    Ideal para quem deseja comodidades extras e apoiar o desenvolvimento do app — pagamento único sem assinatura.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-white/68">
                    {[
                      'Calendário de streaks',
                      'Análise completa de progresso',
                      'Histórico completo',
                      'Personalização do tema do app',
                      'Acompanhe os treinos de seus amigos',
                      'Futuras funcionalidades exclusivas',
                      'Pagamento único — sem assinatura',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#27AE60] text-black">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/5577936181281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#27AE60] px-6 py-4 text-sm font-bold text-black transition hover:brightness-95"
                  >
                    Comprar Premium
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contato" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="relative rounded-2xl border border-white/6 bg-white/[0.02] p-12">
              <div className="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-[#27AE60]/6 blur-3xl" />
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Pronto para transformar{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#27AE60] via-[#27AE60] to-[#27AE60]">
                    seus treinos?
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-white/60">
                  Disponível como Web App para iPhone e em acesso antecipado no Android.
                </p>

                <div className="mt-10 flex flex-col lg:flex-row items-stretch justify-center gap-8">
                  {/* Left: Abrir PWA */}
                  <a
                    href="https://app.trainlog.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:w-52 items-center justify-center rounded-2xl bg-white p-4 text-center shadow-sm"
                  >
                    <div>
                      <div className="text-xs text-[#27AE60]/80">iPhone — Web App</div>
                      <div className="mt-2 flex items-center justify-center gap-2 text-lg font-bold text-black">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        Abrir PWA
                      </div>
                    </div>
                  </a>

                  {/* Right: Waitlist form */}
                  <div className="w-full lg:w-[520px] rounded-2xl border border-[#27AE60]/20 bg-[#07110b] p-4">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.2L13.2 12 1 22.8V1.2z" fill="#4285F4"/>
                        <path d="M1 1.2l16 9.4-3.8 1.4L1 1.2z" fill="#34A853"/>
                        <path d="M1 22.8l12.2-11-3.8-1.4L1 22.8z" fill="#EA4335"/>
                        <path d="M17 10.6l4 2.4-4 2.4-3.8-2.4 3.8-2.4z" fill="#FBBC05"/>
                      </svg>
                      <div className="text-left pl-2">
                        <div className="mb-0 text-xs text-white/50">Android — Acesso Antecipado</div>
                        <div className="mb-2 font-semibold text-white">Entrar na lista de espera</div>
                      </div>
                    </div>
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault()
                        setWaitlistError('')
                        setWaitlistSuccess('')

                        const normalized = (waitlistEmail || '').trim().toLowerCase()
                        if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
                          setWaitlistError('Informe um email válido.')
                          return
                        }

                        if (!db || !hasFirebaseConfig) {
                          setWaitlistError('Integração indisponível no momento. Tente novamente mais tarde.')
                          return
                        }

                        try {
                          await addDoc(collection(db, 'google_play_waitlist'), {
                            email: normalized,
                            status: 'pending',
                            source: 'landing_google_play',
                            interestType: 'google_play_access',
                            followUpStatus: 'needs_admin_review',
                            locale: navigator.language || 'unknown',
                            userAgent: navigator.userAgent || 'unknown',
                            requestCount: 1,
                            createdAt: serverTimestamp(),
                            updatedAt: serverTimestamp(),
                          })

                          setWaitlistSuccess('Perfeito! Recebemos seu e-mail e iremos avisar quando abrir o acesso.')
                          setWaitlistEmail('')
                        } catch (err) {
                          console.error('Erro ao enviar waitlist:', err)
                          setWaitlistError('Não foi possível registrar agora. Tente novamente mais tarde.')
                        }
                      }}
                      className="mt-3 flex flex-col md:flex-row items-center gap-3"
                    >
                      <input
                        type="email"
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="flex-1 rounded-full border border-white/8 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
                      />
                      <button
                        type="submit"
                        className="rounded-full w-full md:w-auto bg-[#27AE60] px-5 py-3 text-sm font-semibold text-black"
                      >
                        Enviar
                      </button>
                    </form>
                    {waitlistError ? <p className="mt-3 text-sm text-red-400">{waitlistError}</p> : null}
                    {waitlistSuccess ? <p className="mt-3 text-sm text-emerald-300">{waitlistSuccess}</p> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#080808] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 grid-cols-2 lg:grid-cols-[1.2fr_repeat(3,minmax(140px,1fr))] lg:gap-16">
          <div className="col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <img src={LogoWhite} className="h-10 w-10 rounded-xl" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Train<span className="text-[#27AE60]">Log</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-7 text-white/50">
              O app de treino que acompanha sua evolução na academia.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold text-white">Produto</h4>
            <div className="flex flex-col gap-3 text-sm text-white/45">
              <button onClick={() => scrollToSection('features')} className="text-left transition hover:text-white">
                Recursos
              </button>
              <button onClick={() => scrollToSection('precos')} className="text-left transition hover:text-white">
                Preços
              </button>
            </div>
          </div>

          {/* <div>
            <h4 className="mb-5 text-sm font-bold text-white">Recursos</h4>
            <div className="flex flex-col gap-3 text-sm text-white/45">
              <button onClick={() => scrollToSection('topo')} className="text-left transition hover:text-white">
                Blog
              </button>
              <button onClick={() => scrollToSection('features')} className="text-left transition hover:text-white">
                Exercícios
              </button>
              <button onClick={() => scrollToSection('como-funciona')} className="text-left transition hover:text-white">
                Guias
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-left transition hover:text-white">
                API
              </button>
            </div>
          </div> */}

          <div>
            <h4 className="mb-5 text-sm font-bold text-white">Empresa</h4>
            <div className="flex flex-col gap-3 text-sm text-white/45">
              <button onClick={() => scrollToSection('topo')} className="text-left transition hover:text-white">
                Sobre
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-left transition hover:text-white">
                Contato
              </button>
              <button onClick={() => window.open('https://app.trainlog.site/privacy', '_blank')} className="text-left transition hover:text-white">
                Termos e Privacidade
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8">
          <div className="flex flex-col-reverse gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-white/42">© {currentYear} TrainLog. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4 text-white/45">
              <a
                href="https://www.instagram.com/trainlog.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
