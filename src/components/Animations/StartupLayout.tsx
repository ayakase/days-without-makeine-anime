// Layout.jsx
import { useEffect, useState } from "react";

const Overlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 0);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 bg-blue-500 transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed inset-0 bg-yellow-300 transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </>
  );
};

export default Overlay;
