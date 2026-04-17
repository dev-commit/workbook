import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "testing/react-testing/";
const title = "React Testing";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
    ],
  },
  {
    title: "1. React Testing Library",
    children: [
      ["react-tsting-library/info", emoji.theory + "Информация"],
      ["react-tsting-library/npm", emoji.settings + "Установка"],
      ["react-tsting-library/methods", emoji.fire + "Методы"],
      ["react-tsting-library/code-react-cli", "Использование с CreateReactApp"],
      ["react-tsting-library/code-react-cli-samples", emoji.code + "Примеры"],
    ],
  },
  {
    title: "2. React Test Renderer",
    children: [
      ["react-test-renderer/info", emoji.theory + "Информация"],
      ["react-test-renderer/npm", emoji.settings + "Установка"],
      ["react-test-renderer/code", emoji.code + "Примеры"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
