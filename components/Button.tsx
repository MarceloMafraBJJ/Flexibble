import Image from "next/image";
import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit";
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  bgColor?: string;
  textColor?: string;
}

const Button = ({
  title,
  type,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting,
  bgColor,
  textColor,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={isSubmitting}
      onClick={handleClick}
      className={`flexCenter gap-3 px-4 py-3 rounded-xl text-sm font-medium max-md:w-full ${
        isSubmitting ? "bg-black/50" : bgColor || "bg-primary-purple"
      }
      ${textColor || "text-white"}
        `}
    >
      {leftIcon && <Image src={leftIcon} alt="icon" width={14} height={14} />}

      {title}

      {rightIcon && <Image src={rightIcon} alt="icon" width={14} height={14} />}
    </button>
  );
};

export default Button;
