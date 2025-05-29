import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export function useTypewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 1500,
}: UseTypewriterOptions) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');
  const [blink, setBlink] = useState(true);

  // Blink cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    
    return () => clearInterval(blinkInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (words.length === 0) return;
    
    const timeout = setTimeout(() => {
      if (!reverse && subIndex < words[index].length) {
        // Still typing current word
        setText((prev) => prev + words[index][subIndex]);
        setSubIndex((prev) => prev + 1);
      } else if (reverse && subIndex > 0) {
        // Deleting current word
        setText(words[index].substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);
      } else if (!reverse && subIndex === words[index].length) {
        // Finished typing current word, pause before deleting
        setTimeout(() => setReverse(true), delayBetweenWords);
      } else if (reverse && subIndex === 0) {
        // Finished deleting current word, move to next word
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, reverse ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [words, index, subIndex, reverse, typeSpeed, deleteSpeed, delayBetweenWords]);

  const cursor = blink ? '|' : '';
  
  const resetTypewriter = useCallback(() => {
    setText('');
    setIndex(0);
    setSubIndex(0);
    setReverse(false);
  }, []);

  return { text, cursor, resetTypewriter };
}