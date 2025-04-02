const express = require("express");
const { getTriviaQuestions } = require("../controllers/triviaController");  // 🔹 Verifica que la ruta es correcta

const router = express.Router();
router.get("/", getTriviaQuestions);

module.exports = router;