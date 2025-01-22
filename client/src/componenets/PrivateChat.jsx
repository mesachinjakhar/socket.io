import React, { useState } from "react";

const PrivateChat = () => {
  const [privateMessage, setPrivateMessage] = useState("");
  const [address, setAddress] = useState("");

  // Message state handler
  function handlePrivateMessageChange(e) {
    setPrivateMessage(e.target.value);
  }

  // Address state handler
  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
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
          value={address}
          onChange={handleAddressChange}
          className="w-[100%] mt-2 p-2"
          placeholder="Enter address "
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
