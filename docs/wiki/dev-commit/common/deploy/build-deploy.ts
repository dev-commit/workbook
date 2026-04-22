import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/deploy/";
const title = "Deploy";
const theme: TThemeTopics = "tech";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["ci-cd/info", getTopicSubtitle("info")],
      ["ci-cd/continuous-integration", "1. Continuous Integration"],
      ["ci-cd/continuous-delivery", "2. Continuous Delivery"],
      ["ci-cd/continuous-deployment", "3. Continuous Deployment"],
      ["ci-cd/software-deployment", "Software Deployment"],
    ],
  },
  {
    title: "Vercel",
    children: [
      ["vercel/info", getTopicSubtitle("info")],
      ["vercel/deploy", emoji.star + "Деплой"],
    ],
  },
  {
    title: "GitHub Pages",
    children: [
      ["github-pages/info", getTopicSubtitle("info")],
      ["github-pages/install", getTopicSubtitle("install")],
      ["github-pages/deploy", emoji.star + "Деплой"],
      ["github-pages/deploy-react-cra", "Деплой React + Webpack (CRA)"],
      ["github-pages/deploy-react-vite", "Деплой React + Vite (Vite Template)"],
    ],
  },
  {
    title: "Heroku",
    children: [
      ["heroku/info", getTopicSubtitle("info")],
      ["heroku/deploy", emoji.star + "Деплой"],
      ["heroku/use", getTopicSubtitle("use")],
    ],
  },
  {
    title: "Chromatic",
    children: [["chromatic/info", getTopicSubtitle("info")]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
