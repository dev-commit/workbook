import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "system/menu/";
const title = "Menu";
const theme: TThemeTopics = "secondary";

const topics: ISidebarTopics[] = [
  {
    title: "getThemeMenu()",
    children: [
      ["/", getThemeMenu("method", ["method"])],
      ["/", getThemeMenu("accent", ["accent"])],
      ["/", getThemeMenu("packages", ["packages"])],
      ["/", getThemeMenu("unactive", ["unactive"])],
      ["/", getThemeMenu("outline", ["outline"])],
      ["/", getThemeMenu("error", ["error"])],
    ],
  },
  {
    title: "getTopicSubtitle()",
    children: [
      ["/", getTopicSubtitle("info")],
      ["/", getTopicSubtitle("install")],
      ["/", getTopicSubtitle("use")],
      ["/", getTopicSubtitle("variants")],
    ],
  },
  {
    title: "Общее",
    children: [
      ["/", "Тема проработана", "done"],
      ["/", "Тема НЕ проработана", "check"],
      ["/", emoji.fire + "Emoji"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
