import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/css-grid/";
const title = "CSS Grid";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      [
        "main/align-elements",
        getThemeMenu("method", [
          "justify-items",
          "align-items",
          "justify-self",
          "align-self",
        ]),
      ],
    ],
  },
  {
    title: "Grid-контейнер",
    children: [
      ["grid-container/display", getThemeMenu("method", ["display"])],
      [
        "grid-container/gap",
        getThemeMenu("method", ["gap", "column-gap", "row-gap"]),
      ],
      [
        "grid-container/grid-template",
        getThemeMenu("method", [
          "grid-template",
          "grid-template-columns",
          "grid-template-rows",
        ]),
      ],
    ],
  },
  {
    title: "Выравнивание строк и столбцов",
    children: [
      [
        "align-elements/grid-auto",
        getThemeMenu("method", ["grid-auto-columns", "grid-auto-rows"]),
      ],
      [
        "align-elements/grid-auto-flow",
        getThemeMenu("method", ["grid-auto-flow"]),
      ],
      [
        "align-elements/place-items",
        getThemeMenu("method", ["place-items"]),
        "check",
      ],
    ],
  },
  {
    title: "Grid Area",
    children: [
      [
        "grid-area/grid-area",
        getThemeMenu("method", ["grid-template-areas", "grid-area"]),
      ],
      [
        "grid-area/grid-column",
        getThemeMenu("method", [
          "grid-column",
          "grid-row",
          "grid-row-start",
          "grid-row-end",
        ]),
      ],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
