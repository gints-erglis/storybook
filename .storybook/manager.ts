import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Web Components',
  brandImage: 'logo.svg',
});

addons.setConfig({
  theme,
});