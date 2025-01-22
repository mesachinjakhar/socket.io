import Connection from "./componenets/Connection";
import Broadcast from "./componenets/ChatDashboard";
import { Inbox } from "./componenets/Inbox";

function App() {
  return (
    <>
      <div className="fixed h-[100vh] w-[100%] py-2">
        <Connection />
        <Broadcast />
        <p className="px-8 mt-4 mb-3 text-2xl">📥 Inbox</p>
        <Inbox />
      </div>
    </>
  );
}

export default App;
