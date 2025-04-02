import type { Meta, StoryObj } from '@storybook/react';
import { DocsPage, Source } from '@storybook/blocks';
import Card2 from './Card-2';
import cssCode from "./card-2.scss?raw";
import { Texts } from "../../../00-constants/Texts";

// Static HTML template
const generateHtmlCode = (args) => {
  return `<div class="card card--${args.direction}"></div>`;
};

const meta = {
  title: '01-Molecules/Cards/Card-2',
  component: Card2,
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
    color: { control: 'color' },
  },
} satisfies Meta<typeof Card2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    direction: 'vertical',
    description: Texts.paragraph1,
  },
};

