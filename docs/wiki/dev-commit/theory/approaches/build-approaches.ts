import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/approaches/";
const title = "Подходы +";
const theme: TThemeTopics = "accent";

const topics: ISidebarTopics[] = [
  {
    title: "Архитектура",
    children: [
      ["architecture/info", "Информация"],
      ["architecture/layers", "Слои"],
      ["architecture/patterns", "Паттерны"],
      ["architecture/dir", "Структура директорий"],
    ],
  },

  {
    title: "Подходы и паттерны",
    children: [
      ["main/00-introduction", "Обзор"],
      ["main/01-composition-over-inheritance", "Композиция над наследованием"],
      [
        "main/02-modular-architecture-and-configuration",
        "Модульная архитектура + конфигурация",
      ],
      ["main/04-tokens-and-providers", "Токены и провайдеры"],
      ["main/05-scopes-and-lifetimes", "Скоупы и жизненный цикл"],
      ["main/06-viewmodel-mvvm", "ViewModel / MVVM"],
      ["main/07-server-state-resources", "Server state и ресурсы"],
      [
        "main/08-pagination-and-infinite-loading",
        "Пагинация и infinite loading",
      ],
      ["main/09-type-safe-routing", "Type-safe routing"],
      ["main/10-executor-pipeline", "Executor pipeline"],
      ["main/11-plugin-architecture-extension-points", "Plugin architecture"],
      ["main/12-placeholder-slots", "Placeholder / slots"],
      ["main/13-code-generation-contracts", "Codegen контрактов"],
      ["main/14-quality-gates-git-hooks", "Quality gates"],
      ["main/15-suspense-and-error-boundaries", "Suspense и ErrorBoundary"],
      ["main/16-testbed-integration-testing", "Testbed"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
