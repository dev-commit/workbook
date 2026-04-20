import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/linters/";
const title = "Linters";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [["main/install", getTopicSubtitle("install")]],
  },
  {
    title: "Prettier",
    children: [
      ["prettier/info", getTopicSubtitle("info")],
      ["prettier/vscode-plugin", "Плагин для VSCode"],
      ["prettier/prettierrc", getThemeMenu("method", [".prettierrc.json"])],
      ["prettier/prettierignore", getThemeMenu("method", [".prettierignore"])],
      ["prettier/import-order", "Настройка порядка импортов"],
    ],
  },
  {
    title: "ESLint",
    children: [
      ["eslint/info", getTopicSubtitle("info")],
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
      ["stylelint/info", getTopicSubtitle("info")],
      ["stylelint/install", getTopicSubtitle("install")],
    ],
  },
  {
    title: "TSLint",
    children: [["tslint/info", getTopicSubtitle("info")]],
  },
  {
    title: "Husky",
    children: [
      ["husky/info", getTopicSubtitle("info")],
      ["husky/install", getTopicSubtitle("install")],
    ],
  },
  {
    title: "MarkdownLint (VSCode Extension)",
    children: [
      ["markdownlint/info", getTopicSubtitle("info")],
      ["markdownlint/disable", "Disable"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
