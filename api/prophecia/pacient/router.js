import express from 'express';
import { pacientModel } from './model.js';
import { exec } from 'child_process';

export const pacientRouter = express.Router();

pacientRouter.use(express.json());

pacientRouter.post("/", async (req, res) => {
    try {
        const createdProduct = await pacientModel.create(req.body);
        res.status(201).send(createdProduct);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
            return res.status(400).json({ message: "Paciente ya existente" });
        }
        console.log(error)
        return res.status(500).json({ message: "Error interno del servidor" });
    }
});

pacientRouter.post("/calculate/:nusha", (req, res) => {
    const inputData = req.body; 
    const pythonScriptPath = "pacient/mock_data.py";
    const inputString = JSON.stringify(inputData);
    console.log(req.params.nusha);
    exec(
        `python3 ${pythonScriptPath} '${inputString}'`,
        async (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                res.status(500).send("Error executing Python script");
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                res.status(500).send("Python script error");
                return;
            }
            try {
                const output = JSON.parse(stdout);
                const updatedProduct = await pacientModel.findOneAndUpdate(
                    { nusha: req.params.nusha },
                    { $push: { consultas: output } },
                    { new: true }
                );

                res.status(200).json(updatedProduct);
            } catch (parseError) {
                console.error("Error parsing Python output:", parseError);
                res.status(500).send("Error parsing Python output");
            }
        }
    );
});

pacientRouter.get("/", async (req, res) => {
    try {
        const products = await pacientModel.find({});
        res.status(200).send(products);
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
});

pacientRouter.patch("/:id", async (req, res) => {
    try {
        const updatedProduct = await pacientModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).send(updatedProduct);
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
});

pacientRouter.get("/:nusha", async (req, res) => {
    try {
        const product = await pacientModel.findOne({ nusha: req.params.nusha });
        if (product) {
            res.status(200).send(product);
        } else {
            res.status(404).json({ message: "Paciente no encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
});

pacientRouter.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await pacientModel.deleteOne({ _id: req.params.id });
        if (deletedProduct.deletedCount === 1) {
            res.status(200).send({ deleted: true });
        } else {
            res.status(404).json({ message: "Paciente no encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
});
