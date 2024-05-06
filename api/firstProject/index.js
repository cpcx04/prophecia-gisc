import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // Importa el módulo cors

import { pacientRouter } from "./pacient/router.js";

const app = express();

app.use(express.json());
app.use(cors()); 

app.use("/paciente", pacientRouter);

const mongoURI = "mongodb://localhost:27017/my_database";

app.listen(3100, () => {
  console.log('Servidor escuchando en el puerto 3100');
  mongoose.connect(mongoURI);
});
