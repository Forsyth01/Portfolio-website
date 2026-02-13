import ProjectHead from "@/components/ProjectHeader";
import projectsData from "@/data/myProjects";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { FiArrowUpRight, FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

// Particle Background Component (same as your Hero)
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

const ProjectItem = ({ item, index }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] m-auto mb-20 lg:mb-28"
    >
      {/* Background Number */}
      <div className="absolute -top-10 -left-4 lg:-left-10 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="sticky top-40 flex justify-start"
        >
          <span className="text-[140px] sm:text-[180px] lg:text-[220px] xl:text-[260px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#fec212]/20 to-green-500 leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Enhanced Project Card */}
      <motion.div 
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-gray-800/50 rounded-2xl overflow-hidden group  transition-all duration-500 shadow-2xl"
      >
      
        
        <div className="relative lg:flex items-stretch min-h-[500px] lg:min-h-[400px]">
          {/* Left Content - Enhanced */}
          <div className="w-full lg:w-1/2 space-y-6 p-8 sm:p-10 lg:p-12 relative z-10 flex flex-col justify-center">
            {/* Project Badge */}
           

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white"
            >
              {item.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
              className="text-slate-300 leading-relaxed text-base lg:text-lg"
            >
              {item.text}
            </motion.p>

            {/* Skills - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              className="space-y-3"
            >
              <h3 className="text-green-500 text-sm font-semibold uppercase tracking-wider">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 + idx * 0.05 }}
                    className="px-3 py-2 text-xs font-medium bg-gray-800/60 text-slate-200 rounded-lg border border-gray-700/50 transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Button - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
              className="pt-4"
            >
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-[#ffe1d6] text-[#1a1a1a] font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#fec212]/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Visit Live Site</span>
                <FiExternalLink className="relative z-10 text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Image - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.7 }}
            className="w-full lg:w-1/2 relative overflow-hidden group/image"
          >
            {/* Image/Video Container with Gradient Overlay */}
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] overflow-hidden">
              {item.video ? (
                <motion.video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onMouseEnter={(e) => e.target.pause()}
                  onMouseLeave={(e) => e.target.play()}
                  className="w-full h-full object-cover absolute inset-0 group-hover/image:scale-110 transition-transform duration-700 ease-out cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover absolute inset-0 group-hover/image:scale-110 transition-transform duration-700 ease-out"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#1a1a1a]/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-[#1a1a1a]/60 lg:via-transparent pointer-events-none" />

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover/image:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#fec212]/50 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#ff6b35]/50 rounded-bl-2xl" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Back Button Component
const BackButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-10 left-6 sm:top-10 sm:left-12 z-20"
    >
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-white font-medium text-sm sm:text-base cursor-pointer relative"
      >
        {/* Back arrow icon */}
        <motion.span
          className="inline-block transition-colors duration-300 group-hover:text-[#fec212]"
          initial={{ x: 0 }}
          whileHover={{ x: -5 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowLeft className="text-lg" />
        </motion.span>
        
        {/* Text */}
        <p className="transition-colors duration-300 group-hover:text-[#fec212]">
          Back to Home
        </p>

        {/* Animated underline */}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#fec212] to-[#ff6b35] group-hover:w-full transition-all duration-300"></span>
      </Link>
    </motion.div>
  );
};

const ProjectPage = () => {
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://forsythokoeguale.bio/projects#webpage",
        "url": "https://forsythokoeguale.bio/projects",
        "name": "Web Development Projects | Forsyth Okoeguale Portfolio",
        "isPartOf": { "@id": "https://forsythokoeguale.bio/#website" },
        "about": { "@id": "https://forsythokoeguale.bio/#person" },
        "description": "Explore Forsyth Okoeguale's web development portfolio featuring React, Next.js, and full-stack projects including e-commerce platforms, landing pages, and modern web applications.",
        "breadcrumb": { "@id": "https://forsythokoeguale.bio/projects#breadcrumb" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://forsythokoeguale.bio/projects#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://forsythokoeguale.bio"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://forsythokoeguale.bio/projects"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://forsythokoeguale.bio/projects#collection",
        "name": "Web Development Portfolio",
        "description": "A collection of web development projects showcasing expertise in React, Next.js, TailwindCSS, Firebase, and modern web technologies.",
        "author": { "@id": "https://forsythokoeguale.bio/#person" },
        "about": {
          "@type": "Thing",
          "name": "Web Development Projects"
        },
        "hasPart": [
          {
            "@type": "CreativeWork",
            "name": "Bukka Island",
            "description": "Next.js food truck website with Firebase backend and admin dashboard",
            "author": { "@id": "https://forsythokoeguale.bio/#person" },
            "url": "https://bukka-island.vercel.app"
          },
          {
            "@type": "CreativeWork",
            "name": "Nomad Pepe",
            "description": "Next.js meme coin landing page with modern animations",
            "author": { "@id": "https://forsythokoeguale.bio/#person" }
          },
          {
            "@type": "CreativeWork",
            "name": "HTX City Rentals",
            "description": "React event rental catalog with responsive design",
            "author": { "@id": "https://forsythokoeguale.bio/#person" }
          },
          {
            "@type": "CreativeWork",
            "name": "Astellar Homes & Decor",
            "description": "Next.js interior design blog with CMS integration",
            "author": { "@id": "https://forsythokoeguale.bio/#person" }
          },
          {
            "@type": "CreativeWork",
            "name": "Peace House University",
            "description": "React university landing page",
            "author": { "@id": "https://forsythokoeguale.bio/#person" }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO
        title="Web Development Projects | Forsyth Okoeguale Portfolio | React & Next.js"
        description="Explore Forsyth Okoeguale's portfolio of web development projects. See live examples of React, Next.js, e-commerce platforms, landing pages, and full-stack applications built for clients in USA, UK & globally."
        keywords="Web Development Portfolio, React Projects, Next.js Projects, Forsyth Okoeguale Work, E-commerce Development, Landing Page Design, Full Stack Projects, TailwindCSS Projects, Firebase Projects, Modern Web Applications"
        canonicalUrl="https://forsythokoeguale.bio/projects"
        structuredData={projectsStructuredData}
      />
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Background (same as Hero) */}
      <div className="fixed inset-0">
        {/* Right gradient */}
        <div
          className="absolute top-0 right-0 w-[800px] h-full opacity-55"
          style={{
            background:
              "radial-gradient(circle at center right, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
          }}
        ></div>

        {/* Left gradient */}
        <div
          className="absolute top-0 left-0 w-[800px] h-full opacity-55"
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

      {/* Content */}
      <div className="relative z-10 py-12 sm:py-16 md:py-20 xl:py-24 space-y-16 sm:space-y-20 xl:space-y-18">
        {/* Back Button */}
        <BackButton />

        {/* Project Header */}
        <ProjectHead />
        
        {/* All Projects */}
        <div className="space-y-24 lg:space-y-32 pb-20">
          {projectsData.map((item, index) => (
            <ProjectItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;