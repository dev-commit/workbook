import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/linux/";
const title = "Linux";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "WSL",
    children: [
      ["wsl/info", emoji.theory + "Информация"],
      ["wsl/nvm", emoji.code + "Установка NVM"],
    ],
  },
  {
    title: "Ubuntu (Debian)",
    children: [
      ["ubuntu/command", "Команды"],
      ["ubuntu/package", "Пакеты"],
      ["ubuntu/nodejs", emoji.libs + "Node.js"],
      ["ubuntu/npm", emoji.libs + "NPM"],
      ["ubuntu/setting", "Настройка"],
      ["ubuntu/other", "Прочее"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
