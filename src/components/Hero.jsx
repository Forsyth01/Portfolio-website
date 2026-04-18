import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Resumebtn from "./button/Resumebtn";
import Githubtn from "./button/Githubtn";
import NavigationMenu from "./NavigationMenu";

// Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? "34, 197, 94" : "16, 185, 129"; // green shades
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

const Hero = () => {
  return (
    <section id="home" aria-label="Hero Section - Introduction" className="relative min-h-screen sm:min-h-screen lg:min-h-[80vh] xl:min-h-[75vh]  overflow-hidden ">
      {/* Particle Background - spans entire page */}
      <ParticleBackground />
      
      {/* Simple, reliable gradient background */}
      <div className="">
        <div className="fixed inset-0 ">
          {/* Right gradient */}
          <div
            className="absolute top-0 right-0 w-[800px] h-full opacity-55 z-100"
            style={{
              background:
                "radial-gradient(circle at center right, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
            }}
          ></div>

          {/* Left gradient */}
          <div
            className="absolute top-0 left-0 w-[800px] h-full opacity-55 z-100"
            style={{
              background:
                "radial-gradient(circle at center left, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            }}
          ></div>

          {/* Center subtle glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)",
            }}
          ></div>
        </div>
        {/* Center subtle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      {/* Navigation Menu Component */}

      <div className="w-full max-w-7xl mx-auto px-6 py-16  lg:py-24 relative">
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-16 lg:mb-24 border-b pb-2 lg:pb-6 border-slate-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">
            Forsyth Okoeguale / Portfolio 2026
          </p>
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">
              Open to opportunities
            </p>
          </div>
      <NavigationMenu />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Main Headline & Description */}
          <div className="lg:col-span-2">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 lg:mb-12"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight -space-y-3 sm:space-y-0">
                <span className="block italic text-white">I ship</span>
                <span className="block text-green-500 font-light">production</span>
                <span className="block italic text-white">web apps.</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full-stack developer who takes your project from "we need this built" to live and making money. Next.js, Node.js, Supabase — 4+ years of shipping.
            </motion.p>

            {/* THE PITCH Section */}
            <motion.div
              className="border-t border-slate-700 pt-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">The Pitch</p>
              <p className="text-base text-slate-300 leading-relaxed max-w-lg">
                You don't need another developer who builds half an app and ghosts. I own the entire stack — database, APIs, frontend, deployment.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Info Cards */}
          <motion.div
            className="space-y-6 flex flex-col justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Info Card */}
            <div className="flex items-center justify-between">
              <p className="text-slate-500 text-xs uppercase tracking-widest">Based</p>
              <p className="text-white font-light">Lagos, NG</p>
            </div>

            {/* Info Card */}
            <div className="flex items-center justify-between">
              <p className="text-slate-500 text-xs uppercase tracking-widest">Experience</p>
              <p className="text-white font-light">4+ years</p>
            </div>

            {/* Info Card */}
            <div className="flex items-center justify-between">
              <p className="text-slate-500 text-xs uppercase tracking-widest">Stack</p>
              <p className="text-white font-light">Next.js · Node.js · Supabase</p>
            </div>

            {/* Info Card */}
            <div className="flex items-center justify-between">
              <p className="text-slate-500 text-xs uppercase tracking-widest">Availability</p>
              <p className="text-white font-light">Remote · Contract · FT</p>
            </div>

            {/* Info Card */}
            <div className="flex items-center justify-between">
              <p className="text-slate-500 text-xs uppercase tracking-widest">Rate</p>
              <p className="text-white font-light">On request</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;