import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, socialLinks, profileInfo } from "../constants";

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Check if it's a route (starts with /) or anchor link (starts with #)
    if (href.startsWith('/')) {
      // For routes, navigate directly
      window.location.href = href;
    } else {
      // For anchor links, scroll smoothly
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    }
  };

  return (
    <div className="fixed z-10 top-6 right-6 sm:top-6 sm:right-6 lg:top-[4%] xl:top-[14%] lg:right-[10%]">
      {/* Menu Toggle Button */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative z-50 p-2.5 sm:p-3 bg-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl hover:bg-slate-900/70 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? (
            <FiX className="text-green-500 text-xl sm:text-2xl" />
          ) : (
            <FiMenu className="text-green-500 text-xl sm:text-2xl" />
          )}
        </motion.div>
      </motion.button>

      {/* Animated Menu Box */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Menu Box */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: -20,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="absolute top-14 sm:top-16 right-0 w-[min(280px,calc(100vw-2rem))] bg-[#1a1a1a] backdrop-blur-xl border border-green-500/30 rounded-2xl shadow-2xl z-50 overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
              style={{
                transformOrigin: "top right",
              }}
            >
              {/* Menu Header */}
              <div className="p-3 sm:p-4 border-b border-green-500/20">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                  <img
                    src={profileInfo.profileImage}
                    alt="Forsyth Okoeguale - Full Stack Web Developer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-green-500/30"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-white tracking font-medium text-base sm:text-lg ">
                      {profileInfo.name}
                    </h3>
                    <p className="text-slate-400 text-[10px] sm:text-xs">
                      {profileInfo.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="p-1.5 sm:p-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      x: 4,
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                    }}
                    className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl text-slate-300 hover:text-white transition-colors group"
                  >
                    <link.icon className="text-green-500 text-base sm:text-lg group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="font-normal text-sm sm:text-base">{link.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="p-3 sm:p-4 border-t border-green-500/20 bg-[#1f1d1d]">
                <div className="flex items-center gap-2.5 sm:gap-3 ">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-green-500 transition-colors"
                      >
                        <Icon className="text-base sm:text-lg" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationMenu;