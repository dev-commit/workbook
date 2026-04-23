import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/package-managers/";
const title = "Package Managers";
const theme: TThemeTopics = "tech";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/compare", "Таблица сравнения"],
      ["main/package-json", "Файл package.json"],
    ],
  },
  {
    title: "NPM",
    children: [
      ["npm/info", getTopicSubtitle("info")],
      ["npm/command", emoji.code + "Команды"],
      ["npm/package-version", emoji.code + "Установка версии пакета"],
      ["npm/nvm", "Node Version Manager (NVM)"],
      ["npm/linux", "Linux"],
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
  {
    title: "Пакеты",
    children: [
      [
        "packages/http-server",
        getThemeMenu("packages", ["http-server"]) + " npm",
      ],
      [
        "packages/json-server",
        getThemeMenu("packages", ["json-server"]) + " npm",
      ],
      [
        "packages/npm-check-updates",
        getThemeMenu("packages", ["npm-check-updates"]) + " npm",
      ],
      [
        "packages/concurrently",
        getThemeMenu("packages", ["concurrently"]) + " npm",
      ],
    ],
  },
  {
    title: "Публикация NPM-пакета",
    children: [
      ["npm-publish/command", "Команды"],
      ["npm-publish/use-in-project", "Использование в проекте"],
      ["npm-publish/npm-package", "Настройки NPM-пакета"],
      ["npm-publish/vite-library-mode", "Vite Library Mode"],
      ["npm-publish/issue-css-modules", "[issue] Обработка CSS Modules"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
