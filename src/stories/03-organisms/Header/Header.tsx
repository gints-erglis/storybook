import React from "react";
import Logo from "../../01-atoms/Logo";
import Navigation from "../../02-molecules/Navigation/Navigation";

import './header.scss';

const Header = ({ ...props }) => (
  <header {...props}>
    <div className={`wrapper header__content`}>
      <div className="branding">
        <Logo/>
      </div>
      <Navigation/>
    </div>
  </header>
);

export default Header;
