// Importa los módulos necesarios
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { pacientRouter } from "./pacient/router.js";
// Importa el esquema y el modelo del producto
import {pacientModel } from "./pacient/model.js";

// Crea una aplicación Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/paciente", pacientRouter);

// URI de MongoDB
const mongoURI = "mongodb://mongodb:27017/pacientes";

// Conéctate a MongoDB
mongoose.connect(mongoURI).then(async () => {
  console.log('Conexión a MongoDB establecida correctamente');

  // Genera datos de ejemplo y guárdalos en la base de datos
  await generateExampleData();
  
  // Inicia el servidor
  app.listen(3001, () => {
    console.log('Servidor escuchando en el puerto 3001');
  });
}).catch(err => {
  console.error('Error al conectar a MongoDB:', err);
});

// Función para generar datos de ejemplo y guardarlos en la base de datos
async function generateExampleData() {
  try {
    // Verifica si ya hay datos en la base de datos
    const count = await pacientModel.countDocuments();
    if (count > 0) {
      console.log('Ya hay datos en la base de datos. No se generaron datos de ejemplo.');
      return;
    }
    const exampleData = [
      {
        nombre: 'Juan',
        apellidos: 'Pérez',
        nusha: 'AN-886575',
        dni: '12345678A',
        fechaDenacimiento: '1990-01-01',
        domicilio: 'Calle Falsa 123',
      },
      {
        nombre: 'María',
        apellidos: 'González',
        nusha: 'AN-886576',
        dni: '87654321B',
        fechaDenacimiento: '1985-05-05',
        domicilio: 'Avenida Principal 456'
      },
      {
          nombre: 'Carlos',
          apellidos: 'Martínez',
          nusha: 'AN-886577',
          dni: '13579246C',
          fechaDenacimiento: '1988-07-12',
          domicilio: 'Calle del Sol 789'
        },
        {
          nombre: 'Ana',
          apellidos: 'López',
          nusha: 'AN-886579',
          dni: '98765432D',
          fechaDenacimiento: '1995-03-20',
          domicilio: 'Avenida Libertad 321'
        },
        {
          nombre: 'Pedro',
          apellidos: 'Sánchez',
          nusha: 'AN-886578',
          dni: '11111111E',
          fechaDenacimiento: '1982-11-30',
          domicilio: 'Calle Mayor 555'
        },
        {
          nombre: 'Laura',
          apellidos: 'Hernández',
          nusha: 'AN-886522',
          dni: '22222222F',
          fechaDenacimiento: '1993-09-15',
          domicilio: 'Calle Estrella 777'
        },
        {
          nombre: 'David',
          apellidos: 'Gómez',
          nusha: 'AN-886533',
          dni: '33333333G',
          fechaDenacimiento: '1980-04-02',
          domicilio: 'Avenida del Parque 654'
        },
        {
          nombre: 'Sara',
          apellidos: 'Martínez',
          nusha: 'AN-886544',
          dni: '44444444H',
          fechaDenacimiento: '1997-12-25',
          domicilio: 'Calle de la Luna 234'
        },
        {
          nombre: 'Javier',
          apellidos: 'Fernández',
          nusha: 'AN-886555',
          dni: '55555555I',
          fechaDenacimiento: '1987-06-08',
          domicilio: 'Avenida Central 789'
        },
        {
          nombre: 'Elena',
          apellidos: 'Rodríguez',
          nusha: 'AN-886566',
          dni: '66666666J',
          fechaDenacimiento: '1990-10-18',
          domicilio: 'Calle del Monte 432'
        }
    ];
  
    await pacientModel.insertMany(exampleData);
    console.log('Datos de ejemplo insertados correctamente.');
  } catch (error) {
    console.error('Error al generar datos de ejemplo:', error);
  }
}
