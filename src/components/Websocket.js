import { useContext, useEffect } from "react";
import { WebsocketContext } from "../contexts/WebsocketContext";

export const Websocket = () => {
  const socket = useContext(WebsocketContext);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected!");
    });
    socket.on("onMessage", (data) => {
      console.log("onMessage event received!");
      console.log(data);
    });
    return () => {
      console.log("Unregistering");
      socket.off("connect");
      socket.off("onMessage");
    };
  }, []);

  return (
    <div>
      <div>
        <h1>Websocket Component</h1>
      </div>
    </div>
  );
};
