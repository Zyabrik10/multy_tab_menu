export default class TabMenuAction {
  constructor(tabmenu) {
    this.tabmenu = tabmenu;
    this.last = {
      selector: undefined,
      content: undefined,
    };
  }

  init() {
    const { selectors } = this.tabmenu;
    let isActiveSet = false;

    selectors.forEach((selector, index) => {
      const isActive = selector.dataset.active;

      if (isActive && !isActiveSet) {
        this.setActive(selector);
        isActiveSet = true;
      } else if (index + 1 === selectors.length && !isActiveSet) {
        // If no active tab is found, activate the first one.
        this.setActive(selectors[0]);
      }

      selector.addEventListener("click", (e) => {
        e.preventDefault();

        this.setActive(selector);
      });
    });
  }

  setActive(selector) {
    const selectorId = selector.dataset.id;

    this.tabmenu.contents.forEach((content) => {
      const contentId = content.dataset.id;

      if (selectorId === contentId) {
        if (this.last.selector && this.last.content) {
          this.last.selector.classList.remove("active");
          this.last.content.classList.remove("active");
        }

        selector.classList.add("active");
        content.classList.add("active");

        this.last = {
          content,
          selector,
        };

        return;
      }
    });
  }
}
