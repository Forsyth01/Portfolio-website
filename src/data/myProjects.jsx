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
    // image: bukkaisland,
        video: "/bukkaislandvid.mp4",

    name: "Bukka Island",
    text: "A Houston food truck needed more than just a website—they needed a way to update their menu without calling me every week. So I built them a full site with an admin dashboard where they can add new dishes, swap out images, and keep things fresh on their own.",
    icon: <FaReact size={50} />,
    skills: ["Nextjs", "TailwindCSS", "Firebase", "Framer-motion", "Cloudinary"],
    link: "https://www.bukkaisland.com/",
  },
  {
    id: 8,
    video: "/nomadvid1.mp4",
    name: "Nomad Pepe",
    text: "Meme coin project that wanted a landing page matching the energy of crypto Twitter. Had to feel fun and a little unhinged—because that's the whole vibe—but still load fast since most people would hit it from their phones first.",
    icon: <FaReact size={50} />,
    skills: ["Nextjs", "TailwindCSS", "Cloudinary", "Framer Motion"],
    link: "https://www.nomadpepe.xyz/",
  },
  {
    id: 9,
    video: "/ralynvid12.mp4",
    name: "Ralyn Limited",
    text: "Company got tired of explaining what they do over and over. The website needed to answer the obvious stuff before anyone picks up the phone—who they are, what they offer, and how to reach them. No fancy gimmicks, just straight to the point.",
    icon: <FaReact size={50} />,
    skills: ["Nextjs", "TailwindCSS", "Framer Motion", "Supabase"],
    link: "https://ralyn.vercel.app/",
  },
  {
    id: 2,
    image: htxcityrentals,
    name: "Htxcityrentals",
    text: "Event rental company that was drowning in quote requests via DMs and phone calls. Built them a proper catalog where customers can browse items, fill their cart, and send a quote request—all without the back-and-forth.",
    icon: <FaReact size={50} />,
    skills: ["ReactJS", "TailwindCSS", "Framer Motion", "Emailjs", "Firebase"],
    link: "http://htxcityrentals.com/",
  },
  {
    id: 6,
    image: emgee,
    name: "Design Portfolio",
    text: "A designer needed their work to speak for itself. Kept the UI minimal so the projects could breathe, added some subtle animations to make scrolling feel good, and made sure it loads fast—because nobody's waiting around for a slow portfolio.",
    icon: <FaReact size={50} />,
    skills: ["Nextjs", "TailwindCSS", "Framer Motion"],
    link: "https://seniordesigner.vercel.app/",
  },
  {
    id: 7,
    image: astellar,
    name: "Astellar Homes & Decor",
    text: "Interior design blog with a twist—the client wanted to post articles and showcase projects without touching code. Built a custom dashboard so they can upload photos, write posts, and manage everything themselves.",
    icon: <FaReact size={50} />,
    skills: ["Nextjs", "Firebase", "Cloudinary", "TailwindCSS", "Framer Motion"],
    link: "https://astellarhomesdecor.vercel.app/",
  },
  {
    id: 3,
    image: peacehouse,
    name: "Peace House University",
    text: "Landing page for a university. The challenge was making an educational site feel welcoming instead of boring—so I focused on clear information hierarchy and smooth interactions that guide visitors naturally.",
    icon: <FaReact size={50} />,
    skills: ["ReactJS", "TailwindCSS", "Framer Motion"],
    link: "https://peacehouseuniversity.netlify.app/",
  },
  {
    id: 4,
    image: posze,
    name: "Posze",
    text: "Fashion brand landing page. They wanted something bold that matched their aesthetic—lots of visual impact, smooth scroll animations with GSAP, and that high-end feel you'd expect from a fashion site.",
    icon: <FaNodeJs size={50} />,
    skills: ["ReactJS", "TailwindCSS", "GSAP"],
    link: "https://posze.netlify.app/",
  },
  {
    id: 5,
    image: noteapp,
    name: "Noteapp",
    text: "Simple note-taking app I built to get better at Firebase. Nothing fancy—just create, edit, delete notes. Sometimes the best projects are the ones that solve a simple problem well.",
    icon: <FaReact size={50} />,
    skills: ["ReactJS", "TailwindCSS", "Framer Motion"],
    link: "https://noteapp01.netlify.app/",
  },
];

export default projectsData;
