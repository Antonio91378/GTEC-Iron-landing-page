import "./header.css";
import React from "react";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

const FooterNav: React.FC<HeaderProps> = ({ className }) => {
  const handleScroll = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top - 100;
      window.scrollTo({
        top: window.pageYOffset + topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${className}`}>
      <ul className="navbar-list">
        <li className="navbar-logo">
          <Image src="/logo.png" alt="Logo" width={130} height={80} />
        </li>
        <li className="navbar-item">
          <a onClick={() => handleScroll("#About")} className="navbar-link">
            Sobre nós
          </a>
        </li>
        <li className="navbar-item">
          <a onClick={() => handleScroll("#Services")} className="navbar-link">
            Nossos serviços
          </a>
        </li>
        <li className="navbar-item">
          <a
            onClick={() => handleScroll("#Portifolio")}
            className="navbar-link"
          >
            Nossos clientes
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
