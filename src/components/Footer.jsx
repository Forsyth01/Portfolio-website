import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: "#", label: "GitHub" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiMail, href: "mailto:your@email.com", label: "Email" }
  ];

  return (
    <footer className="w-full border-t border-gray-800 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#fec212] to-[#ff6b35] bg-clip-text text-transparent">
              {/* Your Name */}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Frontend Developer & Designer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 text-gray-400 hover:text-[#fec212] transition-colors duration-300 hover:scale-110 transform"
                >
                  <Icon className="text-xl" />
                </a>
              );
            })}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;