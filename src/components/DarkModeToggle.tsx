/**
 * Dark Mode Toggle - Chuyển đổi chế độ sáng/tối
 */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setIsDark(saved === 'true');
      if (saved === 'true') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!isDark).toString());
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className="relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      <motion.div
        className="absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-primary-700" />
        ) : (
          <Sun className="w-4 h-4 text-accent-600" />
        )}
      </motion.div>
    </motion.button>
  );
}


