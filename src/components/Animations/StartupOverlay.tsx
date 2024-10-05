import { useEffect, useState } from "react";

const Overlay = ({ name = "anna" }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);
  }, []);

  const getColors = () => {
    switch (name) {
      case "anna":
        return { bg1: "bg-blue-500", bg2: "bg-yellow-300" };
      case "komari":
        return { bg1: "bg-orange-500", bg2: "bg-red-500" };
      case "lemon":
        return { bg1: "bg-yellow-300", bg2: "bg-green-600" };
      default:
        return { bg1: "bg-blue-500", bg2: "bg-yellow-300" };
    }
  };

  const { bg1, bg2 } = getColors();

  return (
    <>
      <div
        className={`fixed top-0 h-1/4 inset-x-0 ${bg1} transition-transform duration-600 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed top-0 h-1/4 inset-x-0 ${bg2} transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed top-1/4 h-1/4 inset-x-0 ${bg1} transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed top-1/4 h-1/4 inset-x-0 ${bg2} transition-transform duration-400 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed top-2/4 h-1/4 inset-x-0 ${bg1} transition-transform duration-400 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed top-2/4 h-1/4 inset-x-0 ${bg2} transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed top-3/4 h-1/4 inset-x-0 ${bg1} transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed top-3/4 h-1/4 inset-x-0 ${bg2} transition-transform duration-200 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </>
  );
};

export default Overlay;
