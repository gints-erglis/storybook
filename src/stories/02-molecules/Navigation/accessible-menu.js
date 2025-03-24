export default class AccessibleMenu {
  constructor(toggleSelector, menuSelector) {
    this.toggleButton = document.querySelector(toggleSelector);
    this.menu = document.querySelector(menuSelector);
    this.focusableElements = [];
    this.firstEl = null;
    this.lastEl = null;

    if (this.toggleButton && this.menu) {
      this.init();
    }
  }

  init() {
    this.toggleButton.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    const isExpanded = this.toggleButton.getAttribute("aria-expanded") === "true";
    const newState = !isExpanded;

    this.toggleButton.setAttribute("aria-expanded", newState.toString());
    this.menu.style.visibility = newState ? "visible" : "hidden";
    this.menu.setAttribute("aria-hidden", (!newState).toString());

    if (newState) {
      this.trapFocus();
    } else {
      this.releaseFocus();
    }
  }

  trapFocus() {
    this.focusableElements = this.menu.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    this.firstEl = this.focusableElements[0];
    this.lastEl = this.focusableElements[this.focusableElements.length - 1];

    if (this.firstEl) this.firstEl.focus();
    document.addEventListener("keydown", this.handleTrapKeys);
  }

  releaseFocus() {
    document.removeEventListener("keydown", this.handleTrapKeys);
    this.toggleButton.focus();
  }

  handleTrapKeys = (e) => {
    const isTab = e.key === "Tab" || e.keyCode === 9;
    const isEsc = e.key === "Escape" || e.keyCode === 27;

    if (isEsc) {
      this.toggleButton.click(); // Close menu
    }

    if (!isTab || this.focusableElements.length === 0) return;

    if (e.shiftKey && document.activeElement === this.firstEl) {
      e.preventDefault();
      this.lastEl.focus();
    } else if (!e.shiftKey && document.activeElement === this.lastEl) {
      e.preventDefault();
      this.firstEl.focus();
    }
  };
}

// You can reuse this anywhere
// const navMenu = new AccessibleMenu(".menu-toggle", ".menu");