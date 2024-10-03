// Overlay.jsx
import { useEffect, useState } from "react";

const Overlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the overlay after 1 second
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-white text-xl">Welcome to the page!</div>
    </div>
  );
};

export default Overlay;
