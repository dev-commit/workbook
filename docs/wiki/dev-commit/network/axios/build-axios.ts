import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "network/axios/";
const title = "Axios";
const theme: TThemeTopics = "primary";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
    ],
  },
  {
    title: "Общее",
    children: [
      ["common/http-methods", "HTTP-методы"],
      ["common/samples", "Примеры"],
    ],
  },
  {
    title: "Services",
    children: [
      ["services/instance", "Создание instance"],
      ["services/services", "Services"],
      ["services/error-handling", "Обработка ошибок"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
