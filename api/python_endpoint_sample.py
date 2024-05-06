const express = require("express");
const { exec } = require("child_process");

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON

app.post("/calculate", (req, res) => {
  const inputData = req.body; // Asume que el cuerpo de la solicitud es un JSON válido
  const pythonScriptPath = "mock_data.py";
  const inputString = JSON.stringify(inputData);

  exec(
    `python ${pythonScriptPath} '${inputString}'`,
    (error, stdout, stderr) => {
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

      // Envía la salida del script Python como respuesta JSON
      try {
        const output = JSON.parse(stdout);
        res.status(200).json(output);
      } catch (parseError) {
        console.error("Error parsing Python output:", parseError);
        res.status(500).send("Error parsing Python output");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
