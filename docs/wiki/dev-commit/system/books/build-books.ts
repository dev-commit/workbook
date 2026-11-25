import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "docs/wiki/constants";

const path = rootPath + "system/books/";
const title = "Книги";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Технологии",
    children: [
      ["tech/javascript", "JavaScript"],
      ["tech/html", "HTML и CSS"],
      ["tech/react", "React.js"],
      ["tech/redux", "Redux"],
      ["tech/typescript", "TypeScript"],
      ["tech/git", "Git"],
    ],
  },
  {
    title: "Общее",
    children: [
      ["common/books", "Книги"],
      ["common/articles", "Статьи"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
