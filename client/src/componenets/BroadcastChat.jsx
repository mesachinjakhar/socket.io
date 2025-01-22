import React, { useState } from "react";
import socket from "../socket";

const BroadcastChat = () => {
  const [broadcastMessage, setBroadcastMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  function handleBroadcastMessageChange(e) {
    setBroadcastMessage(e.target.value);
    setIsSent(false);
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!broadcastMessage) {
      return setError("Enter message to broadcast");
    }
    socket.emit("broadcast", broadcastMessage);
    setIsSent(true);
  }

  return (
    <div className="w-[500px] border p-5 rounded">
      <form>
        <h1 className="text-lg mb-3">📢 Broadcast Message</h1>
        <label className="text-base ml-1" htmlFor="">
          Enter Message :
        </label>
        <input
          value={broadcastMessage}
          onChange={handleBroadcastMessageChange}
          className="w-[100%] mt-2 p-2 mb-2"
          placeholder="Hi Everyone"
          type="text"
        />

        <label className="text-base  ml-1" htmlFor="">
          To :
        </label>
        <input
          className="w-[100%] mt-2 p-2"
          placeholder="Everyone"
          type="text"
          disabled={true}
        />

        <p className="text-red-500 text-xs mt-2">{error && error}</p>

        <button
          type="submit"
          onClick={handleSubmit}
          className="p-2 w-[100%] mt-2 bg-blue-500"
        >
          {isSent === true ? "Sent" : "Broadcast"}
          {isSent === true ? <i class="bi bi-check2-all ml-1"></i> : ""}
        </button>
      </form>
    </div>
  );
};

export default BroadcastChat;
