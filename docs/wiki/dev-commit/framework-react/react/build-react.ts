import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react/";
const title = "React";
const theme: TThemeTopics = "react";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/ecosystem", emoji.theory + "Экосистема"],
      ["main/ecosystem-ui-kit", emoji.theory + "UI-библиотеки"],
      ["main/install", getTopicSubtitle("install")],
      ["main/create-react-app", getThemeMenu("method", ["create-react-app"])],
      ["main/info", getTopicSubtitle("info")],
      ["main/patterns", emoji.theory + "Шаблоны проектирования"],
      ["main/handlers-name", emoji.star + "Название обработчиков"],
      ["main/version", "Версии"],
    ],
  },
  {
    title: "Реконсиляция",
    children: [
      ["reconciler/virtual-dom", emoji.star + "Virtual DOM (Общее)"],
      ["reconciler/virtual-dom-react", emoji.star + "Virtual DOM (React)"],
      ["reconciler/reconciliation", emoji.theory + "Reconciliation Algorithm"],
    ],
  },
  {
    title: "Fiber",
    children: [
      ["fiber/common", emoji.star + "Общее"],
      ["fiber/planning", emoji.items + "1. Планирование"],
      ["fiber/priorities", emoji.items + "2. Приоритизация"],
      ["fiber/sample", "Пример"],
    ],
  },
  {
    title: "Lifecycle",
    children: [
      ["lifecycle/info", getTopicSubtitle("info")],
      [
        "lifecycle/constructor",
        getThemeMenu("method", ["constructor"]),
        "check",
      ],
      [
        "lifecycle/get-derived-state-from-props",
        getThemeMenu("method", ["getDerivedStateFromProps"]),
      ],
      [
        "lifecycle/should-component-update",
        getThemeMenu("method", ["shouldComponentUpdate"]),
      ],
      ["lifecycle/render", getThemeMenu("method", ["render"])],
      [
        "lifecycle/get-snapshot-before-update",
        getThemeMenu("method", ["getSnapshotBeforeUpdate"]),
      ],
      [
        "lifecycle/component-did-mount",
        getThemeMenu("accent", ["componentDidMount"]),
      ],
      [
        "lifecycle/component-did-update",
        getThemeMenu("accent", ["componentDidUpdate"]),
      ],
      [
        "lifecycle/component-will-unmount",
        getThemeMenu("accent", ["componentWillUnmount"]),
      ],
      [
        "lifecycle/get-derived-state-from-error",
        getThemeMenu("unactive", ["getDerivedStateFromError"]),
      ],
      [
        "lifecycle/component-did-catch",
        getThemeMenu("unactive", ["componentDidCatch"]),
      ],
    ],
  },
  {
    title: "Паттерны",
    children: [
      ["patterns/higher-order-components", "Higher-Order Component"],
      ["patterns/render-props", "Render Props"],
      ["patterns/element-props", "Свойства-элементы"],
      ["patterns/lifting-state-up", "Подъём состояния"],
    ],
  },
  {
    title: "Обработка и вывод данных",
    children: [
      ["processing-data-output/handling-events", "Обработка событий"],
      ["processing-data-output/controlled-components", "Controlled Components"],
      [
        "processing-data-output/uncontrolled-components",
        "Uncontrolled Components",
      ],
      ["processing-data-output/conditional-rendering", "Условный рендеринг"],
      ["processing-data-output/lists-and-keys", "Списки и ключи"],
    ],
  },
  {
    title: "Стилизация",
    children: [
      ["styles/css-file", "1. Отдельный CSS файл"],
      ["styles/inline-styles", "2. Инлайновая стилизация"],
      ["styles/css-modules", "3. CSS Modules"],
      ["styles/css-in-js", "4. CSS in JS"],
    ],
  },
  {
    title: "Aliases",
    children: [
      ["aliases/vite", "Vite"],
      ["aliases/create-react-app", "Create React App"],
      ["aliases/webpack", "Webpack"],
    ],
  },
  {
    title: "Прочее",
    children: [
      ["common/jsx", "JSX"],
      ["common/react-developer-tools", "React Developer Tools"],
    ],
  },
  {
    title: "Libs",
    children: [
      ["libs/classnames", getThemeMenu("packages", ["classnames"])],
      [
        "libs/markdown",
        getThemeMenu("packages", ["react-markdown", "markdown-to-jsx"]),
      ],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
