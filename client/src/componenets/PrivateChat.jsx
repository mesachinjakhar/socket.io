import React, { useState } from "react";
import socket from "../socket";

const PrivateChat = () => {
  const [privateMessage, setPrivateMessage] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  // Message state handler
  function handlePrivateMessageChange(e) {
    setPrivateMessage(e.target.value);
    setIsSent(false);
    setError("");
  }

  // Address state handler
  function handleRecipientChange(e) {
    setRecipientId(e.target.value);
    setIsSent(false);
    setError("");
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    if (!recipientId || !privateMessage) {
      return setError("Enter all the required field");
    }
    socket.emit("private", {
      message: privateMessage,
      recipientId: recipientId,
    });
    setIsSent(true);
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
          placeholder="Hi Bro"
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

        <p className="text-red-500 text-xs mt-2">{error && error}</p>

        <button
          type="submit"
          onClick={handleSubmit}
          className="p-2 w-[100%] mt-2 bg-blue-500"
        >
          {isSent === true ? "Sent" : "Send"}
          {isSent === true ? <i className="bi bi-check2-all ml-1"></i> : ""}
        </button>
      </form>
    </div>
  );
};

export default PrivateChat;
