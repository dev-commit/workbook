import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/architecture/";
const title = "Архитектура";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Архитектурные концепции",
    children: [
      ["concepts/monolith", "Монолит"],
      ["concepts/microservices", "Микросервисы"],
      ["concepts/monorepository", "Монорепозиторий"],
    ],
  },
  {
    title: "MVC",
    children: [
      ["mvc/variants", `${emoji.theory}Разновидности`],
      ["mvc/mvc", `${emoji.items}MVC`],
      ["mvc/mvvm", `${emoji.items}MVVM`],
    ],
  },
  {
    title: "Подходы",
    children: [
      ["approaches/CQRS", `${emoji.items}CQRS`],
      ["approaches/event-sourcing", `${emoji.items}Event Sourcing`],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
