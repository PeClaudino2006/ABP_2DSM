# Dockerfile para desenvolvimento
FROM node:22-alpine

# Criar diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências (incluindo devDependencies)
RUN npm install

# Copiar o código fonte
COPY . .

# Expor a porta
EXPOSE 3000

# Comando padrão para desenvolvimento
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "--ignore-watch", "node_modules", "--poll", "src/index.ts"]

