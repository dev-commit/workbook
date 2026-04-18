import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react-final-form/";
const title = "React Final Form";
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
    title: "API",
    children: [
      ["api/FormSpy", getThemeMenu("method", ["&lt;FormSpy /&gt;"])],
      ["api/Field", getThemeMenu("method", ["&lt;Field /&gt;"])],
    ],
  },
  {
    title: "Примеры",
    children: [
      ["samples/simple", "Простой пример"],
      ["samples/type-form", "Тип для &lt;Form /&gt;"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
