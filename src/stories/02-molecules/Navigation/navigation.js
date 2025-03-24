import AccessibleMenu from './accessible-menu.js';
import AccessibleMegaMenu from './accessible-megamenu.js';

export default function Menu() {
  const navMenu = new AccessibleMenu('.menu-toggle', '#main-menu');
};

export function a11yMegamenu() {
  const navMegamenu = new AccessibleMegaMenu('#main-menu');
};
