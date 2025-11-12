import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import {
  FiArrowLeft,
  FiCode,
  FiHeart,
  FiBook,
  FiCoffee,
  FiMusic,
  FiCamera,
  FiGlobe,
} from "react-icons/fi";
import { Link } from "react-router-dom";

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
      canvas.height = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      );
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
    const particleCount = Math.min(
      150,
      Math.floor((canvas.width * canvas.height) / 15000)
    );
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
            ctx.strokeStyle = `rgba(34, 197, 94, ${
              0.15 * (1 - distance / 120)
            })`;
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
        <motion.span
          className="inline-block transition-colors duration-300 group-hover:text-[#fec212]"
          initial={{ x: 0 }}
          whileHover={{ x: -5 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowLeft className="text-lg" />
        </motion.span>
        <p className="transition-colors duration-300 group-hover:text-[#fec212]">
          Back to Home
        </p>
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#fec212] to-[#ff6b35] group-hover:w-full transition-all duration-300"></span>
      </Link>
    </motion.div>
  );
};

// Section Header Component
const SectionHeader = ({ title, subtitle, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
   
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
      {title}
    </h2>
    {/* <div className="w-20 h-1 bg-gradient-to-r from-[#16fe12] to-[#ffd5c6] mx-auto rounded-full"></div> */}
  </motion.div>
);

// Experience Timeline Component
const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "2021 - Present",
      role: "Freelance Full Stack Developer",
      company: "International Clients (USA, UK)",
      description:
        "Delivering end-to-end web solutions for diverse clients across e-commerce, SaaS, and corporate sectors. Managing full project lifecycles from discovery to deployment, ensuring high-quality deliverables and client satisfaction.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "AWS",
      ],
      highlights: [
        "50+ projects delivered",
        "International client base",
        "Full-time freelance",
      ],
    },
    {
      year: "2023 - Present",
      role: "Contract Full Stack Developer",
      company: "Various Tech Companies",
      description:
        "Providing specialized development services on contract basis, building scalable web applications and custom solutions. Focus on React ecosystem, modern JavaScript, and cloud-based architectures.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Docker",
      ],
      highlights: [
        "Remote collaboration",
        "Agile workflows",
        "Code reviews & mentoring",
      ],
    },
    {
      year: "2021 - 2023",
      role: "Web Developer",
      company: "Freelance Portfolio",
      description:
        "Built foundation in web development through diverse projects including business websites, landing pages, and web applications. Established strong client relationships and developed expertise in modern development practices.",
      technologies: ["JavaScript", "React", "WordPress", "HTML/CSS", "PHP"],
      highlights: [
        "Client acquisition",
        "Project management",
        "Technical growth",
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#16fe12] to-[#ffd5c6] transform lg:-translate-x-1/2"></div>

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`relative flex flex-col lg:flex-row items-start mb-12 ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-gradient-to-r from-[#16fe12] to-[#ffd5c6] rounded-full border-4 border-[#1a1a1a] transform lg:-translate-x-1/2 z-10"></div>

          {/* Content */}
          <div
            className={`lg:w-1/2 ${
              index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
            } ml-12 lg:ml-0`}
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm hover:border-[#fec212]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#fec212] animate-pulse"></div>
                <span className="text-[#fec212] text-sm font-semibold">
                  {exp.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
              <p className="text-slate-400 text-sm mb-3">{exp.company}</p>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="mb-4 space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <div
                    key={hIndex}
                    className="flex items-center gap-2 text-slate-400 text-xs"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-gray-800/60 text-slate-200 rounded-lg border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Hobbies Grid Component
const HobbiesGrid = () => {
  const hobbies = [
    {
      icon: FiCode,
      title: "Coding Projects",
      description:
        "Building side projects and experimenting with new technologies",
    },
    {
      icon: FiBook,
      title: "Reading",
      description: "Tech blogs, fantasy novels, and personal development books",
    },
    {
      icon: FiCamera,
      title: "Photography",
      description: "Capturing landscapes and urban architecture",
    },
    {
      icon: FiMusic,
      title: "Music",
      description: "Playing guitar and exploring different music genres",
    },
    {
      icon: FiGlobe,
      title: "Travel",
      description: "Exploring new cultures and cuisines around the world",
    },
    {
      icon: FiCoffee,
      title: "Coffee Brewing",
      description: "Perfecting the art of pour-over and espresso",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hobbies.map((hobby, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.05 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-gray-800/50 rounded-2xl p-6 text-center group hover:border-[#fec212]/30 transition-all duration-300"
        >
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fec212]/10 rounded-2xl mb-4 group-hover:bg-[#fec212]/20 transition-colors duration-300">
            <hobby.icon className="text-2xl text-[#fec212]" />
          </div> */}
          <h3 className="text-lg font-semibold text-white mb-2">
            {hobby.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {hobby.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

// Skills Cards Component - Modern approach without percentages
const SkillsShowcase = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React & Next.js", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Responsive Design", level: "Expert" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js & Express", level: "Advanced" },
        { name: "RESTful APIs", level: "Expert" },
        { name: "MongoDB & PostgreSQL", level: "Advanced" },
        { name: "Authentication & Security", level: "Advanced" },
      ],
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "AWS & Cloud Services", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Agile & Scrum", level: "Advanced" },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
      case "Advanced":
        return "text-blue-400 bg-blue-500/10 border-blue-500/30";
      case "Intermediate":
        return "text-amber-400 bg-amber-500/10 border-amber-500/30";
      default:
        return "text-slate-400 bg-slate-500/10 border-slate-500/30";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, catIndex) => (
        <motion.div
          key={catIndex}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-gray-800/50 rounded-2xl p-6 hover:border-[#fec212]/30 transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-800/50">
            {category.category}
          </h3>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: catIndex * 0.1 + skillIndex * 0.05,
                }}
                className="flex items-center justify-between gap-3"
              >
                <span className="text-slate-300 text-sm font-medium">
                  {skill.name}
                </span>
                <span
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${getLevelColor(
                    skill.level
                  )}`}
                >
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Background */}
      <div className="fixed inset-0">
        <div
          className="absolute top-0 right-0 w-[800px] h-full opacity-55"
          style={{
            background:
              "radial-gradient(circle at center right, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-[800px] h-full opacity-55"
          style={{
            background:
              "radial-gradient(circle at center left, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-12 sm:py-16 md:py-20 xl:py-24">
        {/* Back Button */}
        <BackButton />

        <div className="xl:w-[100%] sm:w-[70%] w-full max-w-screen-lg mx-auto px-6 space-y-20">
          {/* Hero Section */}
          {/* <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pt-16 pb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text ">
                Me
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer based in Lagos, Nigeria, specializing in
              building exceptional digital experiences for clients across the
              USA and UK. 4 years of delivering high-quality web solutions.
            </p>
          </motion.section> */}

          {/* About Me Section */}
          <section className="space-y-8">
            <SectionHeader
              // title="About Me"
              subtitle="The Story Behind the Code"
              icon={FiHeart}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-slate-300 text-lg leading-relaxed">
                  Hi! I'm Forsyth, a Full Stack Developer based in Lagos,
                  Nigeria, with 4 years of experience delivering web solutions
                  to clients internationally. I specialize in building modern,
                  scalable applications using React, Next.js, and Node.js.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  My freelance journey has allowed me to work with diverse
                  clients across the USA and UK, tackling projects ranging from
                  e-commerce platforms to SaaS applications. I thrive in remote
                  collaboration environments and pride myself on clear
                  communication, meeting deadlines, and exceeding client
                  expectations.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  I approach every project with a focus on clean code, user
                  experience, and business goals. Whether it's building from
                  scratch or enhancing existing systems, I bring technical
                  expertise and problem-solving skills to deliver results that
                  matter.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-gray-800/50 rounded-2xl p-8"
              >
                {/* <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  At a Glance
                </h3> */}
                <div className="space-y-4">
                  <img src="/profilepic2.jpg" alt="" className="" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <SectionHeader
              title="Experience"
              subtitle="Professional Journey"
              icon={FiCode}
            />
            <ExperienceTimeline />
          </section>

          {/* Skills Section */}
          <section>
            <SectionHeader
              title="Technical Expertise"
              subtitle="Technologies & Tools"
              icon={FiCode}
            />
            <SkillsShowcase />

            {/* Additional competencies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-gray-800/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                What I Bring
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Full Project Ownership",
                    description:
                      "From requirements gathering to deployment and maintenance",
                  },
                  {
                    title: "Remote Collaboration",
                    description:
                      "Experienced in async communication and distributed team workflows",
                  },
                  {
                    title: "Performance Focus",
                    description:
                      "Building fast, optimized applications that scale",
                  },
                  {
                    title: "Clean Code Advocate",
                    description:
                      "Writing maintainable, well-documented code following best practices",
                  },
                  {
                    title: "Problem Solver",
                    description:
                      "Breaking down complex challenges into elegant solutions",
                  },
                  {
                    title: "Client-First Mindset",
                    description:
                      "Understanding business goals and delivering measurable value",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#16fe12] to-[#ffd5c6] mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Hobbies Section */}
          <section>
            <SectionHeader
              title="Beyond Code"
              subtitle="Passions & Interests"
              icon={FiHeart}
            />
            <HobbiesGrid />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
