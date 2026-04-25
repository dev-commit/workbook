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
      ["npm-publish/command", emoji.star + "Команды NPM"],
      ["npm-publish/use-in-project", emoji.n1 + "Использование в проекте"],
      ["npm-publish/npm-package-ui-kit", emoji.n2 + "NPM-пакет: Ui Components"],
      ["npm-publish/npm-package-config", emoji.n3 + "NPM-пакет: конфигурация"],
      ["npm-publish/vite-library-mode", emoji.theory + "Vite Library Mode"],
      ["npm-publish/github-packages", "GitHub Packages", "check"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
