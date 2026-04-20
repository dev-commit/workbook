import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/architecture/";
const title = "Архитектура";
const theme: TThemeTopics = "theory";

const topics: ISidebarTopics[] = [
  {
    title: "Подходы",
    children: [
      ["approaches/CQRS", "CQRS"],
      ["approaches/event-sourcing", "Event Sourcing"],
      ["approaches/dependency-injection", "Dependency Injection"],
      ["approaches/composition", "Композиция и Агрегация"],
    ],
  },
  {
    title: "Архитектурные концепции",
    children: [
      ["concepts/monolith", "Монолит"],
      ["concepts/microservices", "Микросервисы"],
      ["concepts/monorepository", "Монорепозиторий"],
    ],
  },
  {
    title: "Парадигмы программирования",
    children: [
      ["programming-paradigms/info", getTopicSubtitle("info")],
      ["programming-paradigms/imperative", "Императивное"],
      ["programming-paradigms/declarative", "Декларативное"],
      ["programming-paradigms/reactive", "Реактивное"],
    ],
  },
  {
    title: "Шаблоны проектирования",
    children: [
      ["mvc/variants", getTopicSubtitle("info")],
      ["mvc/mvc", "MVC"],
      ["mvc/mvvm", "MVVM"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
