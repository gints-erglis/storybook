import React from "react";

import './layout.scss';

interface LayoutProps {
  sidebar?: React.ReactNode; // Optional sidebar
  children: React.ReactNode; // Main content
}

const Layout: React.FC<LayoutProps> = ({ sidebar, children }) => {
  return (
    <div className="layout layout--sidebar">
      {sidebar && <aside className="layout__sidebar">{sidebar}</aside>}
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;
