import TabMenuAction from "./TabMenuAction.js";
import TabMenuError from "./TabMenuError.js";

export default class TabMenu {
  constructor(
    defaultTabmenuContainerBegin,
    defaultTabmenuSelectorBegin,
    defaultTabmenuSelectorContentBegin
  ) {
    this.defaultTabmenuContainerBegin = defaultTabmenuContainerBegin;
    this.defaultTabmenuSelectorBegin = defaultTabmenuSelectorBegin;
    this.defaultTabmenuSelectorContentBegin =
      defaultTabmenuSelectorContentBegin;

    this.tabMenuError = new TabMenuError(this);
    this.tabMenuAction = new TabMenuAction(this);
  }

  init(selector) {
    /* tabMenuError checks selectors and other things and 
    also sets this.container, this.selector, this.contents */
    this.tabMenuError.check(selector);
    /* tabMenuAction is a class where are all mechanics connected to tabmenu*/
    this.tabMenuAction.init();
  }
}
