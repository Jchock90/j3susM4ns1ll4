// src/components/Typewriter.js

import React, { useEffect, useState } from 'react';

const Typewriter = ({ words, loop = true, typingSpeed = 150, deletingSpeed = 100, delay = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(deletingSpeed);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(typingSpeed);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, words, speed, typingSpeed, deletingSpeed, delay]);

  return (
    <span>
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default Typewriter;
