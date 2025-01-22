import Connection from "./componenets/Connection";
import Broadcast from "./componenets/ChatDashboard";
import { BroadcastInbox } from "./componenets/BroadcastInbox";

function App() {
  return (
    <>
      <div className="fixed h-[100vh] w-[100%] py-2">
        <Connection />
        <Broadcast />
        <div className="flex justify-between px-8 mt-4 mb-3 text-2xl">
          <p className="">📥 Broadcast Inbox</p>
          <p className="">📥 Private Inbox</p>
        </div>

        <BroadcastInbox />
      </div>
    </>
  );
}

export default App;
