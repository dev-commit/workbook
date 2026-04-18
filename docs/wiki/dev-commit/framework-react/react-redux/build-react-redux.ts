import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react-redux/";
const title = "React Redux";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/use", getTopicSubtitle("use")],
      ["main/structure-common", emoji.star + "Структура общая"],
      ["main/structure-implementation", emoji.star + "Структура реализации"],
    ],
  },
  {
    title: "Методы",
    children: [
      ["methods/provider", getThemeMenu("method", ["Provider"])],
      ["methods/connect", getThemeMenu("method", ["connect"])],
      ["methods/hooks", getThemeMenu("method", ["useDispatch", "useSelector"])],
    ],
  },
  {
    title: "Элементы",
    children: [
      ["elements/execution-order", emoji.theory + "Порядок выполнения"],
      ["elements/view", "1. View"],
      ["elements/action", "2. Action"],
      ["elements/middleware", "3. Middleware"],
      ["elements/reducer", "4. Reducer"],
      ["elements/store", "5. Store"],
    ],
  },
  {
    title: "Redux Plugins",
    children: [
      ["plugins/redux-thunk", getThemeMenu("method", ["redux-thunk"])],
      [
        "plugins/redux-devtools-extension",
        getThemeMenu("method", ["redux-devtools-extension"]),
      ],
      ["plugins/redux-actions", getThemeMenu("method", ["redux-actions"])],
      ["plugins/redux-logger", getThemeMenu("method", ["redux-logger"])],
    ],
  },
  {
    title: "Прочее",
    children: [["other/constants-name", "Название констант"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
