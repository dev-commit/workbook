import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/storybook/";
const title = "StoryBook";
const theme: TThemeTopics = "react";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
    ],
  },
  {
    title: "Использование",
    children: [
      ["use/basic", emoji.star + "Базовый пример"],
      ["use/decorators", "Декораторы"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
