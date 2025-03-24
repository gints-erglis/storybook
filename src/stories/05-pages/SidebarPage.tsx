import React from "react";
import { Texts } from "../00-constants/Texts";
import PageTemplate from "../04-templates/PageTemplate";
import Grid from "../04-templates/Grid/Grid";
import Card from "../02-molecules/Cards/Card-1/Card-1";
import Layout from "../03-organisms/Layout/Layout";

const HomePage = () => {
  return (
    <PageTemplate>
      <Layout sidebar={<div>Sidebar Content</div>}>
        <div>Main Content</div>
      </Layout>
    </PageTemplate>
  );
};

export default HomePage;
