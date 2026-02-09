import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

// Centralized social links - single source of truth
export const socialLinks = [
  {
    id: 'github',
    icon: FiGithub,
    href: "https://github.com/Forsyth01",
    label: "GitHub"
  },
  {
    id: 'linkedin',
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/forsyth-okoeguale",
    label: "LinkedIn"
  },
  {
    id: 'twitter',
    icon: FaXTwitter,
    href: "https://x.com/Forsyth_X_",
    label: "Twitter"
  },
  {
    id: 'email',
    icon: FiMail,
    href: "mailto:forsyth01.dev@gmail.com",
    label: "Email"
  },
];

// Email specifically for direct use
export const contactEmail = "forsyth01.dev@gmail.com";

// Resume/CV download link
export const resumeLink = {
  href: "/Forsyth_Okoeguale_Web developer_CV.pdf",
  filename: "Forsyth_Okoeguale_Web developer_CV.pdf",
  label: "CV"
};
