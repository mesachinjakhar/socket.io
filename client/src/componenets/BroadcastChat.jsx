import React, { useState } from "react";
import socket from "../socket";

const BroadcastChat = () => {
  const [broadcastMessage, setBroadcastMessage] = useState("");

  function handleBroadcastMessageChange(e) {
    setBroadcastMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("broadcast", broadcastMessage);
  }

  return (
    <div className="w-[500px] border p-5 rounded">
      <form>
        <h1 className="text-lg mb-3">📢 Broadcast Message</h1>
        <label className="text-lg ml-1" htmlFor="">
          Enter Message :
        </label>
        <input
          value={broadcastMessage}
          onChange={handleBroadcastMessageChange}
          className="w-[100%] mt-2 p-2 mb-2"
          placeholder="Hi Everyone"
          type="text"
        />

        <label className="text-lg ml-1" htmlFor="">
          TO :
        </label>
        <input
          className="w-[100%] mt-2 p-2"
          placeholder="Everyone"
          type="text"
          disabled={true}
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="p-2 w-[100%] mt-2 bg-blue-500"
        >
          Broadcast
        </button>
      </form>
    </div>
  );
};

export default BroadcastChat;
