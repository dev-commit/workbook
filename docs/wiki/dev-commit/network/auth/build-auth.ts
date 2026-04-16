import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getThemeMenu, getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "network/auth/";
const title = "Авторизация";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Session",
    children: [["session/session", "Session & Cookie"]],
  },
  {
    title: "JWT",
    children: [
      ["jwt/info", getTopicSubtitle("info")],
      ["jwt/algoritm", "Алгоритм работы"],
      ["jwt/tokens", "Токены"],
      ["jwt/secret-key", "Secret Key"],
    ],
  },
  {
    title: "Сервисы",
    children: [
      ["services/NextAuth", getThemeMenu("method", ["NextAuth.js"])],
      ["services/auth0", getThemeMenu("method", ["Auth0"])],
      ["services/okta", getThemeMenu("method", ["Okta"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;

