import "./Section.css";
import React from "react";

interface SectionProps {
  SectionHeight: string;
  sectionBackgroundColor: string;
  className?: string;
  children?: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({
  SectionHeight,
  sectionBackgroundColor,
  className,
  children,
}) => {
  const cardStyle: React.CSSProperties = {
    "--section-height": SectionHeight,
    "--section-backgroundColor": sectionBackgroundColor,
  } as React.CSSProperties;

  return (
    <div className={`Section ${className}`} style={cardStyle}>
      {children}
    </div>
  );
};

export default Section;
