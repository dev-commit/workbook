import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js-web-api/";
const title = "Web API";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Клиентское хранилище",
    children: [
      [
        "client-storage/web-storage",
        getThemeMenu("method", ["localStorage", "sessionStorage"]),
      ],
      ["client-storage/indexed-db", getThemeMenu("method", ["IndexedDB"])],
      ["client-storage/cookie", getThemeMenu("method", ["cookie"])],
    ],
  },
  {
    title: "События",
    children: [
      [
        "dom-events/propagation-model",
        emoji.theory + "Модель распространения событий",
      ],
      ["dom-events/propagation-capturing", emoji.star + "1. Фаза погружения"],
      ["dom-events/propagation-target", emoji.star + "2. Фаза цели"],
      ["dom-events/propagation-bubbling", emoji.star + "3. Фаза всплытия"],
      ["dom-events/propagation-delegate", emoji.fire + "Делегирование событий"],
      ["dom-events/list-events", "Список событий"],
      ["dom-events/params-event", "Объект события (Event)"],
      ["dom-events/samples", emoji.code + "Примеры"],
    ],
  },
  {
    title: "Методы событий",
    children: [
      [
        "dom-events-methods/preventDefault",
        getThemeMenu("method", ["event.preventDefault"]),
      ],
      [
        "dom-events-methods/stopPropagation",
        getThemeMenu("method", ["event.stopPropagation"]),
      ],
      [
        "dom-events-methods/stopImmediatePropagation",
        getThemeMenu("method", ["event.stopImmediatePropagation"]),
      ],
      [
        "dom-events-methods/addEventListener",
        getThemeMenu("method", ["addEventListener", "onclick", "..."]),
      ],
    ],
  },
  {
    title: "Элементы формы",
    children: [
      [
        "form/input",
        getThemeMenu("method", ["&lt;input&gt;", "&lt;select&gt;"]),
      ],
    ],
  },
  {
    title: "Методы и свойства",
    children: [
      ["dom-methods/attribute", getThemeMenu("method", ["attributes"])],
      ["dom-methods/class-list", getThemeMenu("method", ["classList"])],
      [
        "dom-methods/css",
        getThemeMenu("method", ["style", "getComputedStyle"]),
      ],
      [
        "dom-methods/contains",
        getThemeMenu("method", ["contains", "compareDocumentPosition"]),
      ],
      ["dom-methods/media-queries", getThemeMenu("method", ["matchMedia"])],
      ["dom-methods/location", getThemeMenu("method", ["open", "location"])],
    ],
  },
  {
    title: "Документ и объекты страницы",
    children: [
      ["dom/info", getTopicSubtitle("info")],
      ["dom/dom", emoji.theory + "DOM"],
      ["dom/bom", emoji.theory + "BOM"],
      ["dom/node", getThemeMenu("method", ["nodeType", "nodeName", "tagName"])],
      ["dom/element-get", emoji.items + "1. Выборка элементов"],
      ["dom/element-method", emoji.items + "2. Методы и свойства элементов"],
      ["dom/element-create", emoji.items + "3. Добавление и удаление узлов"],
      ["dom/multi-insert", emoji.items + "4. Мультивставка"],
      ["dom/metrics", emoji.items + "5. Размеры и прокрутка элементов"],
      ["dom/metrics-window", emoji.items + "6. Размеры и прокрутка страницы"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
