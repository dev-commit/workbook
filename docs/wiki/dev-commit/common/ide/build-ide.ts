import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/ide/";
const title = "IDE";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/ide", emoji.theory + "IDE"]],
  },
  {
    title: "VSCode",
    children: [["vscode/plugins", "Плагины"]],
  },
  {
    title: "Cursor",
    children: [
      ["cursor/info", getTopicSubtitle("info")],
      ["cursor/elements", "Элементы"],
      ["cursor/settings", "Настройки"],
      ["cursor/browser", "Браузер"],
    ],
  },

  {
    title: "AI-ассистенты",
    children: [
      ["assistants/cline", "Cline"],
      ["assistants/copilot", "GitHub Copilot"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
