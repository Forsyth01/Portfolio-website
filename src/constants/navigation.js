import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";

// Centralized navigation links
export const navLinks = [
  { name: "Home", icon: FiHome, href: "#home" },
  // { name: "About", icon: FiUser, href: "/about" },
  { name: "Skills", icon: FiCode, href: "#skills" },
  { name: "Projects", icon: FiBriefcase, href: "/projects" },
  { name: "Contact", icon: FiMail, href: "#contact" },
];

// Profile info used in navigation and other places
export const profileInfo = {
  name: "Forsyth",
  title: "Web Developer / Designer",
  profileImage: "/profilepic5.jpg",
};
