import React, { useState, useEffect } from "react";
import socket from "../socket";
import PrivateInbox from "./PrivateInbox";

export const Inbox = () => {
  const [broadcastMessages, setBroadcastMessages] = useState([]);

  // Add socket listener once when the component mounts
  useEffect(() => {
    const handleBroadcastMessage = (msg) => {
      // Add the new message to the state
      setBroadcastMessages((prevMessages) => [
        ...prevMessages,
        {
          msgId: prevMessages.length + 1,
          from: msg.from,
          message: msg.message,
        },
      ]);
    };

    socket.on("broadcast-message", handleBroadcastMessage);

    // Clean up the listener when the component unmounts
    return () => {
      socket.off("broadcast-message", handleBroadcastMessage);
    };
  }, []);

  return (
    <div className="w-[100%] bg-neutral-600 text-black px-8 py-3 h-[40vh] flex justify-between">
      <div className="text-white h-[35vh] overflow-y-auto w-[500px]">
        {broadcastMessages.length === 0 ? "No broadcast messages yet" : ""}

        {broadcastMessages.map((msg) => {
          return (
            <div key={msg.msgId} className="flex gap-3 mb-3">
              <div>
                <i className="bi bi-person-circle text-2xl"></i>
              </div>
              <div>
                <p className="text-xs text-gray-300">From {msg.from} </p>
                <p className="text-sm mt-[1px]">{msg.message}</p>
              </div>
            </div>
          );
        })}
      </div>
      <PrivateInbox />
    </div>
  );
};
