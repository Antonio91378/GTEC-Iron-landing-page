import React from "react";
import "./card.css";

interface CardProps {
  cardWidth: string;
  cardHeight: string;
  cardBackgroundColor: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  cardWidth,
  cardHeight,
  cardBackgroundColor,
  className,
  children,
}) => {
  const cardStyle: React.CSSProperties = {
    "--card-width": cardWidth,
    "--card-height": cardHeight,
    "--card-backgroundColor": cardBackgroundColor,
  } as React.CSSProperties;

  return (
    <div className={`card ${className}`} style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
