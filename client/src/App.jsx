import Connection from "./componenets/Connection";
import Broadcast from "./componenets/ChatDashboard";
import { Inbox } from "./componenets/Inbox";

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

        <Inbox />
      </div>
    </>
  );
}

export default App;
