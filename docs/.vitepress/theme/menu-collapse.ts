// Сворачивание меню на десктопе: левого (components/SidebarTop.vue) и верхнего с темами (components/VPNavbar.vue).
// Состояние - класс на <html> + запись в localStorage. Классы ставит скрипт в <head>
// ещё до отрисовки страницы (config.ts), чтобы свёрнутое меню не «мигало» при загрузке.
// Переключение - composables/useMenuCollapse.ts
export interface IMenuCollapse {
  className: string;
  storageKey: string;
}

export const SIDEBAR_COLLAPSE: IMenuCollapse = {
  className: "sidebar-collapsed",
  storageKey: "workbook-sidebar-collapsed",
};

export const NAVBAR_COLLAPSE: IMenuCollapse = {
  className: "navbar-collapsed",
  storageKey: "workbook-navbar-collapsed",
};

export const menuCollapsedHeadScript =
  "try{" +
  [SIDEBAR_COLLAPSE, NAVBAR_COLLAPSE]
    .map(
      ({ className, storageKey }) =>
        `if(localStorage.getItem("${storageKey}")==="1")` +
        `document.documentElement.classList.add("${className}");`,
    )
    .join("") +
  "}catch(e){}";
