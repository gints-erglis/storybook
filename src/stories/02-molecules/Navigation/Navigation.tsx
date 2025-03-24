import React, { useEffect } from "react";

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
        <li><a href="/about">About</a></li>
        <li className="menu-item--expanded">
          <button aria-expanded="false" aria-haspopup="true">Has submenu</button>
          <ul className="menu" aria-hidden="true">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
