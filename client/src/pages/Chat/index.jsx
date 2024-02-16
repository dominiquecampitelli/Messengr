import React, { useRef, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Users from "../../mock/users.json";

import Container from "../../components/Container";

import { Feed, UsersList, OneaOne, TextLine } from "./styles";

export default function Chat() {
  const messageRef = useRef();
  const bottomRef = useRef();
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  /* useEffect(() => {
    socketData.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });

    return () => socketData.off("receive_message");
  }, [socketData]); */

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  const handleSubmit = () => {
    clearInput();
    focusInput();
  };

  const clearInput = () => {
    messageRef.current.value = "";
  };

  const focusInput = () => {
    messageRef.current.focus();
  };

  const getEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Feed>
        <UsersList>Lista de contatos</UsersList>
        <OneaOne>
          <div ref={bottomRef} />
          <TextLine>
            <TextField
              color="secondary"
              label="Mensagem"
              variant="standard"
              size="normal"
              fullWidth
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onKeyDown={(e) => getEnterKey(e)}
            />
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => handleSubmit(setMessage(message))}
            >
              Enviar
            </Button>
          </TextLine>
        </OneaOne>
      </Feed>
    </Container>
  );
}
