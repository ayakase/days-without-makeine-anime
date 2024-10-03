import { useEffect, useState } from "react";

const ElapsedTime = () => {
  const targetDate = new Date("2024-09-30T00:00:00"); // Set the target date
  const [elapsedTime, setElapsedTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateElapsedTime = () => {
      const now = new Date();
      const difference = now.getTime() - targetDate.getTime(); // Calculate elapsed time in milliseconds

      // Check if the target date is in the past
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
        setElapsedTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // If target date is in the future
      }
    };

    // Call calculateElapsedTime initially and then set an interval
    calculateElapsedTime();
    const interval = setInterval(calculateElapsedTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <h1>Elapsed Time since {targetDate.toLocaleString()}</h1>
      <div>
        {elapsedTime.days} Days, {elapsedTime.hours} Hours,{" "}
        {elapsedTime.minutes} Minutes, {elapsedTime.seconds} Seconds
      </div>
    </div>
  );
};

export default ElapsedTime;
