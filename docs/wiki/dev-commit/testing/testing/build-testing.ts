import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "testing/testing/";
const title = "Тестирование";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Инструменты",
    children: [
      ["utils/utils", emoji.star + "Инструменты"],
      ["utils/chrome-dev-tools", "Chrome DevTools"],
    ],
  },
  {
    title: "Теория",
    children: [
      ["theory/info", emoji.theory + "Основные термины"],
      ["theory/levels", emoji.theory + "Уровни тестирования"],
      ["theory/types", emoji.theory + "Виды тестирования"],
    ],
  },
  {
    title: "Пирамида тестирования",
    children: [
      ["pyramid/pyramid", emoji.theory + "Пирамида тестирования"],
      ["pyramid/unit-test", emoji.star + "1. Юнит-тесты"],
      ["pyramid/integration-test", emoji.star + "2. Интеграционные тесты"],
      ["pyramid/e2e-test", emoji.star + "3. E2E-тесты"],
    ],
  },
  {
    title: "Концепции",
    children: [
      ["concepts/tdd", emoji.items + "TDD"],
      ["concepts/bdd", emoji.items + "BDD"],
      ["concepts/first", emoji.items + "FIRST"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
