import TabMenu from "./js/TabMenu/TabMenu.js";

const tabmenu = new TabMenu("tbmn", "selector", "content");

window.addEventListener("load", () => {
  const marker = document.querySelector(".marker");
  tabmenu.init(".tbmn-container"); // initialize the tab menu after the page loads

  tabmenu.selectors.forEach((selector, index) => {
    if (selector.dataset.active) {
      marker.style.top = (100 / tabmenu.selectors.length) * index + "%";
    }

    selector.addEventListener("click", () => {
      if (!index) {
        marker.style.top = 0 + "%";
      } else {
        marker.style.top = (100 / tabmenu.selectors.length) * index + "%";
      }
    });
  });
});
