import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/layout/";
const title = "Layout";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Текст",
    children: [
      ["text/text", "Текст"],
      ["text/fonts", "Шрифты"],
      // Изображение на тексте
      // font-feature-settings
    ],
  },
  {
    title: "Преобразования",
    children: [
      ["modification/transition", getThemeMenu("method", ["transition"])],
      ["modification/transform", getThemeMenu("method", ["transform"])],
      [
        "modification/animation",
        getThemeMenu("method", ["animation", "@keyframes"]),
      ],
      // CSS Blend Modes
      // CSS Shapes
      // CSS Masking
    ],
  },
  {
    title: "События браузера",
    children: [
      [
        "browser-actions/scroll-behavior",
        getThemeMenu("method", ["scroll-behavior"]),
      ],
      // will-change
      // scroll-snap
      // overscroll-behavior
      // overflow-anchor
    ],
  },
  {
    title: "Геометрия и фильтры",
    children: [
      [
        "geometry/filter",
        getThemeMenu("method", ["filter", "backdrop-filter"]),
      ],
      ["geometry/clip-path", getThemeMenu("method", ["clip-path"])],
      // CSS Blend Modes
      // CSS Shapes
      // CSS Masking / CSS Masks
    ],
  },
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/style-priority", emoji.theory + "Приоритетность стилей"],
    ],
  },
  {
    title: "Элементы веб-страницы",
    children: [
      ["elements/img", "Изображения"],
      ["elements/form", "Элементы формы"],
      ["elements/link", "Ссылки"],
      ["elements/video", "Видео и аудио"],
      ["elements/table", "Таблицы"],
      ["elements/list", "Списки"],
    ],
  },
  {
    title: "Блочная модель и позиционирование",
    children: [
      ["box-model/box-modal", "Понятие блочной модели"],
      ["box-model/box-sizing", getThemeMenu("method", ["box-sizing"])],
      ["box-model/display", getThemeMenu("method", ["display"])],
      ["box-model/position", getThemeMenu("method", ["position", "z-index"])],
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
