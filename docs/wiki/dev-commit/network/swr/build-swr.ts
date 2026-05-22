import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "network/swr/";
const title = "SWR";
const theme: TThemeTopics = "primary";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/peculiarities", emoji.star + "Особенности"],
    ],
  },
  {
    title: "API",
    children: [
      ["api/useSWR", getThemeMenu("method", ["useSWR"])],
      ["api/useSWRMutation", getThemeMenu("method", ["useSWRMutation"])],
      ["api/mutate", getThemeMenu("unactive", ["mutate"])],
      ["api/useSWRInfinite", getThemeMenu("unactive", ["useSWRInfinite"])],
      [
        "api/useSWRSubscription",
        getThemeMenu("unactive", ["useSWRSubscription"]),
      ],
      [
        "api/useSWRConfig",
        getThemeMenu("unactive", ["useSWRConfig", "SWRConfig"]),
      ],
      ["api/useSWRImmutable", getThemeMenu("unactive", ["useSWRImmutable"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
