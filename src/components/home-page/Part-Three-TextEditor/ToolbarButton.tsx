import React from "react";
import Image from "next/image";
import styles from "./TextEditor.module.css";

interface ToolbarButtonProps {
  icon: string;
  alt: string;
  onClick?: () => void;
  isActive?: boolean;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  icon,
  alt,
  onClick,
  isActive,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.toolbarButton} ${isActive ? styles.active : ""}`}
    >
      <Image src={icon} alt={alt} width={24} height={24} />
    </button>
  );
};

export default ToolbarButton;
