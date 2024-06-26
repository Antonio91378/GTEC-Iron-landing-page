import React from "react";
import "./card.css";

interface CardProps {
  cardTitle?: string;
  cardWidth?: string;
  cardHeight?: string;
  cardBackgroundColor?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const cardStyle: React.CSSProperties = {
    "--card-width": props.cardWidth,
    "--card-height": props.cardHeight,
    "--card-backgroundColor": props.cardBackgroundColor,
  } as React.CSSProperties;

  return (
    <div className={`card ${props.className}`} style={cardStyle}>
      {props.children}
    </div>
  );
};

export default Card;
