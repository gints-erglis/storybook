import type { Meta, StoryObj } from '@storybook/react';
import { DocsPage, Source } from '@storybook/blocks';
import { Arrow1 } from './Arrow-1';
import cssCode from "./arrow-1.scss?raw";

// Static HTML template
const generateHtmlCode = (args) => {
  return `<span class="arrow arrow--${args.size} arrow--${args.direction}"></span>`;
};

const meta = {
  title: 'Atoms/Arrows/Arrow1',
  component: Arrow1,
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
} satisfies Meta<typeof Arrow1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    direction: 'top',
    size: 'medium',
    color: '#666',
  },
};

