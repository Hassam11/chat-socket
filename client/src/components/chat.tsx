import { FormEvent, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:5000");

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [chatInfo, setChatInfo] = useState<
    { senderId: string; content: string }[]
  >([]);
  const [serverSocketId, setServerSocketId] = useState<string | null>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("chatMessage", message);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("serverInfo", (serverInfo: { serverSocketId: string }) => {
      setServerSocketId(serverInfo.serverSocketId);
    });

    const handleChatMessage = (messageInfo: {
      senderId: string;
      content: string;
    }): void => {
      console.log(
        `Mensaje recibido del ${messageInfo.senderId}: ${messageInfo.content}`
      );
      setChatInfo((prevChatInfo) => [...prevChatInfo, messageInfo]);
    };

    socket.on("chatMessage", handleChatMessage);

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      socket.off("serverInfo");
      socket.off("chatMessage", handleChatMessage);
    };
  }, []);

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Chat desde</h2>
      {serverSocketId && <p>Conectado al servidor con ID: {serverSocketId}</p>}
      <input
        type="text"
        placeholder="Chatea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Enviar</button>

      <div>
        <h3>Historial de Chat</h3>
        <ul>
          {chatInfo.map((msg, index) => (
            <li key={index}>
              <strong>
                {msg.senderId === serverSocketId ? "Servidor" : msg.senderId}:
              </strong>{" "}
              {msg.content}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Chat;
