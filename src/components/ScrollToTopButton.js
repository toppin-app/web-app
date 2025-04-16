import { Box, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(document.body.scrollTop > 300);
    };

    const options = { passive: true };
    document.body.addEventListener("scroll", toggleVisibility, options);

    return () =>
      document.body.removeEventListener("scroll", toggleVisibility, options);
  }, []);

  const scrollToTop = () => {
    const topElement = document.getElementById("top");
    topElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      position="fixed"
      bottom="4"
      right="4"
      zIndex={2}
      opacity={isVisible ? 1 : 0}
      visibility={isVisible ? "visible" : "hidden"}
      transition="opacity 0.3s, visibility 0.3s"
    >
      <IconButton
        onClick={scrollToTop}
        icon={<ChevronUpIcon />}
        colorScheme="gray"
        size="lg"
        aria-label="Scroll to top"
      />
    </Box>
  );
};

export default ScrollToTopButton;
