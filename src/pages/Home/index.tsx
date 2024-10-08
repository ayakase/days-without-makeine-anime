// import Footer from "../../components/Layout/Footer";
// import LetterPullup from "../../components/ui/letter-pullup";
import Overlay from "../../components/Animations/StartupOverlay";
// import { ImageMarquee } from "../../components/MagicUIBased/ImageMarquee";
import CountdownTimer from "../../components/Particles/Counter";
import { CoolMode } from "../../components/ui/cool-mode";
import { AnimatedSubscribeButton } from "../../components/ui/animated-subscribe-button";
import GradualSpacing from "../../components/ui/gradual-spacing";
import "./index.css";
// import Comp from "../../components/Animations/PhysicTank";
export function Home() {
  return (
    <>
      <div className="background">
        <div className="h-screen w-screen grid place-items-center">
          <div>
            {/* <LetterPullup
              words="Days without Too Many Losing Heroines! anime"
              className="text-yellow-400 !text-6xl mb-10"
              delay={0.05}
            ></LetterPullup> */}
            <GradualSpacing
              className="font-display text-center text-4xl font-bold -tracking-widest  text-yellow-400  md:text-7xl my-5"
              text="Days without Too Many Losing Heroines! anime"
            ></GradualSpacing>
            <CountdownTimer></CountdownTimer>
            <div className="w-full flex justify-center mt-2">
              <CoolMode
                options={{
                  // particle: "https://i.imgur.com/JiNL6Kd.png",
                  speedUp: 200,
                  // size: 50,
                  particleCount: 0,
                }}
              >
                <div>
                  <AnimatedSubscribeButton
                    buttonColor="#000000"
                    buttonTextColor="#ffffff"
                    subscribeStatus={false}
                    initialText={
                      <span className="group inline-flex items-center">
                        Another season{" "}
                      </span>
                    }
                    changeText={
                      <span className="group inline-flex items-center">
                        Ty{" "}
                      </span>
                    }
                  />
                </div>
              </CoolMode>
            </div>
          </div>
        </div>
        {/* <ImageMarquee></ImageMarquee> */}

        {/* <Comp></Comp> */}

        <Overlay name="anna"></Overlay>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}
