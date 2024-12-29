import { useEffect, useCallback } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

const ScrollHandler = ({ sectionsData, setActiveSection, setIsVisible, isVisible }) => {
  const handleScroll = useCallback(() => {
    const headerElement = document.querySelector("header");
    if (!headerElement) return;

    const headerHeight = headerElement?.offsetHeight || 0;
    const isSmallScreen = window.innerWidth <= 768;
    const offsetAdjustment = isSmallScreen ? headerHeight : 120;

    const offsets = Object.keys(sectionsData).map((key) => {
      const element = document.getElementById(sectionsData[key].id);
      if (element) {
        const offsetTop = element.offsetTop - offsetAdjustment;
        return { section: sectionsData[key].id, offset: offsetTop };
      }
      return { section: sectionsData[key].id, offset: 0 };
    });

    const bottomOfWindow = window.scrollY + window.innerHeight;
    const bottomOfDocument = document.documentElement.scrollHeight;

    let currentSection = "home";

    if (bottomOfWindow >= bottomOfDocument - 100) {
      currentSection = "contact";
    } else {
      currentSection = offsets.reduce((acc, curr) => {
        if (window.scrollY + 100 >= curr.offset) {
          return curr.section;
        }
        return acc;
      }, "home");
    }
    setActiveSection(currentSection);

    const rect = headerElement.getBoundingClientRect();
    const hasScrolledDown = window.scrollY > 200;
    const isHeaderVisible = rect?.top < window.innerHeight && rect?.bottom >= 0;
    setIsVisible(hasScrolledDown && isHeaderVisible);
  }, [sectionsData, setActiveSection, setIsVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <ScrollToTopButton isVisible={isVisible} scrollToTop={scrollToTop} />;
};

export default ScrollHandler;