import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { LinkCta1 } from './Link-cta-1';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Links/Link-CTA/Link-CTA-1',
  component: LinkCta1,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      source: {
        type: 'dynamic', // Dynamically generates the rendered HTML or JSX
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof LinkCta1>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Link CTA',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Link CTA',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Link CTA',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Link CTA',
  },
};
