import { binaryblock, posze } from "@/assets/images";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProjectPreview from "./ProjectPreviewCard";
import ProjectHead from "./ProjectHeader";

function Card() {

  return (
    <div className="sm:w-[70%] xl:w-[60%] m-auto py-10">
      <ProjectHead/>
      <ProjectPreview /> 
    </div>
  );
}

export default Card;
