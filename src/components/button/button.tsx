import React from "react";
import "./button.css";

interface buttonProps {
  buttonWidth: string;
  buttonHeight: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<buttonProps> = ({
  buttonWidth,
  buttonHeight,
  buttonBackgroundColor,
  buttonTextColor,
  className,
  children,
}) => {
  const buttonStyle: React.CSSProperties = {
    "--button-width": buttonWidth,
    "--button-height": buttonHeight,
    "--button-backgroundColor": buttonBackgroundColor,
    "--button-textColor": buttonTextColor,
  } as React.CSSProperties;

  return (
    <div className={`button ${className}`} style={buttonStyle}>
      <a href="#">{children}</a>
    </div>
  );
};

export default Button;
