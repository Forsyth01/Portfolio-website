import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable social button component
 * @param {Object} props
 * @param {React.ElementType} props.icon - Icon component from react-icons
 * @param {string} props.label - Button text
 * @param {string} props.href - Link URL
 * @param {boolean} props.isExternal - Whether link opens in new tab (default: true)
 * @param {boolean} props.isDownload - Whether it's a download link
 * @param {string} props.downloadFilename - Filename for download
 * @param {string} props.bgColor - Background color (default: white)
 * @param {string} props.textColor - Text color (default: #1d1d1d)
 * @param {string} props.className - Additional classes
 */
const SocialButton = ({
  icon: Icon,
  label,
  href,
  isExternal = true,
  isDownload = false,
  downloadFilename,
  bgColor = "white",
  textColor = "#1d1d1d",
  className = "",
}) => {
  const buttonClasses = `flex items-center gap-2 hover:scale-[106%] transition-all sm:px-8 py-2 px-4 rounded-md sm:rounded-full duration-500 text-center ${className}`;

  const buttonContent = (
    <button
      className={buttonClasses}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {Icon && <Icon style={{ color: textColor }} />}
      <p className="text-sm text-center" style={{ color: textColor }}>
        {label}
      </p>
    </button>
  );

  // Download link
  if (isDownload) {
    return (
      <div>
        <a href={href} download={downloadFilename || true}>
          {buttonContent}
        </a>
      </div>
    );
  }

  // External link (opens in new tab)
  if (isExternal) {
    return (
      <div>
        <Link to={href} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </Link>
      </div>
    );
  }

  // Internal link
  return (
    <div>
      <Link to={href}>
        {buttonContent}
      </Link>
    </div>
  );
};

export default SocialButton;
