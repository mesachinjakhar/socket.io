import React, { useState, useEffect } from "react";
import socket from "../socket";

export const Inbox = () => {
  const [broadcastMessages, setBroadcastMessages] = useState([]);

  // Add socket listener once when the component mounts
  useEffect(() => {
    const handleBroadcastMessage = (msg) => {
      console.log("Message received is: ", msg);

      // Add the new message to the state
      setBroadcastMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, message: msg },
      ]);
    };

    socket.on("broadcast-message", handleBroadcastMessage);

    // Clean up the listener when the component unmounts
    return () => {
      socket.off("broadcast-message", handleBroadcastMessage);
    };
  }, []);

  return (
    <div className="w-[100%] bg-neutral-600 text-black px-8 py-3 h-[40vh]">
      <div className="text-white h-[35vh] overflow-y-auto w-[500px]">
        {broadcastMessages.map((msg) => {
          return (
            <div className="flex gap-3 mb-3">
              <div>
                <i className="bi bi-person-circle text-2xl"></i>
              </div>
              <div>
                <p className="text-xs text-gray-300">
                  From lawTrHmcMTTAXaGaAAHj{" "}
                </p>
                <p className="text-sm mt-[1px]">{msg.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
