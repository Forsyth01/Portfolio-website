import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Resumebtn from "./button/Resumebtn";
import Githubtn from "./button/Githubtn";
import {
  FiCircle,
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { vectorp } from "@/assets/images";
import profilePic from "@/assets/images/profilepic2.jpg";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navLinks = [
    { name: "Home", icon: FiHome, href: "#home" },
    { name: "Skills", icon: FiCode, href: "#skills" },
    { name: "Projects", icon: FiBriefcase, href: "#projects" },
    { name: "Contact", icon: FiMail, href: "#contact" },
  ];

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="home" className="relative min-h-screen sm:min-h-screen lg:min-h-[75vh] xl:min-h-[70vh] overflow-hidden">
      {/* Animated gradient background with parallax */}
      <div className="fixed inset-0">
        {/* Right gradient with parallax */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-full opacity-55"
          style={{
            background:
              "radial-gradient(circle at center right, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
        />

        {/* Left gradient with parallax */}
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-full opacity-55"
          style={{
            background:
              "radial-gradient(circle at center left, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            x: mousePosition.x * -50,
            y: mousePosition.y * -50,
          }}
        />

        {/* Animated center glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="xl:w-[60%] sm:w-[70%] w-full max-w-screen-lg mx-auto px-6 flex flex-col h-[95vh] sm:py-10 lg:py-0 sm:h-full lg:h-[75vh] justify-center relative z-10">
        <motion.div className="space-y-8">
          {/* Menu Icon */}
          <div className="fixed z-50 top-6 right-6 sm:top-8 sm:right-8">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 bg-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl hover:bg-slate-900/70 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 100, rotate: -180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {isMenuOpen ? (
                  <FiX className="text-green-500 text-2xl" />
                ) : (
                  <FiMenu className="text-green-500 text-2xl" />
                )}
              </motion.div>
            </motion.button>

            {/* Animated Menu Box */}
            <AnimatePresence>
              {isMenuOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                  />

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotateY: 90,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      rotateY: -90,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="absolute top-16 right-0 w-64 bg-[#1a1a1a] backdrop-blur-xl border border-green-500/30 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    style={{
                      transformOrigin: "top right",
                    }}
                  >
                    <div className="p-4 border-b border-green-500/20">
                      <motion.div 
                        className="flex items-center gap-3 mb-3"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.img
                          src={profilePic}
                          alt="Profile"
                          className="w-12 h-12 rounded-full object-cover border-2 border-green-500/30"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div>
                          <h3 className="text-white text-lg font-normal">
                            Navigation
                          </h3>
                          <p className="text-slate-400 text-xs">
                            Explore my portfolio
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="p-2">
                      {navLinks.map((link, index) => (
                        <motion.a
                          key={link.name}
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            setTimeout(() => {
                              const element = document.querySelector(link.href);
                              if (element) {
                                element.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }, 300);
                          }}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                          whileHover={{
                            x: 8,
                            backgroundColor: "rgba(34, 197, 94, 0.1)",
                          }}
                          className="flex items-center gap-3 p-3 rounded-xl text-slate-300 hover:text-white transition-colors group"
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <link.icon className="text-green-500 text-lg" />
                          </motion.div>
                          <span className="font-normal">{link.name}</span>
                        </motion.a>
                      ))}
                    </div>

                    <div className="p-4 border-t border-green-500/20 bg-[#1f1d1d]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FiCircle className="text-green-500 text-[8px] fill-green-500 animate-pulse" />
                          <span className="text-xs text-slate-400">
                            Available for work
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-green-500/10">
                        {[
                          { icon: FiLinkedin, href: "https://linkedin.com" },
                          { icon: FiGithub, href: "https://github.com" },
                          { icon: FiMail, href: "mailto:your@email.com" },
                        ].map((social, i) => (
                          <motion.a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-green-500 transition-colors"
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 0.4 }}
                          >
                            <social.icon className="text-lg" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Heading with crazy animations */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-center lg:text-left"
          >
            <motion.p
              className="text-slate-400 text-sm uppercase tracking-wider mb-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Web Developer
            </motion.p>
            <h1 className="text-[32px] sm:text-[52px] xl:text-[64px] font-normal mb-4 leading-[1.1] tracking-tight">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Hi, I'm{" "}
              </motion.span>
              <span className="inline-block relative">
                <motion.span
                  className="relative z-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 150 }}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                >
                  Forsyth
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-green-500 to-emerald-500"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Description with stagger effect */}
          <motion.div
            className="space-y-4 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 1.3,
                },
              },
            }}
          >
            <motion.p
              className="text-slate-300 text-base sm:text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, x: -100, rotateY: -90 },
                visible: { opacity: 1, x: 0, rotateY: 0 },
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              I specialize in{" "}
              <motion.span
                className="text-white font-normal"
                whileHover={{ scale: 1.1, color: "#22c55e" }}
              >
                React, Next.js
              </motion.span>
              , and modern web technologies. I build responsive, high-performance
              websites and web apps that are intuitive, scalable, and
              user-friendly.
            </motion.p>
            <motion.p
              className="text-slate-400 text-base sm:text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, x: 100, rotateY: 90 },
                visible: { opacity: 1, x: 0, rotateY: 0 },
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Passionate about clean code, smooth UI/UX, and leveraging{" "}
              <motion.span
                className="text-slate-300"
                whileHover={{ scale: 1.1, color: "#10b981" }}
              >
                AI & Web3 tools
              </motion.span>{" "}
              to deliver modern solutions that drive impact.
            </motion.p>
          </motion.div>

          {/* Buttons with bounce animation */}
          <motion.div
            className="flex gap-4 justify-center lg:justify-start pt-2"
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.8,
              type: "spring",
              stiffness: 200,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
            >
              <Resumebtn />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.3 }}
            >
              <Githubtn />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;