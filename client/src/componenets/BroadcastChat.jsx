import React from "react";

const BroadcastChat = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="w-[500px] border p-5 rounded">
      <form>
        <h1 className="text-lg mb-3">📢 Broadcast Message</h1>
        <label className="text-lg ml-1" htmlFor="">
          Enter Message :
        </label>
        <input
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
          disabled="true"
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="p-2 w-[100%] mt-2 bg-blue-500"
        >
          Broadcast your message
        </button>
      </form>
    </div>
  );
};

export default BroadcastChat;
