import { FaReact, FaNodeJs } from "react-icons/fa";

// Import images directly inside this file
import profilepic2 from "@/assets/images/profilepic2.jpg";
import binaryblock from "@/assets/images/binaryblock.png";
import posze from "@/assets/images/posze.png";
import nftpalace from "@/assets/images/nftpalace.png";
import noteapp from "@/assets/images/noteapp.png";
import vpay from "@/assets/images/vpay.png";
import vectorp from "@/assets/images/vectorp.png";
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
    text: "I designed and developed a modern event rental website for Bukkai Island, a business specializing in event equipment and furniture rentals. The platform allows customers to seamlessly browse rental items, add them to a cart, and request a personalized quote.",
    icon: <FaReact size={50} />,
    skills: ["ReactJS", "TailwindCSS", "Firebase", "Cloudinary"],
    link: "https://www.bukkaisland.com/",
  },
  {
    id: 2,
    image: htxcityrentals,
    name: "Htxcityrentals",
    text: "I designed and developed a modern event rental website for HtxCityRentals, a business specializing in event equipment and furniture rentals. The platform allows customers to seamlessly browse rental items, add them to a cart, and request a personalized quote.",
    icon: <FaReact size={50} />,
    skills: ["ReactJS", "TailwindCSS", "Framer Motion", "NodeJS"],
    link: "http://htxcityrentals.com/",
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
  {
    id: 6,
    image: emgee,
    name: "Design Portfolio",
    text: "I created a professional design portfolio showcasing my graphic design works with smooth UI animations and responsive layout.",
    icon: <FaReact size={50} />,
    skills: ["ReactJS", "TailwindCSS", "Framer Motion"],
    link: "https://seniordesigner.vercel.app/",
  },
  {
    id: 7,
    image: astellar,
    name: "Astellar Homes & Decor",
    text: "I built a responsive website for Astellar Homes & Decor showcasing interior design projects, enabling visitors to explore services and contact easily.",
    icon: <FaReact size={50} />,
    skills: ["ReactJS", "TailwindCSS", "Framer Motion"],
    link: "https://astellarhomesdecor.vercel.app/",
  },
];

export default projectsData;
