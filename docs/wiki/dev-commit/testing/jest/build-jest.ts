import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "testing/jest/";
const title = "Jest";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/mocks", "Mock"],
    ],
  },
  {
    title: "Элементы",
    children: [
      ["elements/pattern", emoji.code + "Шаблон"],
      ["elements/functions", emoji.star + "Глобальные функции"],
      ["elements/matchers", emoji.star + "Matchers"],
      ["elements/hooks", emoji.star + "Хуки"],
    ],
  },
  {
    title: "JavaScript",
    children: [
      ["javascript/sync", "1. Синхронные тесты"],
      ["javascript/async", "2. Асинхронные тесты"],
      ["javascript/mock", "3. Mock-данные"],
      ["javascript/mock-axios", "4. Mock-данные в Axios"],
    ],
  },
  {
    title: "Redux",
    children: [
      ["redux/reducers", "Reducers"],
      ["redux/actions", "Actions"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
