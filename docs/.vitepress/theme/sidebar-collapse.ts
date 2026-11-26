// Свёрнутое левое меню на десктопе (кнопка в components/VPSidebar.vue).
// Состояние - класс на <html> + запись в localStorage. Класс ставится скриптом в <head>
// ещё до отрисовки страницы (config.ts), чтобы свёрнутое меню не «мигало» при загрузке
export const SIDEBAR_COLLAPSED_CLASS = "sidebar-collapsed";
export const SIDEBAR_COLLAPSED_STORAGE_KEY = "workbook-sidebar-collapsed";

export const sidebarCollapsedHeadScript =
  `try{if(localStorage.getItem("${SIDEBAR_COLLAPSED_STORAGE_KEY}")==="1")` +
  `document.documentElement.classList.add("${SIDEBAR_COLLAPSED_CLASS}")}catch(e){}`;
