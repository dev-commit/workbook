import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/layout/";
const title = "Layout";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Геометрия",
    children: [
      ["geometry/transform", getThemeMenu("method", ["transform"])],
      ["geometry/clip-path", getThemeMenu("method", ["clip-path"])],
      ["geometry/css-shapes", "CSS Shapes"],
      ["geometry/css-masking", "CSS Masking", "check"],
    ],
  },

  {
    title: "Эффекты",
    children: [
      ["effects/blend-modes", "CSS Blend Modes"],
      ["effects/transition", getThemeMenu("method", ["transition"])],
      [
        "effects/animation",
        getThemeMenu("method", ["animation", "@keyframes"]),
      ],
      ["effects/filter", getThemeMenu("method", ["filter", "backdrop-filter"])],
    ],
  },

  {
    title: "Адаптивность",
    children: [
      ["adaptive/browser-mobile", "Стилизация браузера"],
      ["adaptive/meta-viewport", "Тег Meta Viewport"],
      ["adaptive/media-queries", "CSS Media queries"],
    ],
  },

  {
    title: "Общее",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/style-priority", emoji.theory + "Приоритетность стилей"],
      ["main/custom-properties", "Custom Properties"],
      ["main/browser-actions", "События браузера"],
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
    title: "Цветовые схемы",
    children: [
      ["color-schemes/info", getTopicSubtitle("info")],
      ["color-schemes/hex", "1. HEX"],
      ["color-schemes/rgb", "2. RGB"],
      ["color-schemes/hsl", "3. HSL"],
      ["color-schemes/hwb", "4. HWB"],
      ["color-schemes/predefined", "Predefined"],
    ],
  },

  {
    title: "Цвета",
    children: [
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
    title: "Текст",
    children: [
      ["text/text", "Текст"],
      ["text/fonts", "Шрифты"],
      [
        "text/background-clip",
        getThemeMenu("method", ["background-clip"]),
        "check",
      ],
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
