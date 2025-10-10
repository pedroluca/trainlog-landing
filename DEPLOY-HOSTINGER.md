# 🚀 Guia de Deploy - Hostinger

Este guia explica como hospedar a landing page do TrainLog na Hostinger.

## 📋 Pré-requisitos

- Conta na Hostinger com acesso ao painel de controle
- Domínio configurado (ex: trainlog.com.br)
- Acesso FTP ou File Manager

## 🛠️ Passo a Passo

### 1. Build do Projeto

No terminal, execute:

```bash
# Certifique-se de estar na pasta do projeto
cd c:/Users/pedro/www/personal-projects/trainlog-landing

# Instale as dependências (se ainda não instalou)
pnpm install

# Faça o build de produção
pnpm run build
```

Isso vai gerar a pasta `dist/` com todos os arquivos otimizados.

### 2. Arquivos Gerados

Após o build, você terá:
- `dist/` - Pasta com todos os arquivos compilados
- `dist/index.html` - Arquivo principal
- `dist/assets/` - CSS, JS e imagens otimizados
- `dist/.htaccess` - Configurações do servidor (copiado de public/)

### 3. Upload para Hostinger

#### Opção A - File Manager (mais fácil)

1. Acesse o painel da Hostinger
2. Vá em **Arquivos** → **Gerenciador de Arquivos**
3. Navegue até `public_html/` (ou pasta do seu domínio)
4. **IMPORTANTE:** Limpe a pasta primeiro (delete arquivos antigos)
5. Faça upload de **TODO** o conteúdo da pasta `dist/`
6. Certifique-se de que `.htaccess` foi enviado

#### Opção B - FTP (FileZilla)

1. Configure o FTP no FileZilla:
   - Host: ftp.seudominio.com.br
   - Usuário: seu usuário FTP
   - Senha: sua senha FTP
   - Porta: 21

2. Conecte e navegue até `public_html/`

3. Faça upload de todo o conteúdo de `dist/` para `public_html/`

### 4. Estrutura Final no Servidor

```
public_html/
├── .htaccess              ← Arquivo de configuração
├── index.html             ← Página principal
├── favicon.ico
├── favicon.svg
├── apple-touch-icon.png
├── site.webmanifest
├── web-app-manifest-192x192.png
├── web-app-manifest-512x512.png
└── assets/
    ├── index-[hash].css   ← CSS compilado
    ├── index-[hash].js    ← JavaScript compilado
    └── full-logo-[hash].png
```

### 5. Verificações Importantes

Após o upload, verifique:

✅ **Teste o site:** Acesse seudominio.com.br
✅ **HTTPS:** Certifique-se de que está ativo na Hostinger
✅ **Imagens:** Verifique se o logo e ícones carregam
✅ **Links:** Teste todos os botões e modais
✅ **Mobile:** Teste em dispositivos móveis
✅ **Redirects:** Verifique se funciona sem trailing slash

### 6. Configurações Extras na Hostinger

#### A. Ativar HTTPS (SSL)

1. No painel Hostinger → **SSL**
2. Ative o certificado SSL gratuito
3. Force redirecionamento HTTP → HTTPS

#### B. Configurar Domínio

Se for usar um domínio customizado:
1. **DNS:** Aponte para os nameservers da Hostinger
2. **WWW:** Configure redirect de www para não-www (ou vice-versa)

#### C. Cache

A Hostinger geralmente tem cache ativo. Para limpar:
1. Painel → **Cache** → Limpar Cache
2. Útil após fazer atualizações

### 7. Atualizações Futuras

Quando quiser atualizar o site:

```bash
# 1. Faça as alterações no código
# 2. Execute o build novamente
pnpm run build

# 3. Delete os arquivos antigos no servidor
# 4. Faça upload dos novos arquivos de dist/
```

## 🔧 Solução de Problemas

### Página em branco ou erro 500

- Verifique se `.htaccess` foi enviado
- Veja se as permissões estão corretas (755 para pastas, 644 para arquivos)
- Verifique os logs de erro no painel da Hostinger

### Imagens não carregam

- Certifique-se de que a pasta `assets/` foi enviada
- Verifique se os nomes dos arquivos estão corretos (case-sensitive)

### Links quebrados

- Verifique o `.htaccess` - ele deve fazer rewrite corretamente
- Teste os links sem e com trailing slash

### CSS não aplicado

- Limpe o cache do navegador (Ctrl+Shift+R)
- Limpe o cache da Hostinger no painel
- Verifique se o arquivo CSS está na pasta assets/

## 📱 Teste Completo

Depois do deploy, teste:

- ✅ Página inicial carrega
- ✅ Scroll suave entre seções
- ✅ Modais abrem/fecham
- ✅ Botões direcionam para app.trainlog.site
- ✅ Links do WhatsApp funcionam
- ✅ Responsivo em mobile
- ✅ Ícones e logo aparecem
- ✅ HTTPS ativo (cadeado verde)

## 🎯 Checklist Final

- [ ] Build executado com sucesso
- [ ] Arquivos de `dist/` enviados
- [ ] `.htaccess` está no servidor
- [ ] SSL/HTTPS ativo
- [ ] Site acessível pelo domínio
- [ ] Todos os links funcionando
- [ ] Modais testados
- [ ] Mobile testado
- [ ] Cache limpo

## 📞 Suporte

Se tiver problemas:
1. Verifique os logs de erro na Hostinger
2. Teste localmente primeiro (pnpm run preview)
3. Entre em contato com suporte da Hostinger se necessário

---

**Dica:** Sempre teste o build localmente antes de fazer upload:

```bash
pnpm run build
pnpm run preview
# Acesse http://localhost:4173
```

Isso simula o ambiente de produção!
