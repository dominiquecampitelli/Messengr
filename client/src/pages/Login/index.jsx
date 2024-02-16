import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Account from "../../mock/account.json";

import Container from "../../components/Container";
import FormGrid from "../../components/FormGrid";
import Logo from "../../assets/cloud.png";

import { Headline, Title, Footerline } from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    Account.map((i) => {
      console.log(i);
      if (email === i.email && password === i.password) {
        navigate("/");
      } else {
        alert("Senha errada, tente novamente");
      }
    });
  };

  return (
    <Container>
      <FormGrid>
        <Headline>
          <Title>Messengr</Title>
          <img src={Logo} alt="Logo" />
        </Headline>
        <TextField
          type="text"
          color="secondary"
          label="E-mail"
          variant="standard"
          size="normal"
          style={{ width: "20%", marginBottom: "1rem" }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          type="password"
          color="secondary"
          label="Senha"
          variant="standard"
          size="normal"
          style={{ width: "20%", marginBottom: "3rem" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          style={{ width: "20%", marginBottom: "1rem" }}
          onClick={() => handleSubmit(email, password)}
        >
          Entrar
        </Button>
        <Link to={`/register`}>
          <Footerline>Criar uma conta</Footerline>
        </Link>
      </FormGrid>
    </Container>
  );
}
