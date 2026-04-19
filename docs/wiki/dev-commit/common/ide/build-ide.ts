import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/ide/";
const title = "IDE";
const theme: TThemeTopics = "tech";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/ide", emoji.theory + "IDE"]],
  },
  {
    title: "VSCode",
    children: [
      ["vscode/plugins", emoji.star + "Плагины"],
      ["vscode/settings", emoji.star + "Настройки"],
      ["vscode/snippets", "Сниппеты"],
      ["vscode/shortcuts", "Shortcuts"],
      ["vscode/utils", "Инструменты"],
    ],
  },
  {
    title: "VSCode Cases",
    children: [
      ["vscode-cases/workspases", emoji.star + "Несколько Workspaces"],
      ["vscode-cases/profile-editor", "Редактор профилей"],
      ["vscode-cases/open-vscode-with-url", "Opening VS Code with URLs"],
      ["vscode-cases/default-git-editor", "Default editor for Git"],
      ["vscode-cases/linter-onsave", "Linter OnSave"],
    ],
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
