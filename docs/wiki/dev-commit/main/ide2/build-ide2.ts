import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "main/ide2/";
const title = "IDE 2";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "VSCode",
    children: [
      ["vscode/settings", emoji.fire + "Настройки"],
      ["vscode/snippets", "Сниппеты"],
      ["vscode/shortcuts", "Shortcuts"],
      ["vscode/profile-editor", "Редактор профилей"],
    ],
  },
  {
    title: "Cases",
    children: [
      ["vscode-cases/workspases", emoji.star + "Несколько Workspaces"],
      ["vscode-cases/open-vscode-with-url", "Opening VS Code with URLs"],
      ["vscode-cases/default-git-editor", "Default editor for Git"],
      ["vscode-cases/linter-onsave", "Linter OnSave"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
