import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "main/linters/";
const title = "Linters";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/install", getTopicSubtitle("install")],
    ],
  },
  {
    title: "Prettier",
    children: [
      ["prettier/info", emoji.theory + "Информация"],
      ["prettier/vscode-plugin", "Плагин для VSCode"],
      ["prettier/prettierrc", getThemeMenu("method", [".prettierrc.json"])],
      ["prettier/prettierignore", getThemeMenu("method", [".prettierignore"])],
      ["prettier/import-order", "Настройка порядка импортов"],
    ],
  },
  {
    title: "ESLint",
    children: [
      ["eslint/info", emoji.theory + "Информация"],
      ["eslint/main", "Основное"],
      ["eslint/disable", "Disable"],
      ["eslint/import-order", "Настройка порядка импортов"],
      ["eslint/eslintrc", getThemeMenu("method", [".eslintrc.js"])],
      ["eslint/typescript", "TypeScript"],
    ],
  },
  {
    title: "Stylelint",
    children: [
      ["stylelint/info", emoji.theory + "Информация"],
      ["stylelint/install", emoji.theory + "Установка и настройка"],
    ],
  },
  {
    title: "TSLint",
    children: [
      ["tslint/info", emoji.theory + "Информация"],
    ],
  },
  {
    title: "Husky",
    children: [
      ["husky/info", emoji.theory + "Информация"],
      ["husky/install", emoji.code + "Установка и настройка"],
    ],
  },
  {
    title: "MarkdownLint (VSCode Extension)",
    children: [
      ["markdownlint/info", emoji.theory + "Информация"],
      ["markdownlint/disable", "Disable"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
