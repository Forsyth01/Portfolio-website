import React from "react";
import Skills from "@/components/Skills";
import HoverAnimation from "@/components/MyProjectsHome";
import SkillsSwiper from "@/components/SkillsSwiper";
import Resumebtn from "@/components/button/Resumebtn";
import Githubtn from "@/components/button/Githubtn";
import SectionDivider from "@/components/SectionDivider";
import Contact from "@/components/Contact";
import { FiCircle } from "react-icons/fi";
import { vectorp } from "@/assets/images";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";

const Home = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://forsythokoeguale.bio/#website",
        "url": "https://forsythokoeguale.bio",
        "name": "Forsyth Okoeguale | Full Stack Web Developer",
        "description": "Professional portfolio of Forsyth Okoeguale, a Full Stack Web Developer specializing in React, Next.js, and modern web technologies.",
        "publisher": { "@id": "https://forsythokoeguale.bio/#person" },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://forsythokoeguale.bio/#webpage",
        "url": "https://forsythokoeguale.bio",
        "name": "Forsyth Okoeguale | Full Stack Web Developer Portfolio",
        "isPartOf": { "@id": "https://forsythokoeguale.bio/#website" },
        "about": { "@id": "https://forsythokoeguale.bio/#person" },
        "description": "Hire Forsyth Okoeguale, a skilled Full Stack Web Developer from Lagos, Nigeria. Expert in React, Next.js, TailwindCSS, Node.js. Building high-performance web applications for global clients.",
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://forsythokoeguale.bio"]
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://forsythokoeguale.bio/#person",
        "name": "Forsyth Okoeguale",
        "givenName": "Forsyth",
        "familyName": "Okoeguale",
        "url": "https://forsythokoeguale.bio",
        "image": {
          "@type": "ImageObject",
          "url": "https://forsythokoeguale.bio/profilepic4.jpg",
          "width": 400,
          "height": 400,
          "caption": "Forsyth Okoeguale - Full Stack Web Developer"
        },
        "sameAs": [
          "https://github.com/Forsyth01",
          "https://www.linkedin.com/in/forsyth-okoeguale",
          "https://x.com/Forsyth_X_"
        ],
        "jobTitle": "Full Stack Web Developer",
        "description": "Full Stack Web Developer with 4+ years of experience building modern, scalable web applications using React, Next.js, TailwindCSS, and Node.js.",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "Nigeria"
        },
        "email": "forsyth01.dev@gmail.com",
        "knowsAbout": [
          "React.js",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "TailwindCSS",
          "Node.js",
          "Firebase",
          "MongoDB",
          "Web Development",
          "Frontend Development",
          "Full Stack Development",
          "Responsive Web Design",
          "UI/UX Implementation"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full Stack Web Developer",
          "occupationLocation": {
            "@type": "City",
            "name": "Lagos, Nigeria"
          },
          "skills": "React, Next.js, JavaScript, TypeScript, TailwindCSS, Node.js, Firebase, MongoDB"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://forsythokoeguale.bio/#service",
        "name": "Forsyth Okoeguale Web Development Services",
        "provider": { "@id": "https://forsythokoeguale.bio/#person" },
        "serviceType": "Web Development",
        "areaServed": ["United States", "United Kingdom", "Nigeria", "Worldwide"],
        "description": "Professional web development services including React applications, Next.js websites, e-commerce platforms, landing pages, and full-stack web solutions.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "React Web Application Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Next.js Website Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce Platform Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Page Design & Development"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="">
      <SEO
        title="Forsyth Okoeguale | Full Stack Web Developer | React & Next.js Expert"
        description="Hire Forsyth Okoeguale, a Full Stack Web Developer from Lagos, Nigeria with 4+ years experience. Specializing in React, Next.js, TailwindCSS, Node.js. Building high-performance web applications for clients in USA, UK & globally."
        keywords="Forsyth Okoeguale, Full Stack Developer, React Developer, Next.js Developer, Web Developer Lagos, Freelance Web Developer, JavaScript Developer, TailwindCSS Expert, Node.js Developer, Hire Web Developer, Frontend Developer Nigeria, Portfolio Website Developer"
        canonicalUrl="https://forsythokoeguale.bio"
        structuredData={homeStructuredData}
      />
      <Hero/>
      {/* <SectionDivider /> */}
      <SkillsSwiper />
      {/* <SectionDivider /> */}
      <HoverAnimation />
      <SectionDivider />
      <Skills />
      {/* <SectionDivider /> */}
      {/* <Testimonials /> */}
      <Contact />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
