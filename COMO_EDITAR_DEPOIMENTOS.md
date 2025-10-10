# 📝 Como Personalizar os Depoimentos

## Arquivo: `src/components/Testimonials.tsx`

## 🎯 Como Editar

Abra o arquivo `src/components/Testimonials.tsx` e localize o array `testimonials`. Você verá algo assim:

```typescript
const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Praticante de Musculação',
    avatar: '💪',
    rating: 5,
    text: 'O TrainLog mudou completamente minha rotina na academia...'
  },
  // ... mais depoimentos
];
```

## 📋 Campos Disponíveis

### `name` (obrigatório)
- **Tipo:** String
- **Descrição:** Nome completo do usuário
- **Exemplo:** `'Maria Silva'`, `'João Pedro Santos'`

### `role` (obrigatório)
- **Tipo:** String
- **Descrição:** Profissão, cargo ou descrição do usuário
- **Exemplos:** 
  - `'Personal Trainer'`
  - `'Estudante de Educação Física'`
  - `'Crossfiteiro'`
  - `'Praticante de Musculação'`
  - `'Atleta Amador'`
  - `'Iniciante'`

### `avatar` (obrigatório)
- **Tipo:** Emoji (String)
- **Descrição:** Um emoji que representa o usuário
- **Emojis Sugeridos:**
  - 💪 - Força/Musculação
  - 🏋️‍♀️ / 🏋️‍♂️ - Levantamento de peso
  - 🎯 - Foco/Objetivos
  - 🌟 - Iniciante/Estrela
  - 🔥 - Motivação/Intenso
  - 💯 - Perfeito/100%
  - ⚡ - Energia/Rápido
  - 🏆 - Campeão/Vencedor
  - 👑 - Premium/VIP
  - 🚀 - Progresso rápido

### `rating` (obrigatório)
- **Tipo:** Número (1 a 5)
- **Descrição:** Quantas estrelas o usuário deu
- **Valores:** `1`, `2`, `3`, `4`, ou `5`
- **Recomendado:** Use sempre `5` para depoimentos positivos

### `text` (obrigatório)
- **Tipo:** String
- **Descrição:** O depoimento completo do usuário
- **Dica:** Mantenha entre 100-200 caracteres para melhor visualização
- **Exemplo:** 
  ```typescript
  text: 'Uso o TrainLog há 6 meses e meus resultados dobraram! A forma como acompanho meu progresso me mantém sempre motivado.'
  ```

## ✨ Exemplos Prontos

### Exemplo 1: Personal Trainer
```typescript
{
  name: 'Ricardo Mendes',
  role: 'Personal Trainer',
  avatar: '🏋️‍♂️',
  rating: 5,
  text: 'Indico o TrainLog para todos os meus alunos. É a ferramenta perfeita para acompanhar evolução e criar rotinas personalizadas.'
}
```

### Exemplo 2: Crossfiteiro
```typescript
{
  name: 'Juliana Oliveira',
  role: 'Crossfiteira',
  avatar: '🔥',
  rating: 5,
  text: 'Treino CrossFit 5x por semana e o TrainLog é essencial para registrar meus PRs e acompanhar minha evolução nos WODs!'
}
```

### Exemplo 3: Estudante
```typescript
{
  name: 'Pedro Costa',
  role: 'Estudante',
  avatar: '💯',
  rating: 5,
  text: 'Como estudante, o plano vitalício de R$ 10 foi perfeito! Agora posso acompanhar meus treinos sem gastar mensalidades.'
}
```

### Exemplo 4: Nutricionista
```typescript
{
  name: 'Dra. Camila Santos',
  role: 'Nutricionista Esportiva',
  avatar: '👑',
  rating: 5,
  text: 'Recomendo o TrainLog para meus pacientes. A integração entre treino e evolução corporal ajuda muito no acompanhamento nutricional.'
}
```

## 🎨 Como Adicionar Novos Depoimentos

1. Copie um depoimento existente
2. Cole após o último depoimento (antes do `]`)
3. Adicione uma vírgula após o depoimento anterior
4. Edite os campos com as informações reais

**Exemplo:**
```typescript
const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Praticante de Musculação',
    avatar: '💪',
    rating: 5,
    text: 'Primeiro depoimento...'
  }, // ← Vírgula aqui!
  {
    name: 'NOVO NOME',
    role: 'NOVA PROFISSÃO',
    avatar: '🚀',
    rating: 5,
    text: 'NOVO DEPOIMENTO...'
  } // ← Último não precisa de vírgula
];
```

## 🗑️ Como Remover Depoimentos

1. Localize o depoimento que quer remover
2. Delete todo o bloco `{ ... }`
3. Delete a vírgula antes ou depois (se houver)

## 💡 Dicas

- **Mantenha de 4 a 8 depoimentos** para melhor visualização
- **Use depoimentos reais** sempre que possível
- **Varie os emojis** para tornar visualmente interessante
- **Mantenha textos similares em tamanho** para consistência
- **Use sempre rating 5** para depoimentos públicos
- **Inclua diferentes perfis** (iniciante, avançado, personal, etc.)

## 🔄 Salvar e Visualizar

Depois de editar:
1. Salve o arquivo (`Ctrl + S`)
2. O navegador recarregará automaticamente
3. Role até a seção "O Que Nossos Usuários Dizem"
4. Verifique se tudo está correto

## ❓ Problemas Comuns

### Erro: "Unexpected token"
- **Causa:** Falta de vírgula entre depoimentos ou vírgula extra no último
- **Solução:** Verifique as vírgulas entre os blocos

### Depoimento não aparece
- **Causa:** Falta algum campo obrigatório
- **Solução:** Certifique-se que todos os campos (`name`, `role`, `avatar`, `rating`, `text`) estão preenchidos

### Texto cortado
- **Causa:** Texto muito longo
- **Solução:** Reduza o texto para ~150-200 caracteres

---

**Arquivo localizado em:** `src/components/Testimonials.tsx`
