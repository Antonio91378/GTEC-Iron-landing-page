"use Client";
import React, { Children } from "react";
import "./card.css";
import { MageCupHot } from "../icons/MageCupHot";

interface CardProps {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  cardTitle?: string;
  cardWidth?: string;
  cardHeight?: string;
  cardBackgroundColor?: string;
  children?: React.ReactNode;
  className?: string;
}

const GridCard: React.FC<CardProps> = (props) => {
  const IconComponent = props.icon as React.FC<React.SVGProps<SVGSVGElement>>;

  const cardStyle: React.CSSProperties = {
    "--card-width": props.cardWidth,
    "--card-height": props.cardHeight,
    "--card-backgroundColor": props.cardBackgroundColor,
  } as React.CSSProperties;

  return (
    <div className={`card ${props.className}`} style={cardStyle}>
      <IconComponent className="icon" />
      <h3>{props.cardTitle}</h3>
      <p>{props.children}</p>
    </div>
  );
};

export default GridCard;
