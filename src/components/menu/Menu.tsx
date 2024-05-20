import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Menu.css";

const Menu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [exitIconInvoke, setexitIconInvoke] = useState(false);
  const [activeMenuDropDown, setActiveMenuDropDown] = useState(false);

  const handleScroll = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top - 20;
      window.scrollTo({
        top: window.pageYOffset + topOffset,
        behavior: "smooth",
      });
    }
  };

  const handleClick = () => {
    if (!activeMenu) {
      setTimeout(() => {
        setActiveMenu(!activeMenu);
        setActiveMenuDropDown(!activeMenuDropDown);

        // Segundo setTimeout para setexitIconInvoke após 1 segundo
        setTimeout(() => {
          setexitIconInvoke(!exitIconInvoke);
        }, 300); // 1000ms = 1 segundo
      }, 0); // 0ms para iniciar imediatamente
    } else {
      setTimeout(() => {
        setexitIconInvoke(!exitIconInvoke);

        // Segundo setTimeout para setexitIconInvoke após 1 segundo
        setTimeout(() => {
          setActiveMenu(!activeMenu);
          setActiveMenuDropDown(!activeMenuDropDown);
        }, 300); // 1000ms = 1 segundo
      }, 0); // 0ms para iniciar imediatamente
    }
  };

  return (
    <div className="menu-container">
      <div
        onClick={handleClick}
        className={
          activeMenu ? "menuClick-animation" : "menuClick-exitAnimation"
        }
      >
        <FiMenu size="2rem" color="var(--text)" />
      </div>
      <div
        id="exitIcon"
        onClick={handleClick}
        className={
          exitIconInvoke ? "exitIcon-animation" : "exitIcon-exitAnimation"
        }
      >
        <FiX size="2rem" color="var(--text)" />
      </div>
      <ul className={activeMenu ? "open" : ""}>
        <li>
          <a onClick={() => handleScroll("#About")}>Sobre nós</a>
        </li>
        <li>
          <a onClick={() => handleScroll("#Services")}>Nossos serviços</a>
        </li>
        <li>
          <a onClick={() => handleScroll("#Portifolio")}>Nossos clientes</a>
        </li>
        <li>
          <a onClick={() => handleScroll("#Portifolio")}>Entre em contato</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
