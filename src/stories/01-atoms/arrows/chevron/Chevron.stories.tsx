import type { Meta, StoryObj } from '@storybook/react';
import { DocsPage, Source } from '@storybook/blocks';
import { Chevron } from './Chevron';
import cssCode from "./chevron.scss?raw";

// Static HTML template
const generateHtmlCode = (args) => {
  return `<span class="chevron chevron--${args.size} chevron--${args.direction}"></span>`;
};

const meta = {
  title: 'Atoms/Arrows/Chevron',
  component: Chevron,
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
        <Source language="css" code={cssCode} />
      </>
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Chevron>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    direction: 'top',
    size: 'medium',
    color: '#666',
  },
};

