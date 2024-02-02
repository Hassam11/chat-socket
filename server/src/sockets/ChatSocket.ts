import { Server, Socket } from "socket.io";

const chatSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Enviar el ID del socket al cliente
    socket.emit("serverInfo", { serverSocketId: socket.id });

    // Manejar el evento "chatMessage" del cliente
    socket.on("chatMessage", (mensaje: string) => {
      console.log(`el Id ${socket.id}: mensaje: ${mensaje}`);
      io.emit("chatMessage", { senderId: socket.id, content: mensaje });
    });

    // Manejar la desconexión del cliente
    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
};

export default chatSocket;
