import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // Importa el módulo cors

import { pacientRouter } from "./pacient/router.js";

const app = express();

app.use(express.json());
app.use(cors()); 

app.use("/paciente", pacientRouter);

const mongoURI = "mongodb://mongodb:27017/pacientes";

mongoose.connect(mongoURI).then(() => {
  console.log('Conexión a MongoDB establecida correctamente');
  app.listen(3001, () => {
    console.log('Servidor escuchando en el puerto 3001');
  });
}).catch(err => {
  console.error('Error al conectar a MongoDB:', err);
});
