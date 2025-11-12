import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6"; // ✅ New X (Twitter) icon

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/Forsyth01", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/forsyth-okoeguale", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/Forsyth_X_", label: "Twitter" }, // ✅ Updated icon
    { icon: FiMail, href: "mailto:forsyth01.dev@email.com", label: "Email" },
  ];

  return (
    <footer className="w-full border-t border-gray-800 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand/Name */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm mt-1">Web Developer & Designer</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-4 relative">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 text-gray-400 hover:text-[#fec212] transition-transform duration-300 hover:scale-110"
                >
                  <Icon className="text-xl" />
                </a>
              );
            })}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">© {currentYear} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
