import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "network/swr/";
const title = "SWR";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/peculiarities", "Особенности"],
    ],
  },
  {
    title: "API",
    children: [
      ["api/useSWR", getThemeMenu("method", ["useSWR"])],
      ["api/useSWRMutation", getThemeMenu("method", ["useSWRMutation"])],
      ["api/mutate", getThemeMenu("method", ["mutate"])],
      ["api/useSWRInfinite", getThemeMenu("method", ["useSWRInfinite"])],
      [
        "api/useSWRSubscription",
        getThemeMenu("method", ["useSWRSubscription"]),
      ],
      ["api/SWRConfig", getThemeMenu("method", ["SWRConfig", "useSWRConfig"])],
      ["api/useSWRImmutable", getThemeMenu("method", ["useSWRImmutable"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
