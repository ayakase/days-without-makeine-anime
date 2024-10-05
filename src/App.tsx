import "./App.css";
import { NavBar } from "./components/Layout/NavigationBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Game } from "./pages/Game";
function App() {
  return (
    <>
      <div className="w-screen overflow-hidden">
        <Router>
          <div className="">
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
