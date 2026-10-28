import type { Meta, StoryObj } from '@storybook/react';
import { html } from '../../utils/html';
import markup from './accordion.html?raw';
import '../../00-constants/tokens.css';
import './accordion.css';

const darkMarkup = `<section class="scheme-dark">
${markup.trim().replace(/^/gm, '  ')}
</section>`;

const meta = {
  title: '01-Molecules/Accordion',
  render: html(markup),
  parameters: {
    layout: 'padded',
    docs: {
      source: { code: markup, language: 'html' },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion: Story = {};

export const DarkBand: Story = {
  render: html(darkMarkup),
  parameters: {
    docs: {
      source: { code: darkMarkup, language: 'html' },
    },
  },
};
