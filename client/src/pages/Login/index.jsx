import React, { useRef } from "react";

// import { Container } from './styles';

export default function Login() {
  const usernameRef = useRef();

  return (
    <div>
      <h1>Vem papear você também</h1>
      <input type="text" ref={usernameRef} placeholder="Nome de usuário" />
      <button onClick={() => handleSubmit()}>Entrar</button>
    </div>
  );
}
