import { FormEvent, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import TerminalViews from "./terminal-view";

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
    <div className="flex flex-col h-full justify-between">
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
      <div>
        <form onSubmit={handleFormSubmit}>
          {/* <h2>Chat desde</h2>
        {serverSocketId && (
          <p>Conectado al servidor con ID: {serverSocketId}</p>
        )} */}
          <div className="flex items-center pb-2">
            <span className="text-green-400">$</span>
            <input
              type="text"
              className="flex-1 bg-transparent border-none focus:outline-none text-gray-400 ml-2"
              placeholder="Escribe algo"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* <button type="submit">Enviar</button> */}
        </form>

        <TerminalViews />
      </div>
    </div>
  );
};

export default Chat;
