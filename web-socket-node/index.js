import { WebSocketServer } from 'ws';

const port = 8080,
  wss = new WebSocketServer({ port }),
  conMessages = {
    connection: "Connection established...",
    close: "connection closed..."
  }

wss.on("listening", () => {
  console.log(`listening in port ${port}`)
})


wss.on('connection', (socket) => {
  socket.send(conMessages.connection)
  console.log(conMessages.connection)

  socket.send("Send your GitHub profile")
  socket.on('message', (data) => {
    socket.send(`Check it out: [ https://github.com/${data} ]`);
  });

  socket.on("close", () => {
    socket.send(conMessages.close)
    console.log(conMessages.close)
  })
});
