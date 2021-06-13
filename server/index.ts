import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const express = require("express");
const app = express();
const socketIo = require("socket.io");
const path = require("path");
require("dotenv").config();

/**
 * Connect to DB
 */
require("./database")();
import { saveMessage } from "./api/messages/messages";

const port = process.env.APP_PORT || 9000;

app.use("/api/", require("./api/paths"));

const server = app.listen(port, () => {
  console.log(`App running on ports ${port}`);
});

/**
 * Init web socket
 */
const io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap> =
  socketIo(server, {
    cors: { origin: "*", pingTimeout: 1000 },
  });

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message: string) => {
    console.log(message);
    saveMessage(message);
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});
