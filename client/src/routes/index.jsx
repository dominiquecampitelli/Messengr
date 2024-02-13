import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

import Login from "../pages/Login";
import Chat from "../pages/Chat";

export default function AppRoutes() {
  const [socket, setSocket] = useState(null);

  return (
    <Routes>
      <Route
        index
        path="/login"
        element={<Login />}
        setSocket={setSocket}
      ></Route>
      <Route path="*" element={<p>Nada aqui!</p>} />
      <Route element={<PrivateRoutes />}>
        <Route exact path="/" element={<Chat />} socket={socket}></Route>
      </Route>
    </Routes>
  );
}
