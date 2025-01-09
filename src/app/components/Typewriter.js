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
    <h1 className={className}>
      <span className="visually-hidden text-[0.001px] opacity-0">{text}</span>
      <br />
      <span className="inline-block leading-tight"ref={textRef} aria-hidden={displayedText === "" ? "true" : "false"}>
        {displayedText}
      </span>
    </h1>
  );
};

export default Typewriter;
