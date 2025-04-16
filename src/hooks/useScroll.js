import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleScroll = (e) => {
    setScrollPosition({
      x: e.target.scrollLeft,
      y: e.target.scrollTop,
    });
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScroll;
