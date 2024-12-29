

const ScrollToTopButton = ({ isVisible, scrollToTop }) => {
    return (
      isVisible && (
        <button
          id="scrollToTopBtn"
          className="fixed bottom-28 right-3 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )
    );
  };
  
  export default ScrollToTopButton;
  