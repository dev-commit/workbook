import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "common/ci-cd/";
const title = "CI / CD";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/continuous-integration", "1. Continuous Integration"],
      ["main/continuous-delivery", "2. Continuous Delivery"],
      ["main/continuous-deployment", "3. Continuous Deployment"],
      ["main/software-deployment", "Software Deployment"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
