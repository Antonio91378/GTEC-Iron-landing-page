import React from "react";
import "./container.css";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#999",
        alignItems: "center",
      }}
      className={`Container ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
