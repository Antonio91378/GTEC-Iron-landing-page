import React from "react";
import "./button.css";

interface buttonProps {
  buttonWidth: string;
  buttonHeight: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
}

const Button: React.FC<buttonProps> = ({
  buttonWidth,
  buttonHeight,
  buttonBackgroundColor,
  buttonTextColor,
}) => {
  const buttonStyle: React.CSSProperties = {
    "--button-width": buttonWidth,
    "--button-height": buttonHeight,
    "--button-backgroundColor": buttonBackgroundColor,
    "--button-textColor": buttonTextColor,
  } as React.CSSProperties;

  return (
    <div className="button" style={buttonStyle}>
      <a href="#">Entre em contato</a>
    </div>
  );
};

export default Button;
