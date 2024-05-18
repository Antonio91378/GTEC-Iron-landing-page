import React from "react";
import "./container.css";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}
const Container: React.FC<ContainerProps> = ({ className, children, id }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id={id}
      className={`Container ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
