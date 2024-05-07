import mongoose from "mongoose";

export const productSchema  = mongoose.Schema({
    nombre : {
        type : String,
        required: true,
    },
    apellidos :({
        type : String,
        required: true
    }),
    nusha : ({
        type : String, 
        required: true,
        unique: true
    }),
    dni : ({
        type : String,
        required: true,
        unique: true
    }),
    fechaDenacimiento : ({
        type : String,
        required : false
    }),
    domicilio : ({
        type : String,
        required: false
    })
},
{
    timestamps: true
})