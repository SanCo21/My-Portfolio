"use client";

import { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 100); // Time between each character
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
