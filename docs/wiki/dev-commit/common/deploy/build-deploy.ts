import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/deploy/";
const title = "Deploy";
const theme: TThemeTopics = "tech";

const topics: ISidebarTopics[] = [
  {
    title: "Vercel",
    children: [
      ["vercel/info", getTopicSubtitle("info")],
      ["vercel/deploy", "Деплой"],
    ],
  },
  {
    title: "GitHub Pages",
    children: [
      ["github-pages/info", getTopicSubtitle("info")],
      ["github-pages/install", getTopicSubtitle("install")],
      ["github-pages/deploy", "Деплой"],
      ["github-pages/deploy-react-cra", "Деплой React + Webpack (CRA)"],
      ["github-pages/deploy-react-vite", "Деплой React + Vite (Vite Template)"],
    ],
  },
  {
    title: "Heroku",
    children: [
      ["heroku/info", getTopicSubtitle("info")],
      ["heroku/algoritm", "Алгоритм"],
      ["heroku/use", getTopicSubtitle("use")],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
