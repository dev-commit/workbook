import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react-router/";
const title = "React Router";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/use", getTopicSubtitle("use")],
      ["main/modes", "Режимы работы", "done"],
    ],
  },
  {
    title: "Общее API",
    children: [
      [
        "api/Routes",
        getThemeMenu("method", ["&lt;Routes /&gt;", "&lt;Route /&gt;"]),
        "done",
      ],
      [
        "api/Link",
        getThemeMenu("method", ["&lt;Link /&gt;", "&lt;NavLink /&gt;"]),
        "done",
      ],
      ["api/Outlet", getThemeMenu("method", ["&lt;Outlet /&gt;"]), "done"],
      ["api/useNavigate", getThemeMenu("method", ["useNavigate()"]), "done"],
      ["api/useParams", getThemeMenu("method", ["useParams()"]), "done"],
      ["api/useSearchParams", getThemeMenu("method", ["useSearchParams()"])],
      ["api/useLocation", getThemeMenu("method", ["useLocation()"])],
    ],
  },
  {
    title: "Declarative Mode",
    children: [
      [
        "api-declarative-mode/BrowserRouter",
        getThemeMenu("method", ["&lt;BrowserRouter /&gt;"]),
        "done",
      ],
    ],
  },
  {
    title: "Data Mode",
    children: [
      [
        "api-data-mode/RouterProvider",
        getThemeMenu("method", [
          "&lt;RouterProvider /&gt;",
          "createBrowserRouter()",
        ]),
        "done",
      ],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
