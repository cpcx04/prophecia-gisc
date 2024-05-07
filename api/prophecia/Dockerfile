# Usar una imagen base de Node.js
FROM node:latest

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el package.json e instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos de la API
COPY . .

# Exponer el puerto en el que la API va a estar escuchando
EXPOSE 3001

# Comando para iniciar la API
CMD ["node", "index.js"]
