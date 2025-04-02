const axios = require("axios");

const getTriviaQuestions = async (req, res) => {
    try {
        const { amount = 5, category, difficulty } = req.query;
        let url = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;

        if (category) url += `&category=${category}`;
        if (difficulty) url += `&difficulty=${difficulty}`;

        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener preguntas" });
    }
};

module.exports = { getTriviaQuestions };
