import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

import Login from "../pages/Login";
import Chat from "../pages/Chat";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/login" element={<Login />}></Route>
      <Route path="*" element={<p>Nada aqui!</p>} />
      <Route element={<PrivateRoutes />}>
        <Route exact path="/" element={<Chat />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
