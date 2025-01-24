import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // GSAP to make the cursor move smoothly
    gsap.to('.cursor', {
      x: cursorPosition.x - 10, // Offset to center the circle
      y: cursorPosition.y - 10, // Offset to center the circle
      duration: 0.1, // Duration for smooth animation
      ease: 'power3.out', // Smooth easing
    });
  }, [cursorPosition]);

  return <div className="cursor xl:flex hidden"></div>;
};

export default CustomCursor;
