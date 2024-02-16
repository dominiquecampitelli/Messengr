import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<p>Nada aqui!</p>} />
      <Route element={<PrivateRoutes />}>
        <Route exact path="/" element={<Chat />}></Route>
      </Route>
    </Routes>
  );
}
