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
      ["components/v-tree", getThemeMenu("method", ["v-tree"]), "check"],
    ],
  },
  {
    title: "Custom Containers VitePress",
    children: [
      ["custom-containers/info", getTopicSubtitle("info")],
      ["custom-containers/links", "Ссылки"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
