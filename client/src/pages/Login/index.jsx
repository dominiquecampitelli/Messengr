import React, { useRef } from "react";
import io from "socket.io-client";

// import { Container } from './styles';

export default function Login({ setSocket }) {
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
      <h1>Vem papear você também</h1>
      <input type="text" ref={usernameRef} placeholder="Nome de usuário" />
      <button onClick={() => handleSubmit()}>Entrar</button>
    </div>
  );
}
