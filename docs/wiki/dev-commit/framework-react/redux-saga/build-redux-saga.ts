import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/redux-saga/";
const title = "Redux Saga";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
    ],
  },
  {
    title: "Методы",
    children: [
      ["methods/call", getThemeMenu("method", ["call"])],
      ["methods/put", getThemeMenu("method", ["put"])],
      ["methods/take", getThemeMenu("method", ["take"])],
      ["methods/all", getThemeMenu("method", ["all"])],
      ["methods/delay", getThemeMenu("method", ["delay"])],
      ["methods/fork", getThemeMenu("method", ["fork"])],
      ["methods/select", getThemeMenu("method", ["select"])],
      ["methods/cancel", getThemeMenu("method", ["cancel"])],
      ["methods/debounce", getThemeMenu("method", ["debounce"])],
      ["methods/takeEvery", getThemeMenu("method", ["takeEvery"])],
      ["methods/takeLatest", getThemeMenu("method", ["takeLatest"])],
    ],
  },
  {
    title: "Общее",
    children: [
      ["common/accessing-store-value", "Доступ к значению Store"],
      ["common/saga-vs-thunk", "redux-saga vs redux-thunk"],
      ["common/questions", "Вопросы"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
