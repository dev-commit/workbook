import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/agile/";
const title = "Agile | Jira";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Модели",
    children: [
      ["models/info", `${emoji.theory}Модели разработки`],
      ["models/agile", `${emoji.items}Agile`],
      ["models/scrum", `${emoji.items}Scrum`],
      ["models/kanban", `${emoji.items}Kanban`],
      ["models/waterfall", `${emoji.items}Waterfall`],
    ],
  },
  {
    title: "Agile",
    children: [
      ["agile/info", `${emoji.theory}Информация`],
      ["agile/tasks", `${emoji.items}Задачи и Backlog`],
      ["agile/sprint", `${emoji.items}Спринты`],
      ["agile/story-points", `${emoji.items}Story Points`],
      ["agile/meetings", "Собрания"],
      ["agile/team", "Команда"],
    ],
  },
  {
    title: "Концепции",
    children: [["concepts/estimation", "Эстимация"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
