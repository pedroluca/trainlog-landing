#!/bin/bash

# Script de build e preparação para deploy na Hostinger
# TrainLog Landing Page

echo "🚀 TrainLog - Build para Deploy"
echo "================================"
echo ""

# 1. Verificar Node.js
echo "📦 Verificando Node.js..."
node --version
echo ""

# 2. Instalar dependências
echo "📥 Instalando dependências..."
pnpm install
echo ""

# 3. Fazer build
echo "🔨 Fazendo build de produção..."
pnpm run build
echo ""

# 4. Copiar .htaccess para dist (garantir que está lá)
echo "📋 Copiando .htaccess..."
cp public/.htaccess dist/.htaccess
echo ""

# 5. Listar arquivos gerados
echo "✅ Build concluído! Arquivos em dist/:"
ls -lh dist/
echo ""

# 6. Mostrar tamanho total
echo "📊 Tamanho total do build:"
du -sh dist/
echo ""

# 7. Instruções finais
echo "================================"
echo "✨ Próximos passos:"
echo ""
echo "1. Acesse o File Manager da Hostinger"
echo "2. Navegue até public_html/"
echo "3. Delete os arquivos antigos (se houver)"
echo "4. Faça upload de TUDO da pasta dist/"
echo "5. Certifique-se que .htaccess foi enviado"
echo "6. Teste no navegador!"
echo ""
echo "📚 Guia completo: DEPLOY-HOSTINGER.md"
echo "================================"
