import React, { useEffect } from "react";
import { Chevron } from "../../01-atoms/arrows/chevron/Chevron";
import './navigation.scss';
import Menu, { a11yMegamenu } from './menu.ts';

const Navigation = () => {
  useEffect(() => {

    Menu();
    a11yMegamenu();
  }, []);
  return (
    <nav id="main-menu">
      <ul className="menu menu-main">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li className="menu-item--expanded">
          <a href="/">User area</a>
          <button aria-expanded="false" aria-haspopup="true">
            <Chevron direction='bottom'/>
            <span className="visually-hidden">Open submenu: User area</span>
          </button>
          <ul className="menu" aria-hidden="true">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
