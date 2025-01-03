import "@fortawesome/fontawesome-free/css/all.min.css"; 

const ScrollToTopButton = ({ isVisible, scrollToTop }) => {
  return (
    isVisible && (
      <button
        id="scrollToTopBtn"
        aria-label="Revenir en haut"
        className="fixed bottom-28 right-3 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent"
        onClick={scrollToTop}
      >
        <i className="fas fa-chevron-up" />
      </button>
    )
  );
};

export default ScrollToTopButton;
