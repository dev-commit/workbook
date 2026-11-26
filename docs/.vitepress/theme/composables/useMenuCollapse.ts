import { onMounted, ref } from "vue";
import type { IMenuCollapse } from "../menu-collapse";

// Свернуть / развернуть меню (menu-collapse.ts): класс на <html> + запись в localStorage
export function useMenuCollapse({ className, storageKey }: IMenuCollapse) {
  const isCollapsed = ref(false);

  function applyClass() {
    document.documentElement.classList.toggle(className, isCollapsed.value);
  }

  // Читаем localStorage сами, а не только класс: на dev-сервере скрипт из <head>
  // выполняется уже после запуска Vue
  onMounted(() => {
    try {
      isCollapsed.value = localStorage.getItem(storageKey) === "1";
    } catch {
      isCollapsed.value =
        document.documentElement.classList.contains(className);
    }
    applyClass();
  });

  function toggleCollapsed() {
    isCollapsed.value = !isCollapsed.value;
    applyClass();
    try {
      localStorage.setItem(storageKey, isCollapsed.value ? "1" : "0");
    } catch {
      // localStorage недоступен (приватный режим) - состояние живёт до перезагрузки
    }
  }

  return { isCollapsed, toggleCollapsed };
}
