import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Web Components',
  brandImage: 'public/logo.svg',
});

addons.setConfig({
  theme,
});