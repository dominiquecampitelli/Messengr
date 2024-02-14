import React, { useRef } from "react";
import io from "socket.io-client";

// import { Container } from './styles';

export default function Register({ setSocket }) {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;

    if (!username.trim()) return;
    const socket = await io.connect("http://localhost:3001");
    socket.emit("set_username", username);
    setSocket(socket);
  };

  return (
    <div>
      <h1>Crie uma conta</h1>
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Senha" />
      <button onClick={() => handleSubmit()}>Criar</button>
    </div>
  );
}
