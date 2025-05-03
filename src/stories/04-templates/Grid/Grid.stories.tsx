import { Meta, StoryObj } from "@storybook/react";
import Grid from "./Grid";
import Card from "../../02-molecules/Cards/Card-1/Card-1";
import cssCode from "./grid.scss?raw";
import {DocsPage, Source} from "@storybook/blocks";
import {Texts} from "../../00-constants/Texts";
import React from "react";

// Static HTML template
const generateHtmlCode = (args) => {
  return `<div class="grid grid-auto-fit"></div>`;
};

const meta = {
  title: '04-Templates/Grid/Grid-autofit',
  component: Grid,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        transform: (input, storyContext) => {
          return generateHtmlCode(storyContext.args);
        },
        language: "html",
      },
      page: () => (
        <>
          <DocsPage />
          <h3>CSS Code</h3>
          <Source language="css" dark="true" code={cssCode} />
        </>
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Sets the item size inside the grid.',
      table: {
        type: { summary: `'small' | 'medium' | 'large'` },
        defaultValue: { summary: 'medium' },
      },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autofit: Story = {
  args: {
    size: 'medium',
    className: 'grid-auto-fit',
    children: (
      <>
        <Card
          mode="aligned"
          heading="Card title"
          linkLabel="Read more"
          description={Texts.paragraph1}
        />
        <Card
          mode="aligned"
          heading="Card title"
          linkLabel="Read more"
          description={Texts.paragraph2}
        />
        <Card
          mode="aligned"
          heading="Card title"
          linkLabel="Read more"
          description={Texts.paragraph3}
        />
        <Card
          mode="aligned"
          heading="Card title"
          linkLabel="Read more"
          description={Texts.paragraph1}
        />
        <Card
          mode="aligned"
          heading="Card title"
          linkLabel="Read more"
          description={Texts.paragraph2}
        />
        <Card
          mode="aligned"
          heading="Card title"
          linkLabel="Read more"
          description={Texts.paragraph3}
        />
      </>
    ),
  },
};