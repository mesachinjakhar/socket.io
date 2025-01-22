import React, { useState } from "react";
import socket from "../socket";

const PrivateChat = () => {
  const [privateMessage, setPrivateMessage] = useState("");
  const [recipientId, setRecipientId] = useState("");

  // Message state handler
  function handlePrivateMessageChange(e) {
    setPrivateMessage(e.target.value);
  }

  // Address state handler
  function handleRecipientChange(e) {
    setRecipientId(e.target.value);
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("private", {
      message: privateMessage,
      recipientId: recipientId,
    });
  }

  return (
    <div className="w-[500px] border p-5 rounded">
      <form>
        <h1 className="text-lg mb-3">🔒 Chat Privately</h1>
        <label className="text-base ml-1" htmlFor="">
          Enter Message :
        </label>
        <input
          value={privateMessage}
          onChange={handlePrivateMessageChange}
          className="w-[100%] mt-2 p-2 mb-2"
          placeholder="Hi Everyone"
          type="text"
        />

        <label className="text-base ml-1" htmlFor="">
          To :
        </label>
        <input
          value={recipientId}
          onChange={handleRecipientChange}
          className="w-[100%] mt-2 p-2"
          placeholder="Enter recipient id "
          type="text"
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="p-2 w-[100%] mt-2 bg-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default PrivateChat;
