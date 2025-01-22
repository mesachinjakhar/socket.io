import React, { useState, useEffect } from "react";
import socket from "../socket";

const PrivateInbox = () => {
  const [privateMessages, setPrivateMessages] = useState([]);

  // Add socket listener once when the component mounts
  useEffect(() => {
    const handlePrivateMessage = (msg) => {
      console.log("Private Message Received:", msg);
      // Add the new message to the state
      setPrivateMessages((prevMessages) => [
        ...prevMessages,
        {
          msgId: prevMessages.length + 1,
          from: msg.from,
          message: msg.message,
        },
      ]);
    };

    socket.on("private-message", handlePrivateMessage);

    // Clean up the listener when the component unmounts
    return () => {
      socket.off("private-message", handlePrivateMessage);
    };
  }, []);

  return (
    <div className="text-white h-[35vh] overflow-y-auto w-[500px]">
      {privateMessages.length === 0 ? "No private messages yet" : ""}
      {privateMessages.map((msg) => {
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
  );
};

export default PrivateInbox;
