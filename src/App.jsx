import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Main from "./pages/Main";

function App() {
  return (
    <div className="app-wrapper flex h-svh bg-[#141a27]">
      <Navbar />
      <div className="app-content flex flex-col w-svw">
        <Topbar />
        <Main/>
      </div>
    </div>
  );
}

export default App;
