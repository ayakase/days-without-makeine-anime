// import Footer from "../../components/Layout/Footer";
// import LetterPullup from "../../components/ui/letter-pullup";
import Overlay from "../../components/Animations/StartupOverlay";
// import { ImageMarquee } from "../../components/MagicUIBased/ImageMarquee";
import CountdownTimer from "../../components/Particles/Counter";
import { CoolMode } from "../../components/ui/cool-mode";
import { AnimatedSubscribeButton } from "../../components/ui/animated-subscribe-button";
// import GradualSpacing from "../../components/ui/gradual-spacing";
import HeroVideoDialog from "../../components/ui/hero-video-dialog";
// import HyperText from "../../components/ui/hyper-text";
import BoxReveal from "../../components/ui/box-reveal";
import "./index.css";
// import Comp from "../../components/Animations/PhysicTank";
export function Home() {
  return (
    <>
      <div className="background">
        <div className="h-screen w-screen grid place-items-center">
          <div>
            <div className="relative w-96">
              {/* <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/uytJ6_KTCZI?si=u-IYoXIfMwOm4QHB"
                thumbnailSrc="https://animetv-jp.net/wp-content/uploads/2024/08/GUEoK1naUAA0I2--e1722712211505-696x392.jpg"
                thumbnailAlt="Hero Video"
              /> */}
            </div>
            <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold">
                  Magic UI<span className="text-[#5046e6]">.</span>
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem]">
                  UI library for{" "}
                  <span className="text-[#5046e6]">Design Engineers</span>
                </h2>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-6">
                  <p>
                    -&gt; 20+ free and open-source animated components built
                    with
                    <span className="font-semibold text-[#5046e6]"> React</span>
                    ,
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      Typescript
                    </span>
                    ,
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      Tailwind CSS
                    </span>
                    , and
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      Framer Motion
                    </span>
                    . <br />
                    -&gt; 100% open-source, and customizable. <br />
                  </p>
                </div>
              </BoxReveal>

              {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
              </BoxReveal> */}
            </div>
            {/* <HyperText
              className="text-4xl font-bold text-[#FFF100] dark:text-white"
              text="Days without Too Many Losing Heroines! anime"
            /> */}
            {/* <LetterPullup
              words="Days without Too Many Losing Heroines! anime"
              className="text-yellow-400 !text-6xl mb-10"
              delay={0.05}
            ></LetterPullup> */}

            {/* <GradualSpacing
              className="font-display text-center text-4xl font-bold -tracking-widest  text-yellow-400  md:text-7xl my-5"
              text="Days without Too Many Losing Heroines! anime"
            ></GradualSpacing> */}
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
