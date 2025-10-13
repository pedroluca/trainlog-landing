# 📱 Como Adicionar Screenshot Real do App no Hero

## 📸 Passo 1: Tirar o Screenshot

### Opção A: Screenshot do Celular (Recomendado)
1. Abra o app TrainLog no celular (app.trainlog.site)
2. Navegue para a tela que você quer mostrar (Dashboard, Treino Ativo, Gráficos, etc.)
3. Tire um screenshot:
   - **iPhone:** Pressione Volume Up + Botão Lateral
   - **Android:** Pressione Volume Down + Power
4. O screenshot será salvo na galeria

### Opção B: Screenshot do Navegador (Mobile Emulation)
1. Abra Chrome DevTools (F12)
2. Clique no ícone de celular (Toggle Device Toolbar)
3. Escolha: **iPhone 12 Pro** ou **Pixel 5**
4. Acesse app.trainlog.site
5. Clique nos 3 pontos → **Capture screenshot**

---

## 🎨 Passo 2: Editar o Screenshot (Opcional)

### Tamanho Recomendado:
- **Resolução:** 1080 x 2340px (proporção 9:19.5)
- **Formato:** PNG ou JPG/WebP
- **Peso:** < 500kb (otimize se necessário)

### Ferramentas Online (Grátis):
- **TinyPNG:** https://tinypng.com/ (compressão)
- **Squoosh:** https://squoosh.app/ (compressão + conversão WebP)
- **Remove.bg:** https://www.remove.bg/ (remover fundo, se quiser)

### Edições Recomendadas:
1. **Cortar:** Remova a barra de status (hora, bateria) se quiser
2. **Redimensionar:** 1080 x 2340px ou proporção similar
3. **Comprimir:** Reduza para < 500kb sem perder qualidade
4. **Converter:** WebP é menor que PNG/JPG

---

## 📂 Passo 3: Adicionar ao Projeto

### 3.1. Salvar o arquivo:
```
trainlog-landing/
└── public/
    ├── app-screenshot.png       ← Adicione aqui
    └── app-screenshot.webp      ← Ou aqui (recomendado)
```

### 3.2. Escolher qual tela mostrar:

**Dashboard (Recomendado):**
- Mostra visão geral
- Cards de treino ativo
- Gráfico de evolução
- Streak de dias

**Treino Ativo:**
- Lista de exercícios
- Sets e reps
- Timer
- Botão de check

**Gráficos:**
- Evolução de peso
- Progresso semanal
- Estatísticas

**Perfil:**
- Avatar
- Badge FREE ou PREMIUM
- Estatísticas gerais

---

## 🔧 Passo 4: Ativar no Código

Abra: `src/components/Hero.tsx`

Encontre este trecho (linha ~83):

```tsx
{/* OPTION 1: Use real screenshot (recommended) */}
{/* <img 
  src="/app-screenshot.png" 
  alt="TrainLog App Screenshot" 
  className="w-full h-full object-cover object-top"
  loading="eager"
/> */}
```

**Descomente** e ajuste o nome do arquivo:

```tsx
{/* OPTION 1: Use real screenshot (recommended) */}
<img 
  src="/app-screenshot.png"  // ou .jpg ou .webp
  alt="TrainLog App Screenshot" 
  className="w-full h-full object-cover object-top"
  loading="eager"
/>
```

Depois **comente** ou **delete** o OPTION 2 (mockup):

```tsx
{/* OPTION 2: Current mockup (remove when using real screenshot) */}
{/* <div className="absolute inset-0 bg-gradient-to-br...">
  ... todo o mockup ...
</div> */}
```

---

## 🎯 Passo 5: Ajustes Finos

### Se o screenshot não encaixa perfeitamente:

#### Screenshot muito largo:
```tsx
className="w-full h-full object-cover object-center"
                                         ↑ mude para center
```

#### Screenshot muito estreito:
```tsx
className="w-auto h-full object-cover object-top mx-auto"
          ↑ adicione w-auto e mx-auto
```

#### Mostrar parte específica:
```tsx
// Mostrar topo da tela
className="... object-top"

// Mostrar centro da tela
className="... object-center"

// Mostrar parte inferior
className="... object-bottom"
```

---

## 🚀 Passo 6: Testar

```bash
# 1. Salve o screenshot em public/
cp ~/Downloads/screenshot.png public/app-screenshot.png

# 2. Edite Hero.tsx e descomente a tag <img>

# 3. Teste localmente
pnpm run dev

# 4. Acesse http://localhost:5173
# 5. Veja o screenshot no mockup do celular
```

---

## 💡 Dicas de Qualidade

### ✅ BOM Screenshot:
- Interface limpa e organizada
- Bom exemplo de uso (treino em andamento, dados reais)
- Cores vibrantes que destacam
- Textos legíveis
- Mostra valor do app (gráficos, streak, etc.)

### ❌ EVITAR:
- Tela de erro ou carregamento
- Dados vazios (sem treinos registrados)
- Screenshot borrado ou pixelado
- Muito texto pequeno ilegível

---

## 🎨 Screenshot com Múltiplas Telas (Avançado)

Se quiser mostrar várias telas no hero:

### Opção 1: Carrossel (animado)
```tsx
const [currentScreen, setCurrentScreen] = useState(0)
const screens = [
  '/screenshot-dashboard.png',
  '/screenshot-workout.png', 
  '/screenshot-stats.png'
]

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentScreen((prev) => (prev + 1) % screens.length)
  }, 3000) // Muda a cada 3s
  return () => clearInterval(interval)
}, [])

// No JSX:
<img src={screens[currentScreen]} ... />
```

### Opção 2: Múltiplos Phones (lado a lado)
```tsx
<div className="flex gap-4">
  <div className="phone-mockup">
    <img src="/screenshot-1.png" ... />
  </div>
  <div className="phone-mockup">
    <img src="/screenshot-2.png" ... />
  </div>
</div>
```

---

## 🔍 Troubleshooting

### Screenshot não aparece:
1. ✅ Arquivo está em `public/` (não em `src/`)?
2. ✅ Nome do arquivo está correto no `src`?
3. ✅ Extensão correta (.png, .jpg, .webp)?
4. ✅ Descomentou a tag `<img>`?
5. ✅ Comentou/deletou o mockup antigo?

### Screenshot pixelado:
- Use resolução maior (1080px width mínimo)
- Salve em PNG (não JPG de baixa qualidade)
- Não aumente imagem pequena (sempre faça menor)

### Screenshot muito pesado (> 1MB):
- Comprima com TinyPNG ou Squoosh
- Converta para WebP
- Redimensione para 1080px width máximo

---

## 📊 Otimização de Performance

### Formato WebP (Recomendado):
```tsx
<picture>
  <source srcset="/app-screenshot.webp" type="image/webp" />
  <img src="/app-screenshot.png" alt="..." />
</picture>
```

### Lazy Loading (se não for hero):
```tsx
<img 
  src="/app-screenshot.png"
  loading="lazy"  // ← carrega sob demanda
  decoding="async"
/>
```

### Preload (se for hero):
```html
<!-- Em index.html, dentro de <head> -->
<link rel="preload" as="image" href="/app-screenshot.webp" />
```

---

## ✅ Checklist Final

- [ ] Screenshot tirado (1080x2340px recomendado)
- [ ] Imagem otimizada/comprimida (< 500kb)
- [ ] Arquivo salvo em `public/app-screenshot.png`
- [ ] Código atualizado em `Hero.tsx` (descomentado)
- [ ] Mockup antigo removido/comentado
- [ ] Testado localmente (pnpm run dev)
- [ ] Screenshot aparece no mockup do celular
- [ ] Build e upload para produção

---

## 🎉 Resultado Esperado

Antes: Mockup fake com cards genéricos
Depois: Screenshot REAL do seu app TrainLog

**Impacto:**
- ✅ Mais profissional e confiável
- ✅ Mostra o produto real (social proof)
- ✅ Visitante vê exatamente o que vai usar
- ✅ Aumenta taxa de conversão (~20-30%)

---

**Precisa de ajuda?** Me mande o screenshot que eu configuro pra você! 📸
