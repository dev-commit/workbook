import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/npm/";
const title = "NPM | Yarn";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "NPM",
    children: [
      ["npm/info", getTopicSubtitle("info")],
      ["npm/command", emoji.code + "Команды"],
      ["npm/package-version", emoji.code + "Установка версии пакета"],
      ["npm/nvm", "Node Version Manager"],
      ["npm/package-publishing", "Публикация пакета"],
      ["npm/linux", "Linux"],
    ],
  },
  {
    title: "Пакеты",
    children: [
      ["packages/http-server", getThemeMenu("method", ["http-server"])],
      ["packages/json-server", getThemeMenu("method", ["json-server"])],
      [
        "packages/npm-check-updates",
        getThemeMenu("method", ["npm-check-updates"]),
      ],
      ["packages/concurrently", getThemeMenu("method", ["concurrently"])],
    ],
  },
  {
    title: "package.json",
    children: [
      ["package-json/scripts", emoji.code + "Скрипты"],
      ["package-json/dependencies", "Виды зависимостей"],
    ],
  },
  {
    title: "Yarn",
    children: [
      ["yarn/info", getTopicSubtitle("info")],
      ["yarn/install", getTopicSubtitle("install")],
      ["yarn/commands", "Команды"],
    ],
  },
  {
    title: "Pnpm",
    children: [
      ["pnpm/info", getTopicSubtitle("info")],
      ["pnpm/install", getTopicSubtitle("install")],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
