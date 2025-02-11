import React from "react";
import Header from "../03-organisms/Header/Header";
import Footer from "../03-organisms/Footer/Footer";

import './page.scss';

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <div className={"page-content"}>
      <Header className={`header full-width`} />
      <main className={"content"}>
        {children}
      </main>
      <Footer className={"full-width"} />
    </div>
  );
};

export default PageTemplate;
