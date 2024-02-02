import { Server, Socket } from "socket.io";

const chatSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Manejar el evento "chatMessage" del cliente
    socket.on("chatMessage", (mensaje: string) => {
      console.log(`el Id ${socket.id}: mensaje:  ${mensaje}`);

      // Puedes hacer algo con el mensaje aquí, por ejemplo, enviarlo de vuelta al cliente
      // io.emit("chatMessage", `¡Servidor recibió tu mensaje: ${mensaje}`);

      // También puedes emitir el mensaje a todos los demás clientes excepto el que lo envió
      // socket.broadcast.emit("chatMessage", mensaje);
    });

    // Manejar la desconexión del cliente
    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
};

export default chatSocket;
