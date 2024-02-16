const app = require("express");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:5173" },
});

const port = process.env.PORT || 4000;

io.on("connection", (socket) => {
  console.log("conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Usuário desconectado!", socket.id);
  });

  socket.on("set_username", (username) => {
    socket.data.username = username;
    console.log("nome: ", socket.data.username);
  });

  socket.on("message", (text) => {
    io.emit("receive_message", {
      text,
      authorId: socket.id,
      author: socket.data.username,
    });
  });
});

server.listen(port, () => console.log(`Server running on port: ${port}`));
