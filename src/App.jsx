import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Pages from "./pages/Pages";

function App() {
  const [darkTheme, setDarkTheme] = useState()
  useEffect(()=> {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkTheme(true)
  }
  },[])
  return (
    <div className="app-wrapper flex h-svh bg-backColor">
      <Navbar/>
      <div className="app-content flex flex-col w-svw">
        <Topbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Pages/>
      </div>
    </div>
  );
}

export default App;
