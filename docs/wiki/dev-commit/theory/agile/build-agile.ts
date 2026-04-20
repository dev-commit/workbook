import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/agile/";
const title = "Agile | Jira";
const theme: TThemeTopics = "theory";

const topics: ISidebarTopics[] = [
  {
    title: "Модели",
    children: [
      ["models/info", emoji.theory + "Модели разработки"],
      ["models/agile", "Agile"],
      ["models/scrum", "Scrum"],
      ["models/kanban", "Kanban"],
      ["models/waterfall", "Waterfall"],
    ],
  },
  {
    title: "Agile",
    children: [
      ["agile/info", getTopicSubtitle("info")],
      ["agile/tasks", "Задачи и Backlog"],
      ["agile/sprint", "Спринты"],
      ["agile/story-points", "Story Points"],
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
