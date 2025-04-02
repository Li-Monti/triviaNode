const dotenv = require("dotenv");

// Cargar variables de entorno
dotenv.config();

// Exportar las variables de entorno si es necesario
module.exports = {
    PORT: process.env.PORT || 5000,
    API_URL: process.env.API_URL || "https://opentdb.com/api.php",
};