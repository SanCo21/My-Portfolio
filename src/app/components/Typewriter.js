"use client";

import { useState, useEffect, useRef } from "react";

const Typewriter = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText]);

  return (
    <h2 className={className}>
      <span className="visually-hidden text-[0.001px] opacity-0">{text}</span>
      <br />
      <span ref={textRef} aria-hidden={displayedText === "" ? "true" : "false"}>
        {displayedText}
      </span>
    </h2>
  );
};

export default Typewriter;
