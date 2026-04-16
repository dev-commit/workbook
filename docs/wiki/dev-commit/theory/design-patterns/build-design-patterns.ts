import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "theory/design-patterns/";
const title = "Паттерны проектирования";
const theme: TThemeTopics = "theory";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "1. Creational (Порождающие)",
    children: [
      ["1-creational/singleton", "Singleton", "done"],
      ["1-creational/constructor", "Constructor"],
      ["1-creational/builder", "Builder"],
      ["1-creational/prototype", "Prototype"],
      ["1-creational/factory-method", "Factory Method"],
      ["1-creational/abstract-factory", "Abstract Factory"],
    ],
  },
  {
    title: "2. Structural (Структурные)",
    children: [
      ["2-structural/decorator", "Decorator", "done"],
      ["2-structural/adapter", "Adapter"],
      ["2-structural/facade", "Facade"],
      ["2-structural/flyweight", "Flyweight"],
      ["2-structural/proxy", "Proxy"],
      ["2-structural/bridge", "Bridge"],
      ["2-structural/composite", "Composite"],
    ],
  },
  {
    title: "3. Behavioral (Поведенческие)",
    children: [
      ["3-behavioral/observer", "Observer", "done"],
      ["3-behavioral/chain-of-responsibility", "Chain Of Responsibility"],
      ["3-behavioral/command", "Command"],
      ["3-behavioral/iterator", "Iterator"],
      ["3-behavioral/mediator", "Mediator"],
      ["3-behavioral/state", "State"],
      ["3-behavioral/strategy", "Strategy"],
      ["3-behavioral/template-method", "Template Method"],
      ["3-behavioral/memento", "Memento"],
      ["3-behavioral/visitor", "Visitor"],
    ],
  },
  {
    title: "Неизвестно",
    children: [
      ["patterns-other/module", "Модуль"],
      ["patterns-other/module-revealing", "Открытый модуль"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
