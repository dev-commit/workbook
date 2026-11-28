import type { DefaultTheme } from "vitepress";
import type {
  IBuildTopics,
  TSidebarTopicsItem,
  TSidebarTopicsItemStatus,
} from "../../types";

// Маркер «•» перед названием пункта. Статус красит маркер (стили - theme/styles/menu.css):
// done - синий, check - красный, doit - сиреневый квадрат.
// Экспорт - для превью пунктов на странице system/ui-kit/main/menu.md
export const getMarker = (
  status: TSidebarTopicsItemStatus | undefined,
): string => (status ? `<span class="sidebar-marker-${status}">•</span>` : "•");

// Текст пункта - без лишней разметки и пробелов: меню всех тем входит в данные сайта,
// которые загружает каждая страница
const getSidebarChildren = (
  children: TSidebarTopicsItem[],
  fullPath: string,
): DefaultTheme.SidebarItem[] =>
  children.map(([path, title, status]) => ({
    text: `${getMarker(status)} ${title}`,
    link: fullPath + path,
  }));

const buildSidebarFor = (
  data: IBuildTopics,
): Record<string, DefaultTheme.SidebarItem[]> => {
  const result: DefaultTheme.SidebarItem[] = data.topics.map(
    ({ title, children }) => ({
      text: title,
      items: getSidebarChildren(children, data.path),
    }),
  );
  return { [data.path]: result };
};

export const getSidebar = (
  items: IBuildTopics[],
): Record<string, DefaultTheme.SidebarItem[]> =>
  items.reduce(
    (acc, data) => ({ ...acc, ...buildSidebarFor(data) }),
    {} as Record<string, DefaultTheme.SidebarItem[]>,
  );
