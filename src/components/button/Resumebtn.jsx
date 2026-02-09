import React from "react";
import { FiFile } from "react-icons/fi";
import SocialButton from "./SocialButton";
import { resumeLink } from "../../constants";

const Resumebtn = () => {
  return (
    <SocialButton
      icon={FiFile}
      label={resumeLink.label}
      href={resumeLink.href}
      isDownload={true}
      downloadFilename={resumeLink.filename}
    />
  );
};

export default Resumebtn;
