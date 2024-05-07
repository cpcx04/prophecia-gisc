# Usar una imagen base de Node.js
FROM node:latest

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el package.json e instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos del front-end
COPY . .

# Construir la aplicación de React
RUN npm run build

# Exponer el puerto en el que el front-end estará disponible
EXPOSE 3000

# Comando para iniciar el servidor de next.js
CMD ["npm", "start"]
