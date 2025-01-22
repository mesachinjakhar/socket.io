import React from "react";
import BroadcastChat from "./BroadcastChat";
import PrivateChat from "./PrivateChat";

const ChatDashboard = () => {
  return (
    <div className="flex justify-between items-center mt-4 px-8">
      <BroadcastChat />
      <p className="text-2xl">-- OR --</p>
      <PrivateChat></PrivateChat>
    </div>
  );
};

export default ChatDashboard;
