import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/css/";
const title = "CSS";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Единицы измерения",
    children: [
      ["sizes/info", getTopicSubtitle("info")],
      ["sizes/px", getThemeMenu("outline", ["px", "%"])],
      ["sizes/rem", getThemeMenu("outline", ["em", "rem"])],
      ["sizes/viewport", getThemeMenu("outline", ["viewport"])],
    ],
  },
  {
    title: "Правила",
    children: [
      ["rules/import", getThemeMenu("method", ["@import"])],
      ["rules/supports", getThemeMenu("method", ["@supports"])],
    ],
  },
  {
    title: "Селекторы",
    children: [
      ["selectors/variants", "Варианты селекторов"],
      ["selectors/tag", getThemeMenu("outline", ["tag", "class", "id", "*"])],
      ["selectors/attr", getThemeMenu("outline", ["attr"])],
      ["selectors/tilda", getThemeMenu("outline", [">", "+", "~"])],
      ["selectors/nesting", "CSS Nesting"],
      ["selectors/specificity", "Специфичность селекторов", "check"],
    ],
  },
  {
    title: "События браузера",
    children: [
      [
        "browser-actions/scroll-behavior",
        getThemeMenu("method", ["scroll-behavior"]),
      ],
    ],
  },
  {
    title: "Функции",
    children: [
      ["functions/calc", getThemeMenu("method", ["calc"])],
      [
        "functions/linear-gradient",
        getThemeMenu("method", ["linear-gradient", "conic-gradient"]),
      ],
    ],
  },
  {
    title: "Псевдоклассы",
    children: [
      ["pseudo-classes/info", emoji.items + "Псевдоклассы"],
      [
        "pseudo-classes/hover",
        getThemeMenu("method", [
          ":hover",
          ":focus",
          ":active",
          ":visited",
          ":link",
        ]),
      ],
      [
        "pseudo-classes/nth-child",
        getThemeMenu("method", [":first-child", ":last-child", ":nth-child"]),
      ],
    ],
  },
  {
    title: "Псевдоэлементы",
    children: [
      ["pseudo-elements/info", emoji.items + "Псевдоэлементы"],
      [
        "pseudo-elements/before",
        getThemeMenu("method", ["::before", "::after"]),
      ],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
