import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react-api/";
const title = "React API";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "React",
    children: [
      ["react/startTransition", getThemeMenu("method", ["startTransition"])],
      ["react/createContext", getThemeMenu("method", ["createContext"])],
      ["react/Fragment", getThemeMenu("method", ["&lt;Fragment&gt;"])],
      ["react/StrictMode", getThemeMenu("method", ["&lt;StrictMode&gt;"])],
    ],
  },
  {
    title: "ReactDOM",
    children: [
      ["react-dom/createPortal", getThemeMenu("method", ["createPortal"])],
    ],
  },
  {
    title: "Оптимизация",
    children: [
      ["optimization/info", emoji.theory + "Информация"],
      ["optimization/react-memo", getThemeMenu("method", ["React.memo"])],
      [
        "optimization/react-lazy",
        getThemeMenu("method", ["React.lazy", "&lt;Suspense&gt;"]),
      ],
    ],
  },
  {
    title: "Общее",
    children: [
      [
        "common/dangerously-set-inner-html",
        getThemeMenu("method", ["dangerouslySetInnerHTML"]),
      ],
      ["common/forwardRef", getThemeMenu("method", ["forwardRef"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
