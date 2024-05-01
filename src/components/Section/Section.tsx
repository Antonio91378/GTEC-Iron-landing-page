import Button from "../button/button";
import Card from "../card/card";
import "./Section.css";
import React from "react";

interface SectionProps {
  SectionHeight: string;
  children?: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ SectionHeight, children }) => {
  const cardStyle: React.CSSProperties = {
    "--section-height": SectionHeight,
  } as React.CSSProperties;

  return (
    <div className="Section" style={cardStyle}>
      {children}
    </div>
  );
};

export default Section;
