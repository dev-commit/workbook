import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/redux/";
const title = "Redux";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Общее и теория",
    children: [
      ["common/redux-compare", emoji.fire + "Сравнение React-библиотек"],
      ["common/flux", emoji.theory + "Flux"],
      ["common/principles-fp", emoji.theory + "Принципы FP"],
    ],
  },
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/use", getTopicSubtitle("use")],
    ],
  },
  {
    title: "Методы",
    children: [
      ["methods/createStore", getThemeMenu("method", ["createStore"]), "done"],
      ["methods/applyMiddleware", getThemeMenu("method", ["applyMiddleware"])],
      ["methods/combineReducers", getThemeMenu("method", ["combineReducers"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
