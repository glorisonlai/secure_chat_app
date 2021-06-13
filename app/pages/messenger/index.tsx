import { useState, useEffect } from "react";
import secureRouting from "../../common/secureRouting";
import { io } from "socket.io-client";

const Messenger = () => {
  const socket = io("ws://192.168.0.12:9000");
  useEffect(() => {
    socket.on("message", (text) => {
      const el = document.createElement("li");
      el.innerHTML = text;
      document.querySelector("ul").appendChild(el);
    });
  }, []);

  const sendMsg = () => {
    const text = document.querySelector("input").value;
    socket.emit("message", text);
  };

  return (
    <div>
      <ul></ul>
      <input placeholder="Send message"></input>
      <button onClick={() => sendMsg()}>Send</button>
    </div>
  );
};

export default Messenger;
