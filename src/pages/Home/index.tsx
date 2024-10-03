import Footer from "../../components/Layout/Footer";
import LetterPullup from "../../components/ui/letter-pullup";
import Overlay from "../../components/Animations/StartupLayout";
import { ImageMarquee } from "../../components/MagicUIBased/ImageMarquee";
import CountdownTimer from "../../components/Particles/Counter";
import { CoolMode } from "../../components/ui/cool-mode";
export function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <div className="body-container flex-1">
          <LetterPullup
            words="Days without 負けヒロインが多すぎる！anime"
            className="text-yellow-400"
            delay={0.1}
          ></LetterPullup>
          <CoolMode
            options={{
              particle: "https://i.imgur.com/JiNL6Kd.png",
              speedUp: 1,
            }}
          >
            <button>click</button>
          </CoolMode>
          <CountdownTimer></CountdownTimer>
          <ImageMarquee></ImageMarquee>
        </div>

        <Overlay></Overlay>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}
