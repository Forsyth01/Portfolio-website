import { FaReact, FaNodeJs } from "react-icons/fa";

// Import images directly inside this file
import posze from "@/assets/images/posze.png";
import noteapp from "@/assets/images/noteapp.png";
import peacehouse from "@/assets/images/peacehouse.png";
import htxcityrentals from "@/assets/images/htxcityrentals.png";
import bukkaisland from "@/assets/images/bukkaisland.png";
import emgee from "@/assets/images/emgee.png";
import astellar from "@/assets/images/Astellar.png";

const projectsData = [
  {
    id: 1,
    image: bukkaisland,
    name: "Bukka Island",
    text: "A full-featured web platform for a Houston-based food truck restaurant. The site includes an interactive menu, about page, and a secure admin dashboard for managing content with full CRUD functionality and authentication—designed for speed, scalability, and a seamless user experience",
    icon: <FaReact size={50} />,
    skills: ["Nextjs", "TailwindCSS", "Firebase", "Framer-motion", "Cloudinary"],
    link: "https://www.bukkaisland.com/",
  },
  {
    id: 2,
    image: htxcityrentals,
    name: "Htxcityrentals",
    text: "I designed and developed a modern event rental website for HtxCityRentals, a business specializing in event equipment and furniture rentals. The platform allows customers to seamlessly browse rental items, add them to a cart, and request a personalized quote.",
    icon: <FaReact size={50} />,
    skills: ["ReactJS", "TailwindCSS", "Framer Motion", "Emailjs", "Firebase"],
    link: "http://htxcityrentals.com/",
  },
    {
    id: 6,
    image: emgee,
    name: "Design Portfolio",
    text: "Developed a sleek and responsive portfolio website for a professional designer, featuring smooth UI animations, modern aesthetics, and an intuitive layout that highlights their creative work effectively across all devices.",
    icon: <FaReact size={50} />,
    skills: ["Nextjs", "TailwindCSS", "Framer Motion"],
    link: "https://seniordesigner.vercel.app/",
  },
    {
    id: 7,
    image: astellar,
    name: "Astellar Homes & Decor",
    text: "Built a responsive blog website for Astellar Homes & Decor, featuring an admin dashboard for content management and a clean, modern interface that showcases interior design projects, services, and articles seamlessly.",
    icon: <FaReact size={50} />,
    skills: ["Nextjs", "Firebase", "Cloudinary", "TailwindCSS", "Framer Motion"],
    link: "https://astellarhomesdecor.vercel.app/",
  },
  {
    id: 3,
    image: peacehouse,
    name: "Peace House University",
    text: "I designed the user interface and developed the landing page for Peace House University, leveraging my expertise in front-end development and modern tools like ReactJS and TailwindCSS.",
    icon: <FaReact size={50} />,
    skills: ["ReactJS", "TailwindCSS", "Framer Motion"],
    link: "https://peacehouseuniversity.netlify.app/",
  },
  {
    id: 4,
    image: posze,
    name: "Posze",
    text: "I developed the landing page for Posze, a fashion website, focusing on sleek, modern aesthetics and an engaging user interface. Leveraging ReactJS and TailwindCSS, I ensured the design was visually appealing, responsive, and aligned with the brand's style.",
    icon: <FaNodeJs size={50} />,
    skills: ["ReactJS", "TailwindCSS", "GSAP"],
    link: "https://posze.netlify.app/",
  },
  {
    id: 5,
    image: noteapp,
    name: "Noteapp",
    text: "I created a note app that allows users to easily create, update, and delete notes. By using Firebase as the backend, the app solves the problem of managing and storing notes efficiently.",
    icon: <FaReact size={50} />,
    skills: ["ReactJS", "TailwindCSS", "Framer Motion"],
    link: "https://noteapp01.netlify.app/",
  },


];

export default projectsData;
