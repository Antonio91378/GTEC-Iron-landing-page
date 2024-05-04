import Button from "../button/button";
import Card from "../card/card";
import "./header.css";
import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-logo">
          <Image src="/logo.png" alt="Logo" width={130} height={80} />
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Sobre nós
          </a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">
            Nossos serviços
          </a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">
            Nossos clientes
          </a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">
            Posts
          </a>
        </li>
        <li className="navbar-item">
          <Button
            buttonWidth="250px"
            buttonHeight="100%"
            buttonBackgroundColor="var(--darkColor)"
            buttonTextColor="var(--lightColor)"
            className="transitionButton navbarButton"
          >
            Entre em contato
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
