import type { Meta, StoryObj } from '@storybook/react';
import { DocsPage, Source } from '@storybook/blocks';
import Checkbox from './Checkbox';
import cssCode from "./checkbox1.scss?raw";

// Static HTML template
const generateHtmlCode = (args) => {
  return `<div class="checkbox checkbox--${args.size}">
  <input  id="1" type="checkbox">
  <label for="1">${args.label}</label>
</div>`
};

const meta = {
  title: '00-Atoms/Forms/Checkboxes/Checkbox-1',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'This is a styled checkbox style.',
      },
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Custom checkbox',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Custom checkbox',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Custom checkbox',
  },
};