import { useEffect, useState } from "react";

const ElapsedTime = () => {
  const targetDate = new Date("2024-09-30T00:00:00");
  const [elapsedTime, setElapsedTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateElapsedTime = () => {
      const now = new Date();
      const difference = now.getTime() - targetDate.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setElapsedTime({ days, hours, minutes, seconds });
      } else {
        setElapsedTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateElapsedTime();
    const interval = setInterval(calculateElapsedTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  const renderDigits = (number: number) => {
    return formatTime(number)
      .split("")
      .map((digit: string, index: number) => (
        <span
          key={index}
          className="h-full text-3xl sm:text-6xl lg:text-8xl w-10 h-12 sm:w-16 lg:w-24 grid place-items-center bg-[#FFF100] rounded-xl"
        >
          {digit}
        </span>
      ));
  };

  return (
    <div
      className="w-full flex justify-center"
      style={{ fontFamily: "Quantico", fontSize: "16px" }}
    >
      <div className="h-32 sm:h-40 lg:h-44 border-2 text-[#070A7D] rounded-xl overflow-hidden border-blue-800 flex flex-row items-center gap-1 sm:gap-2 p-2 py-6 px-4">
        <div className="flex flex-col items-center h-full relative">
          <span className="text-sm  font-bold absolute -bottom-0 px-1.5 -right-4 -rotate-45	bg-[#070A7D] text-white">
            Days
          </span>
          <div className="flex flex-row gap-1 sm:gap-2 h-full">
            {renderDigits(elapsedTime.days)}
          </div>
        </div>
        <span className="text-4xl sm:text-6xl lg:text-8xl">:</span>
        <div className="flex flex-col items-center h-full relative">
          <span className="text-sm  font-bold absolute -bottom-0 px-1.5 -right-4 -rotate-45	bg-[#070A7D] text-white">
            Hours
          </span>
          <div className="flex flex-row gap-1 sm:gap-2 h-full">
            {renderDigits(elapsedTime.hours)}
          </div>
          {/* <span className="text-sm  mt-2 font-bold">Hours</span> */}
        </div>
        <span className="text-4xl sm:text-6xl lg:text-8xl">:</span>
        <div className="flex flex-col items-center h-full relative">
          <span className="text-sm  font-bold absolute -bottom-0 px-1.5 -right-4 -rotate-45	bg-[#070A7D] text-white">
            Min
          </span>
          <div className="flex flex-row gap-1 sm:gap-2 h-full">
            {renderDigits(elapsedTime.minutes)}
          </div>
          {/* <span className="text-sm  mt-2 font-bold">Minutes</span> */}
        </div>
        <span className="text-4xl sm:text-6xl lg:text-8xl">:</span>
        <div className="flex flex-col items-center h-full relative">
          <span className="text-sm  font-bold absolute -bottom-0 px-1.5 -right-4 -rotate-45	bg-[#070A7D] text-white">
            Sec
          </span>
          <div className="flex flex-row gap-1 sm:gap-2 h-full">
            {renderDigits(elapsedTime.seconds)}
          </div>
          {/* <span className="text-sm  mt-2 font-bold">Seconds</span> */}
        </div>
      </div>
    </div>
  );
};

export default ElapsedTime;
