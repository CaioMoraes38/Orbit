# Usa uma imagem oficial e leve do Node.js
FROM node:22-alpine
# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (melhora o cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código do frontend
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# O PULO DO GATO: A flag "--host" é obrigatória no Docker!
# Ela diz ao Vite para aceitar conexões externas, não apenas do próprio container.
CMD ["npm", "run", "dev", "--", "--host"]