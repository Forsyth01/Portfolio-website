import React from "react";
import { FiMail } from "react-icons/fi";
import SocialButton from "./SocialButton";
import { contactEmail } from "../../constants";

const Mailbtn = ({ color = "#1d1d1d", textColor = "#ffffff" }) => {
  return (
    <SocialButton
      icon={FiMail}
      label="Send a mail"
      href={`mailto:${contactEmail}`}
      isExternal={false}
      bgColor={color}
      textColor={textColor}
    />
  );
};

export default Mailbtn;
