import React from "react";
import Logo from "../../01-atoms/Logo";
import Navigation from "../../02-molecules/Navigation/Navigation.tsx";

import './header.scss';

const Header = ({ ...props }) => (
  <header {...props}>
    <div className={`wrapper header__content`}>
      <div className="branding">
        <Logo/>
      </div>
      <Navigation/>
      <button className="menu-toggle" aria-expanded="false" aria-controls="menu-items" aria-label="Toggle navigation">
        <span className="menu-toggle__icon"></span>
      </button>
    </div>
  </header>
);

export default Header;
