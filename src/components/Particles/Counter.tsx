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
      .split("") // This is now valid since formatTime returns a string
      .map((digit: string, index: number) => (
        <span
          key={index}
          className="h-full text-8xl w-24 grid place-items-center bg-[#FFF100] rounded-xl"
        >
          {digit}
        </span>
      ));
  };

  return (
    <div
      className="w-full flex justify-center"
      style={{ fontFamily: "Quantico", fontSize: "24px" }}
    >
      <div className="h-44 border-2 text-[#070A7D] rounded-xl overflow-hidden border-blue-800 flex flex-row items-center gap-2 p-2">
        <div className="flex flex-col  items-center">
          <div className="flex flex-row gap-2">
            {renderDigits(elapsedTime.days)}
          </div>
          {/* <span className="font-bold">Days</span> */}
        </div>
        <span>:</span>
        <div className="flex flex-col  items-center">
          <div className="flex flex-row gap-2">
            {renderDigits(elapsedTime.hours)}
          </div>
          {/* <span className="font-bold">Hours</span> */}
        </div>
        <span>:</span>

        <div className="flex flex-col  items-center">
          <div className="flex flex-row gap-2">
            {renderDigits(elapsedTime.minutes)}
          </div>
          {/* <span className="font-bold">Minutes</span> */}
        </div>
        <span>:</span>
        <div className="flex flex-col  items-center">
          <div className="flex flex-row gap-2">
            {renderDigits(elapsedTime.seconds)}
          </div>
          {/* <span className="font-bold">Seconds</span> */}
        </div>
      </div>
    </div>
  );
};

export default ElapsedTime;
