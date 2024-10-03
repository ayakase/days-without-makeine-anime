import "./App.css";
import NavBar from "./components/Layout/NavigationBar";
import Footer from "./components/Layout/Footer";
import LetterPullup from "./components/ui/letter-pullup";
import Confetti from "./components/ui/confetti";
function App() {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <NavBar></NavBar>
        <div className="body-container flex-1">
          <LetterPullup
            words="Days without 負けヒロインが多すぎる！anime"
            className="text-yellow-400"
            delay={0.1}
          ></LetterPullup>
          {/* <Confetti></Confetti> */}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
