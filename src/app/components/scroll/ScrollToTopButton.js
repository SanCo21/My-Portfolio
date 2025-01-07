import { useEffect, useState } from "react";

// const ScrollToTopButton = ({ isVisible, scrollToTop }) => {
//   return (
//     isVisible && (
//       <button
//         id="scrollToTopBtn"
//         aria-label="Revenir en haut"
//         className="fixed bottom-28 right-3 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent"
//         onClick={scrollToTop}
//       >
//         <i className="fas fa-chevron-up" />
//       </button>
//     )
//   );
// };

// export default ScrollToTopButton;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      id="scrollToTopBtn"
      aria-label="Revenir en haut"
      className="fixed bottom-28 right-3 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-opacity duration-300" // Added transition
      onClick={scrollToTop}
      style={{ opacity: isVisible ? 1 : 0 }} // Added opacity transition
    >
      <i className="fas fa-chevron-up" />
    </button>
  );
};

export default ScrollToTopButton;
