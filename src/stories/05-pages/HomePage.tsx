import React from "react";
import { Texts } from "../00-constants/Texts";
import PageTemplate from "../04-templates/PageTemplate";
import Grid from "../04-templates/Grid/Grid";
import Card from "../02-molecules/Cards/Card-1/Card-1";

const HomePage = () => {
  return (
    <PageTemplate>
      <section>
        <h2>Welcome!</h2>
        <p>This is the example page.</p>
        <Grid className="grid-auto-fit">
          <Card
            heading="Card title"
            linkLabel="Read more"
            description={Texts.paragraph1}
          />
          <Card
            heading="Card title"
            linkLabel="Read more"
            description={Texts.paragraph2}
          />
          <Card
            heading="Card title"
            linkLabel="Read more"
            description={Texts.paragraph3}
          />
        </Grid>
      </section>
    </PageTemplate>
  );
};

export default HomePage;
