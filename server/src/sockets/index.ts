import { Server } from "socket.io";
import chatSocket from "./ChatSocket";

const socketManager = (io: Server) => {
  chatSocket(io);
};

export default socketManager;
