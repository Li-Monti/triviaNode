require("dotenv").config();
const express = require("express");
const cors = require("cors");
const triviaRoutes = require("./routes/triviaRoutes");

const app = express();
app.use(cors());  // Permitir solicitudes del frontend
app.use(express.json());

app.use("/api/trivia", triviaRoutes); // Ruta base para preguntas

const { PORT } = require("./config/dotenv.config");
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

