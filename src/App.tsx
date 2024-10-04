import "./App.css";
import { NavBar } from "./components/Layout/NavigationBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
function App() {
  return (
    <>
      <div className="w-screen overflow-hidden">
        <Router>
          <div className="">
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/contact" element={<>smt</>} /> */}
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
