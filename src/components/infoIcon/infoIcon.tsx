// InfoIcon.tsx
"use client";
import React, { useState } from "react";
import "./infoIcon.css"; // Importando o arquivo CSS

interface InfoIconProps {
  text: string; // O texto que será exibido no balãozinho
}

const InfoIcon: React.FC<InfoIconProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="infoIcon"
      >
        <div className="iconLetter">i</div>

        {isHovered && (
          <p style={{ opacity: 1 }} className="tooltip">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default InfoIcon;
