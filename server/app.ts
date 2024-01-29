import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
//App Varaibles
dotenv.config();

//intializing the express app
const app = express();

//using the dependancies
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(202).send("Hello World!");
});

// Manejador de errores
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

//exporting app
export default app;
