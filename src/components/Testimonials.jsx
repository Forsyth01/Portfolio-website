import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Sample testimonials data - replace with your actual data
const testimonialsData = [
  {
    id: 1,
    name: "John Anderson",
    role: "CEO, TechStart Inc.",
    company: "TechStart",
    image: "/path-to-image.jpg",
    rating: 5,
    text: "Working with Forsyth was an absolute pleasure. His attention to detail and ability to transform complex requirements into elegant solutions is truly remarkable. Our web application exceeded all expectations.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Product Manager, DesignHub",
    company: "DesignHub",
    image: "/path-to-image.jpg",
    rating: 5,
    text: "Exceptional developer with great communication skills. Forsyth delivered our project on time and the quality of work was outstanding. Highly recommend for any web development needs.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder, StartupXYZ",
    company: "StartupXYZ",
    image: "/path-to-image.jpg",
    rating: 5,
    text: "Forsyth's expertise in React and modern web technologies helped us build a fast, responsive platform. His problem-solving skills and dedication to excellence are second to none.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "CTO, InnovateLab",
    company: "InnovateLab",
    image: "/path-to-image.jpg",
    rating: 5,
    text: "A true professional who goes above and beyond. Forsyth not only built our website but also provided valuable insights on UX/UI improvements. The result speaks for itself.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonialsData.length - 1;
      if (nextIndex >= testimonialsData.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-green-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            What Clients Say
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by clients worldwide to deliver exceptional web solutions
          </p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Main card with glow */}
          <div className="relative min-h-[500px] sm:min-h-[450px] flex items-center justify-center">
            {/* Outer glow */}
            <div className="absolute inset-0 -m-8 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl opacity-20 blur-3xl"></div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="w-full max-w-4xl mx-auto relative"
              >
                {/* Card */}
                <div className="relative bg-[#1e1e1eb8] backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-green-500/20 overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-tr-full"></div>

                  {/* Giant quote mark */}
                  <div className="absolute top-8 right-8 opacity-5">
                    {/* <FiQuote className="text-[200px] text-green-500 transform rotate-180" /> */}
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Profile image with fancy border */}
                    <div className="relative mb-6">
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-2 border-[#1e1e1e]">
                          <img
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-green-500 font-bold text-2xl">${currentTestimonial.name.charAt(0)}</div>`;
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Star rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <FiStar className="text-yellow-500 fill-yellow-500 text-lg" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl italic">
                      "{currentTestimonial.text}"
                    </p>

                    {/* Divider with gradient */}
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-6 rounded-full"></div>

                    {/* Author info */}
                    <div>
                      <h4 className="text-white font-bold text-xl sm:text-2xl mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-slate-400 text-sm sm:text-base">
                        {currentTestimonial.role}
                      </p>
                      <p className="text-green-400 text-xs sm:text-sm font-semibold mt-1">
                        {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 sm:px-0 sm:-mx-16 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1e1e1eb8] backdrop-blur-xl border border-green-500/30 flex items-center justify-center text-green-500 hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300 shadow-lg"
            >
              <FiChevronLeft className="text-2xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1e1e1eb8] backdrop-blur-xl border border-green-500/30 flex items-center justify-center text-green-500 hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300 shadow-lg"
            >
              <FiChevronRight className="text-2xl" />
            </motion.button>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="group relative"
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-green-500 w-8"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              ></div>
              {index === currentIndex && (
                <div className="absolute inset-0 bg-green-500 rounded-full blur-sm opacity-50"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;