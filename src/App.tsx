import "./App.css";
// import NavBar from "./components/Layout/NavigationBar";
import Footer from "./components/Layout/Footer";
import LetterPullup from "./components/ui/letter-pullup";
import Overlay from "./components/Animations/StartupLayout";
// import Confetti from "./components/ui/confetti";
// import { VelocityScroll } from "./components/ui/scroll-based-velocity";
import Marquee from "./components/ui/marquee";
import { MarqueeDemo } from "./components/MagicUIBased/ImageMarquee";
import CountdownTimer from "./components/Particles/Counter";
function App() {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        {/* <NavBar></NavBar> */}
        <div className="body-container flex-1">
          <LetterPullup
            words="Days without 負けヒロインが多すぎる！anime"
            className="text-yellow-400"
            delay={0.1}
          ></LetterPullup>
          {/* <Marquee></Marquee> */}
          <CountdownTimer></CountdownTimer>
          <MarqueeDemo></MarqueeDemo>
          {/* <Confetti></Confetti> */}
        </div>

        {/* <VelocityScroll text="sme" default_velocity="2"></VelocityScroll> */}
        <Overlay></Overlay>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
