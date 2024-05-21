import mongoose from "mongoose";

const consultaSchema = mongoose.Schema({
    calculation_result: {
        type: Number,
        required: false,
    },
    selected_recommendations: [
        {
            id: {
                type: Number,
                required: false,
            },
            recomendacion: {
                type: String,
                required: false,
            }
        }
    ],
    timestamp: {
        type: Date,
        default: Date.now,
    }
}, { _id: false });

export const productSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    nusha: {
        type: String,
        required: true,
        unique: true,
    },
    dni: {
        type: String,
        required: true,
        unique: true,
    },
    fechaDenacimiento: {
        type: String,
        required: false,
    },
    domicilio: {
        type: String,
        required: false,
    },
    consultas: [consultaSchema]
}, {
    timestamps: true
});

