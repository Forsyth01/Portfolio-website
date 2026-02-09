import React from "react";
import { FiLinkedin } from "react-icons/fi";
import SocialButton from "./SocialButton";
import { socialLinks } from "../../constants";

const Linkedinbtn = () => {
  const linkedin = socialLinks.find(link => link.id === 'linkedin');

  return (
    <SocialButton
      icon={FiLinkedin}
      label="Linkedin"
      href={linkedin.href}
      isExternal={true}
    />
  );
};

export default Linkedinbtn;
