import { createServer } from "http";
import { Server } from "socket.io";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./src/routes/index";
import socketManager from "./src/sockets/index";
//App Varaibles
dotenv.config();

//intializing the express app
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

//using the dependancies
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.status(202).send("Hello World!");
});

// Inicializa tus sockets
socketManager(io);

// Manejador de errores
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

//exporting app
export default httpServer;
