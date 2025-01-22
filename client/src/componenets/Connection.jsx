import React, { useEffect, useState } from "react";
import socket from "../socket";

const Connection = () => {
  const [connectionStatus, setConnectionStatus] = useState("Disconnected ❌");
  const [connectionId, setConnectionId] = useState("");
  const [activeUsers, setActiveUsers] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      setConnectionId(socket.id);
      setConnectionStatus("Connected ✅");
    });
  }, []);

  socket.on("active-users", (totalActiveUsers) => {
    console.log("total active users recieved: ", totalActiveUsers);
    setActiveUsers(totalActiveUsers);
  });

  return (
    <div className="flex justify-between w-[100%] px-5 py-1">
      <div className="flex gap-5">
        <h4 className="text-xs">Status: {connectionStatus}</h4>
        <p className="text-xs">Connection ID: {connectionId}</p>
      </div>
      <div>
        <p className="text-xs">{activeUsers} Connected Users</p>
      </div>
    </div>
  );
};

export default Connection;
