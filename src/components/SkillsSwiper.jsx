import React, { useRef, useEffect } from "react";
import { techStack } from "../constants";

const MarqueeRow = ({ items, direction = "left", speed = 50 }) => {
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    
    const content = marquee.querySelector('.marquee-content');
    const clone = content.cloneNode(true);
    marquee.appendChild(clone);
    
    let position = direction === "left" ? 0 : -content.offsetWidth;
    const contentWidth = content.offsetWidth;
    const animationSpeed = speed / 10;
    
    const animate = () => {
      if (direction === "left") {
        position -= animationSpeed;
        if (Math.abs(position) >= contentWidth) {
          position = 0;
        }
      } else {
        position += animationSpeed;
        if (position >= 0) {
          position = -contentWidth;
        }
      }
      
      marquee.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    
    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, [direction, speed]);
  
  return (
    <div className="overflow-hidden">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div className="marquee-content flex gap-3 sm:gap-4 pr-3 sm:pr-4">
          {items.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.id}
                className="relative group"
              >
                {/* Main card */}
                <div
                  className="relative inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-7 py-3 sm:py-4 bg-[#0d0d0d] rounded-2xl border border-[#1a1a1a] transition-all duration-300 group-hover:border-[#2a2a2a] group-hover:-translate-y-1"
                  style={{
                    boxShadow: `0 0 0 1px ${tech.color}10`
                  }}
                >
                  {/* Icon container with glow */}
                  <div 
                    className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${tech.color}15, ${tech.darkColor}10)`,
                      boxShadow: `inset 0 1px 0 ${tech.color}20`
                    }}
                  >
                    <Icon 
                      className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110 relative z-10" 
                      style={{ color: tech.color }}
                    />
                    
                    {/* Icon glow on hover */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                      style={{ backgroundColor: tech.color }}
                    />
                  </div>
                  
                  {/* Name */}
                  <span className="text-sm sm:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                  
                  {/* Subtle accent line */}
                  <div 
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
                
                {/* Shadow/depth effect */}
                <div 
                  className="absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  style={{ 
                    backgroundColor: tech.color,
                    transform: 'translateY(8px)'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function SkillsSwiper() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const row1 = techStack.slice(0, 6);
  const row2 = techStack.slice(6);
  
  return (
    <div className="w-full py-8 sm:py-12 md:py-16">
      <div 
        ref={containerRef}
        className="w-full space-y-4 sm:space-y-6 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
      >
        <MarqueeRow items={row1} direction="left" speed={30} />
        <MarqueeRow items={row2} direction="right" speed={25} />
      </div>
    </div>
  );
}