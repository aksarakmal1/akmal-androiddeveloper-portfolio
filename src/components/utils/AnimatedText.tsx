import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', once = true }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate-in');
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            element.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [once]);

  return (
    <div 
      ref={elementRef} 
      className={`animate-element ${className}`} 
      style={{ transitionDelay: '100ms' }}
    >
      {text}
    </div>
  );
};

export default AnimatedText;