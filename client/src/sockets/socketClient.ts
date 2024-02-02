// import { io } from "socket.io-client";

// // Conectarse al servidor Socket.IO
// const socket = io("http://localhost:5000");

// // Función para enviar mensajes al servidor
// function enviarMensajeAlServidor(message: string) {
//   socket.emit("chatMessage", message);
// }

// // Manejar mensajes del servidor
// socket.on("chatMessage", (mensaje: string) => {
//   console.log(`Mensaje recibido del servidor: ${mensaje}`);
//   console.log(`el id es :`, socket.id);
// });

// // Manejar eventos de desconexión
// socket.on("disconnect", () => {
//   console.log("Desconectado del servidor");
// });

// export { enviarMensajeAlServidor };
