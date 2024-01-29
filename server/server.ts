import dotenv from "dotenv";
import app from "./app";

// Configurando las variables de entorno desde el archivo .env
dotenv.config();

const PORT = process.env.PORT || 3000;

// Escuchando en el puerto y ejecutando la aplicación
app.listen(PORT, async () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
