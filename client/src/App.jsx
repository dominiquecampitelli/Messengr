import React from "react";
import { BrowserRouter } from "react-router-dom";
// import io from "socket.io-client";

import AppRoutes from "./routes";
import "./App.css";

// const socket = io.connect("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <AppRoutes socket={socket} />
    </BrowserRouter>
  );
}

export default App;
