import AccessibleMenu from './accessible-menu.ts';
import AccessibleMegaMenu from './accessible-megamenu.ts';

export default function Menu() {
  const navMenu = new AccessibleMenu('.menu-toggle', '#main-menu');
};

export function a11yMegamenu() {
  const navMegamenu = new AccessibleMegaMenu('#main-menu');
};
