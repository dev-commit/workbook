import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "system/ui-kit/";
const title = "Ui-Kit";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Компоненты",
    children: [
      ["components/v-details", getThemeMenu("method", ["v-details"])],
      ["components/v-iframe", getThemeMenu("method", ["v-iframe"])],
      ["components/v-two", getThemeMenu("method", ["v-two"])],
      ["components/v-breadcrumbs", getThemeMenu("method", ["v-breadcrumbs"])],
      ["components/v-marker", getThemeMenu("method", ["v-marker"])],
      ["components/v-padding", getThemeMenu("method", ["v-padding"])],
      ["components/v-code", getThemeMenu("method", ["v-code"])],
      ["components/v-badge", getThemeMenu("method", ["v-badge"])],
      ["components/v-tree", getThemeMenu("method", ["v-tree"])],
    ],
  },
  {
    title: "Категории",
    children: [["category/custom-containers", "Custom Containers VitePress"]],
  },

  // Меню
  {
    title: "Меню: getThemeMenu",
    children: [
      ["/", getThemeMenu("method", ["method"])],
      ["/", getThemeMenu("accent", ["accent"])],
      ["/", getThemeMenu("packages", ["packages"])],
      ["/", getThemeMenu("unactive", ["unactive"])],
      ["/", getThemeMenu("outline", ["outline"])],
      ["/", getThemeMenu("error", ["error"])],
    ],
  },
  {
    title: "Меню: getTopicSubtitle",
    children: [
      ["/", getTopicSubtitle("info")],
      ["/", getTopicSubtitle("install")],
      ["/", getTopicSubtitle("use")],
      ["/", getTopicSubtitle("variants")],
    ],
  },
  {
    title: "Меню",
    children: [
      ["/", "Тема проработана", "done"],
      ["/", "Тема НЕ проработана", "check"],
      ["/", emoji.fire + "Emoji"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
