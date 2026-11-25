import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { rootPath } from "docs/wiki/constants";

const path = rootPath + "backend/mysql/";
const title = "MySQL";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/sql", "SQL-запросы"],
      ["main/create-database", "Создание базы данных"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
