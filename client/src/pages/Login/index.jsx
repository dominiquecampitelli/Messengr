import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Container from "../../components/Container";
import FormGrid from "../../components/FormGrid";
import Logo from "../../assets/cloud.png";

import { Headline, Title, Footerline } from "./styles";

export default function Login() {
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
        />
        <TextField
          type="text"
          color="secondary"
          label="Senha"
          variant="standard"
          size="normal"
          style={{ width: "20%", marginBottom: "3rem" }}
        />
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          style={{ width: "20%", marginBottom: "1rem" }}
          onClick={() => handleSubmit()}
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
