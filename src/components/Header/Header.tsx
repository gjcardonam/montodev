import React from "react";
import "./Header.css";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="header">
      <div>
        <a className="logo" href="#">
          MontoDev
        </a>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#Skills">Skills/Experience</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
