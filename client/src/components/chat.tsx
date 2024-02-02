import { FormEvent, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Chat() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    socket.emit("chatMessage", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("chatMessage", (mensaje) => {
      console.log(`Mensaje recibido del servidor: ${mensaje}`);
      // Puedes hacer algo con el mensaje recibido en el cliente si es necesario
      console.log("el id es ", socket.id);
    });

    // // Limpia el event listener cuando el componente se desmonta
    // return () => {
    //   socket.off("chatMessage");
    // };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Chat desde</h2>
      <input
        type="text"
        placeholder="Chatea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
