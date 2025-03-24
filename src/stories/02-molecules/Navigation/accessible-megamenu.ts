// How to use
// import AccessibleMegaMenu from './accessible-megamenu.js';
//
// document.addEventListener('DOMContentLoaded', () => {
//   new AccessibleMegaMenu('.main-nav'); // pass your nav container class
// });

export default class AccessibleMegaMenu {
  constructor(navSelector) {
    this.nav = document.querySelector(navSelector);
    if (!this.nav) return;

    this.menuItems = this.nav.querySelectorAll('.menu-item--expanded');
    this.bindEvents();
  }

  bindEvents() {
    this.menuItems.forEach(item => {
      const button = item.querySelector('button, a');
      const submenu = item.querySelector('ul');

      if (!button || !submenu) return;

      // Init ARIA
      button.setAttribute('aria-expanded', 'false');
      submenu.setAttribute('aria-hidden', 'true');

      // Keyboard support
      button.addEventListener('keydown', e => this.handleKeyDown(e, item, submenu));
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleSubmenu(e, button, submenu);
      });

      // Optional hover behavior
      // item.addEventListener('mouseenter', () => this.openSubmenu(button, submenu));
      // item.addEventListener('mouseleave', () => this.closeSubmenu(button, submenu));
    });

    // Close on Escape globally
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.closeAllSubmenus();
    });
  }

  handleKeyDown(e, item, submenu) {
    const key = e.key;

    switch (key) {
      case 'ArrowDown':
        e.preventDefault();
        this.focusFirstChild(submenu);
        break;
      case 'Tab':
        // Let Tab work naturally
        break;
      case 'Escape':
        this.closeSubmenu(item.querySelector('button, a'), submenu);
        item.querySelector('button, a')?.focus();
        break;
    }
  }

  toggleSubmenu(e, button, submenu) {
    e.preventDefault();
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    this.closeAllSubmenus();

    if (!isOpen) {
      this.openSubmenu(button, submenu);
    }
  }

  openSubmenu(button, submenu) {
    button.setAttribute('aria-expanded', 'true');
    submenu.setAttribute('aria-hidden', 'false');
  }

  closeSubmenu(button, submenu) {
    button.setAttribute('aria-expanded', 'false');
    submenu.setAttribute('aria-hidden', 'true');
  }

  closeAllSubmenus() {
    this.menuItems.forEach(item => {
      const button = item.querySelector('button, a');
      const submenu = item.querySelector('ul');

      if (button && submenu) {
        button.setAttribute('aria-expanded', 'false');
        submenu.setAttribute('aria-hidden', 'true');
      }
    });
  }

  focusFirstChild(submenu) {
    const firstItem = submenu.querySelector('a, button');
    firstItem?.focus();
  }
}
