export default class TabMenuError {
  constructor(tabmenu) {
    this.tabmenu = tabmenu;
  }

  isSelectorContainerCorrect(selector) {
    const selectorSplitted = selector.split("-");
    const sl = selectorSplitted[0];

    if (sl.substr(1, sl.lenght) !== this.tabmenu.defaultTabmenuContainerBegin)
      throw new Error(
        `Selector must be started with ${
          this.tabmenu.defaultTabmenuContainerBegin
        }-[...]: "${selector}"${this.getSelectors()}`
      );

    return selectorSplitted;
  }

  check(selector) {
    this.isSelectorContainerCorrect(selector);

    this.tabmenu.container = document.querySelector(selector);

    if (!this.tabmenu.container)
      throw new Error(
        `No container with such selector: "${selector}"${this.getSelectors()}`
      );

    const selectorsSelector = `.${this.tabmenu.defaultTabmenuContainerBegin}-${this.tabmenu.defaultTabmenuSelectorBegin}`;
    const contentsSelector = `${selectorsSelector}-${this.tabmenu.defaultTabmenuSelectorContentBegin}`;

    this.tabmenu.selectors = Array.from(
      this.tabmenu.container.querySelectorAll(selectorsSelector)
    );
    this.tabmenu.contents = Array.from(
      this.tabmenu.container.querySelectorAll(contentsSelector)
    );

    if (!this.tabmenu.selectors.length)
      throw new Error(
        `No selectors "${selectorsSelector}" were founded inside ${selector}`
      );

    if (!this.tabmenu.contents.length)
      throw new Error(
        `No contents "${contentsSelector}" were founded inside ${selector}`
      );

    if (this.tabmenu.contents.length !== this.tabmenu.selectors.length)
      throw new Error(
        `Length of ${selectorsSelector} is not equal to length of ${contentsSelector}`
      );

    for (const selector of this.tabmenu.selectors) {
      let hasAppropriateSelectorId = false;
      const selectorId = selector.dataset.id;

      for (const content of this.tabmenu.contents) {
        const contentId = content.dataset.id;

        if (selectorId === contentId) {
          hasAppropriateSelectorId = true;
          break;
        }
      }

      if (!hasAppropriateSelectorId)
        throw new Error(
          `Couldn't find appropriate index for data-id="${selectorId}"`
        );
    }
  }

  getSelectors() {
    return `\nDefault tabmenu selectors are: ${this.tabmenu.defaultTabmenuContainerBegin}, ${this.tabmenu.defaultTabmenuSelectorBegin}, ${this.tabmenu.defaultTabmenuSelectorContentBegin}`;
  }
}
