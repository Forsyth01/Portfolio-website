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
    <div id="home" className="relative min-h-screen sm:min-h-screen lg:min-h-[80vh] xl:min-h-[75vh]  overflow-hidden ">
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
      <NavigationMenu />

      <div className="xl:w-[60%] sm:w-[70%] w-full max-w-screen-lg mx-auto px-6 flex flex-col h-[95vh] sm:py-10 lg:py-0 sm:h-full lg:h-[90vh] xl:h-[75vh] justify-center">
        <motion.div
          className="space-y-8"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <p className="text-slate-400 text-sm uppercase tracking-wider mb-3 xl:pt-20">
              Web Developer
            </p>
            <h1 className="text-[32px] sm:text-[52px] xl:text-[64px] font-normal mb-4 leading-[1.1] tracking-tight">
              Hi, I'm{" "}
              <span className="inline-block relative">
                <span className="relative z-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                  Forsyth
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-green-500 to-emerald-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Description with better spacing */}
          <motion.div
            className="space-y-4 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I specialize in{" "}
              <span className="text-white font-normal">React, Next.js</span>,
              and modern web technologies. I build responsive, high-performance
              websites and web apps that are intuitive, scalable, and
              user-friendly.
            </p>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            With 4+ years of experience, I'm Passionate about clean code, smooth UI/UX, and leveraging{" "}
              <span className="text-slate-300">AI & Web3 tools</span> to deliver
              modern solutions that drive impact.
            </p>
          </motion.div>

          {/* Buttons with original components */}
          <motion.div
            className="flex gap-4 justify-center lg:justify-start pt-2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Resumebtn />
            <Githubtn />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;