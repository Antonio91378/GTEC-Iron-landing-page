import Button from "../button/button";
import "./header.css";
import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
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
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src="/logo.png" alt="Logo" width={130} height={100} />
        <div className="slogan">
          <h3>ENGENHARIA QUE CONSTRÓI</h3>
        </div>
      </div>
      <ul className="navbar-list">
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
        <li className="navbar-item">
          <a onClick={() => handleScroll("#Contact")}>
            <Button
              buttonWidth="250px"
              buttonHeight="100%"
              buttonBackgroundColor="var(--darkColor)"
              buttonTextColor="var(--lightColor)"
              className="transitionButton navbarButton top"
            >
              Entre em contato
            </Button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
