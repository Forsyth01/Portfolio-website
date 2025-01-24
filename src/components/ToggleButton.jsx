import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { gsap } from 'gsap';

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply the dark or light theme when the component mounts
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Animate the button using GSAP
    gsap.fromTo(
      '.toggle-button',
      { scale: 0 },
      { scale: 1, duration: 0.3, ease: 'power3.out' }
    );
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="toggle-button p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
      onClick={handleToggle}
    >
      {darkMode ? (
        <FaMoon className="text-yellow-500" />
      ) : (
        <FaSun className="text-yellow-500" />
      )}
    </button>
  );
};

export default ToggleButton;
