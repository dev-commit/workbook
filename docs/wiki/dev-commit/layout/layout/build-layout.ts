import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/layout/";
const title = "Layout";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/style-priority", emoji.theory + "Приоритетность стилей"],
      ["main/custom-properties", "Custom Properties"],
    ],
  },

  {
    title: "Layout",
    children: [
      ["layout/info", emoji.theory + "Информация"],
      ["layout/float", "CSS float"],
      ["layout/inline-block", "CSS inline-block"],
      ["layout/css-multi-columns", "CSS Multi Columns"],
      ["layout/css-exclusions", "CSS Exclusions (IE)"],
      ["layout/position", getThemeMenu("method", ["position", "z-index"])],
      ["layout/display", getThemeMenu("method", ["display"])],
    ],
  },

  {
    title: "Геометрия и преобразования",
    children: [
      ["geometry/transition", getThemeMenu("method", ["transition"])],
      ["geometry/transform", getThemeMenu("method", ["transform"])],
      [
        "geometry/animation",
        getThemeMenu("method", ["animation", "@keyframes"]),
      ],
      [
        "geometry/filter",
        getThemeMenu("method", ["filter", "backdrop-filter"]),
      ],
      ["geometry/clip-path", getThemeMenu("method", ["clip-path"])],
      ["geometry/blend-modes", "CSS Blend Modes"],
      // ["geometry/", 'CSS Shapes'],
      // ["geometry/", 'CSS Masking'],
    ],
  },

  {
    title: "Примеры и особенности",
    children: [
      ["samplaes/collapse-margin", emoji.code + "Схлопывание внешних отступов"],
      [
        "samplaes/dropping-out-margin",
        emoji.code + "Выпадение внешних отступов",
      ],
      ["samplaes/samplaes", "Примеры"],
    ],
  },

  {
    title: "Features",
    children: [
      [
        "features/custom-selector",
        getThemeMenu("method", ["@custom-selector"]),
        "check",
      ],
      [
        "features/css-environment-variables",
        "CSS Environment Variables",
        "check",
      ],
    ],
  },

  {
    title: "Цвета",
    children: [
      ["colors/color-schemes", "Цветовые схемы"],
      ["colors/color-functions", "Цветовые функции", "check"],
      [
        "colors/current-color",
        getThemeMenu("method", ["currentColor", "transparent"]),
      ],
      [
        "colors/background-color",
        getThemeMenu("method", ["background-color", "color", "opacity"]),
      ],
      [
        "colors/linear-gradient",
        getThemeMenu("method", ["linear-gradient()", "conic-gradient()"]),
      ],
    ],
  },

  {
    title: "Изображения",
    children: [
      ["images/info", getTopicSubtitle("info")],
      ["images/srcset", "Атрибуты srcset и sizes", "check"],
      ["images/progressive-jpeg", "Progressive JPEG"],
      [
        "images/img",
        getThemeMenu("method", [
          "&lt;img&gt;",
          "&lt;picture&gt;",
          "&lt;source&gt;",
        ]),
      ],
      [
        "images/background",
        getThemeMenu("method", ["background", "object-fit"]),
      ],
      ["images/image-set", getThemeMenu("method", ["image-set()"]), "check"],
    ],
  },

  {
    title: "Адаптивность",
    children: [["adaptive/browser-mobile", "Стилизация браузера"]],
  },

  {
    title: "События браузера",
    children: [
      [
        "browser-actions/scroll-behavior",
        getThemeMenu("method", ["scroll-behavior"]),
      ],
      [
        "browser-actions/will-change",
        getThemeMenu("method", ["will-change"]),
        "check",
      ],
      [
        "browser-actions/scroll-snap",
        getThemeMenu("method", ["scroll-snap"]),
        "check",
      ],
      [
        "browser-actions/overscroll-behavior",
        getThemeMenu("method", ["overscroll-behavior"]),
        "check",
      ],
      [
        "browser-actions/overflow-anchor",
        getThemeMenu("method", ["overflow-anchor"]),
        "check",
      ],
    ],
  },

  {
    title: "Текст",
    children: [
      ["text/text", "Текст"],
      ["text/fonts", "Шрифты"],
      ["text/background-clip", getThemeMenu("method", ["background-clip"])],
      [
        "text/font-feature-settings",
        getThemeMenu("method", ["font-feature-settings"]),
      ],
    ],
  },

  {
    title: "Элементы веб-страницы",
    children: [
      ["elements/form", "Элементы формы"],
      ["elements/link", "Ссылки"],
      ["elements/video", "Видео и аудио"],
      ["elements/table", "Таблицы"],
      ["elements/list", "Списки"],
    ],
  },
  {
    title: "Блочная модель",
    children: [
      ["box-model/box-modal", "Понятие блочной модели"],
      ["box-model/box-sizing", getThemeMenu("method", ["box-sizing"])],
      ["box-model/width", getThemeMenu("method", ["width", "height"])],
      ["box-model/margin", getThemeMenu("method", ["margin", "padding"])],
      ["box-model/border", getThemeMenu("method", ["border"])],
      ["box-model/outline", getThemeMenu("method", ["outline"])],
    ],
  },
  {
    title: "Библиотеки и инструменты",
    children: [
      ["libs/pixel-perfect", "Pixel Perfect"],
      ["libs/bootstrap", "Bootstrap"],
      ["libs/bem", "БЭМ"],
      ["libs/emmet", "Плагин Emmet"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
