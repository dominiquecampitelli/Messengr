import React from "react";
import { BrowserRouter } from "react-router-dom";
// import io from "socket.io-client";

import AppRoutes from "./routes";
import GlobalStyle from "./styles/global";

// const socket = io.connect("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
