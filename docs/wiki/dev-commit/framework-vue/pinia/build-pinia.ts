import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-vue/pinia/";
const title = "Pinia";
const theme: TThemeTopics = "vue";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  // {
  //   title: "",
  //   children: [
  //     ["/", ""],
  //   ],
  // },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
