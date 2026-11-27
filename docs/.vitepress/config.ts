import { defineConfig, type Plugin } from "vitepress";
import { NAV, SIDEBAR } from "../wiki/builder";
import AppConfig, { Projects } from "../app-config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type {
  IHeaderMenuNavChildren,
  TThemeConfigNav,
  TThemeConfigNavItem,
} from "../types";
import { menuCollapsedHeadScript } from "./theme/menu-collapse";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE = AppConfig.BasePath;

// Пункты навбара тем (VPNavbar.vue): null в build-*.ts - перенос строки,
// следующий за ним пункт получает флаг newRow
const getNavItems = (
  children: Array<IHeaderMenuNavChildren | null>,
): TThemeConfigNavItem[] => {
  const items: TThemeConfigNavItem[] = [];
  let newRow = false;
  for (const child of children) {
    if (!child) {
      newRow = items.length > 0;
      continue;
    }
    items.push(newRow ? { ...child, newRow } : child);
    newRow = false;
  }
  return items;
};

const customNavComposablePath = path.resolve(
  __dirname,
  "theme",
  "composables",
  "nav.js",
);

// Подмена useNav темы VitePress своей копией (theme/composables/nav.js).
// Опирается на внутренности VitePress: если после обновления подмена перестанет срабатывать
// (файл переименован, изменился импорт в VPNav.vue), сборка остановится с ошибкой
const customNavComposablePlugin = (): Plugin => {
  let isBuild = false;
  return {
    name: "resolve-custom-nav-composable",
    enforce: "pre",
    configResolved(config) {
      isBuild = config.command === "build";
    },
    resolveId(id, importer) {
      const fromDefaultTheme =
        importer && importer.replace(/\\/g, "/").includes("theme-default");
      const isNavComposable =
        id === "../composables/nav" ||
        id.replace(/\\/g, "/").endsWith("composables/nav.js");
      if (fromDefaultTheme && isNavComposable) {
        return customNavComposablePath;
      }
    },
    // Проверка по графу модулей каждой сборки (клиентской и SSR):
    // в нём должна быть наша копия и не должно быть оригинала
    buildEnd(error) {
      if (!isBuild || error) return;
      const ids = [...this.getModuleIds()].map((id) => id.replace(/\\/g, "/"));
      const hasCustom = ids.includes(
        customNavComposablePath.replace(/\\/g, "/"),
      );
      const hasOriginal = ids.some((id) =>
        id.includes("/theme-default/composables/nav."),
      );
      if (!hasCustom || hasOriginal) {
        this.error(
          "Подмена composables/nav.js темы VitePress не сработала " +
            "(плагин resolve-custom-nav-composable в docs/.vitepress/config.ts). " +
            "Скорее всего, после обновления VitePress изменился файл composables/nav.js " +
            "или его импорт в VPNav.vue (node_modules/vitepress/dist/client/theme-default)",
        );
      }
    },
  };
};

export default defineConfig({
  base: BASE,
  lang: "ru-RU",
  title: AppConfig.Title,
  description: AppConfig.Description,
  // Только светлая тема: стили справочника рассчитаны на светлый фон
  appearance: false,
  // Данные сайта (меню всех тем, карта страниц) - отдельным файлом, а не внутри каждой страницы:
  // иначе это ~370 КБ в каждом HTML, и любой деплой меняет все страницы
  metaChunk: true,
  head: [
    ["link", { rel: "icon", href: BASE + "favicon.svg" }],
    ["meta", { name: "theme-color", content: AppConfig.ThemeMobileColor }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    // Свёрнутые левое и верхнее меню (theme/menu-collapse.ts)
    ["script", {}, menuCollapsedHeadScript],
  ],
  srcExclude: Object.values(Projects)
    .map((p) => p.WikiDir)
    .filter((d) => d !== AppConfig.WikiDir)
    .map((d) => `${AppConfig.RootDir}/${d}/**`),
  // Битая ссылка - ошибка сборки. Кроме localhost: в примерах есть адреса локального сервера
  ignoreDeadLinks: "localhostLinks",
  // Отступ сверху при переходе к заголовку по якорю: 16px под локальной навигацией
  // мобильной версии (VPLocalNav). На десктопе она скрыта (низ = 0) - отступ 16px от края
  scrollOffset: { selector: [".VPLocalNav", ".VPNav"], padding: 16 },
  // Адреса страниц без .html (GitHub Pages отдаёт /page как /page.html)
  cleanUrls: true,
  // Адреса страниц без префикса wiki/<проект>/: файлы лежат в docs/wiki/dev-commit/...,
  // а страница открывается как /js/js/... (ссылки меню строятся от rootPath в wiki/constants.ts)
  rewrites: {
    [`${AppConfig.RootDir}/${AppConfig.WikiDir}/:rest*`]: ":rest*",
  },
  vite: {
    define: {
      // Абсолютный путь папки docs: для ссылки «открыть файл в редакторе» (OpenInEditor.vue)
      __DOCS_ROOT__: JSON.stringify(path.resolve(__dirname, "..")),
    },
    resolve: {
      alias: {
        docs: path.join(__dirname, ".."),
      },
    },
    // mark.js (подсветка в поиске) - исходники ESM без "type": "module", при SSR их нужно собрать
    ssr: {
      noExternal: ["mark.js"],
    },
    plugins: AppConfig.CustomLayout ? [customNavComposablePlugin()] : [],
  },
  themeConfig: {
    logo: "/logo.png",
    nav: NAV.map((group) => ({
      text: group.text,
      items: getNavItems(group.children),
    })) satisfies TThemeConfigNav[],
    sidebar: SIDEBAR,
    outline: { level: [2, 3], label: "На этой странице" },
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "Поиск", buttonAriaLabel: "Поиск" },
          modal: {
            displayDetails: "Подробный список",
            resetButtonTitle: "Сбросить поиск",
            backButtonTitle: "Закрыть поиск",
            noResultsText: "Ничего не найдено по запросу",
            footer: {
              selectText: "выбрать",
              selectKeyAriaLabel: "Enter",
              navigateText: "перейти",
              navigateUpKeyAriaLabel: "Стрелка вверх",
              navigateDownKeyAriaLabel: "Стрелка вниз",
              closeText: "закрыть",
              closeKeyAriaLabel: "Esc",
            },
          },
        },
      },
    },
    // Скрыть внизу страницы ссылки на предыдущую / следующую страницу
    docFooter: { prev: false, next: false },
    // Подписи интерфейса VitePress (мобильная шапка, 404)
    sidebarMenuLabel: "Меню",
    returnToTopLabel: "Наверх",
    skipToContentLabel: "Перейти к содержимому",
    notFound: {
      title: "Страница не найдена",
      quote: "Возможно, страница переехала или в адресе опечатка",
      linkLabel: "Перейти на главную",
      linkText: "На главную",
    },
  },
  markdown: {
    theme: "one-light",
    html: true,
    codeCopyButtonTitle: "Скопировать код",
    codeTransformers: [
      // В теме one-light «недопустимые» токены (н-р, неизвестный HTML-тег <content>)
      // - белый текст на красном фоне. Фон VitePress не выводит, и текст не виден.
      // Красим их в цвет обычных тегов темы
      {
        name: "visible-invalid-tokens",
        span(node) {
          const style = node.properties.style;
          if (typeof style === "string" && /color:\s*white/i.test(style)) {
            node.properties.style = style.replace(
              /color:\s*white/i,
              "color:#E45649",
            );
          }
        },
      },
    ],
  },
});
