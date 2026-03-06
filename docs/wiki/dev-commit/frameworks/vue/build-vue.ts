import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

// TODO:
const path = rootPath + "frameworks/vue/";
const title = "Vue.js";
const theme: TThemeTopics = "vue";

const topics: ISidebarTopics[] = [
  {
    title: "Методы",
    children: [
      ["methods/ref", getThemeMenu("method", ["ref"])],
      ["methods/defineEmits", getThemeMenu("method", ["defineEmits"])],
      ["methods/defineProps", getThemeMenu("method", ["defineProps"])],
      ["methods/watch", getThemeMenu("method", ["watch"])],
      ["methods/lifecycle", "Жизненный цикл"],
    ],
  },
  {
    title: "Разметка",
    children: [["layout/slot", getThemeMenu("method", ["&lt;slot&gt;"])]],
  },
  {
    title: "Категории",
    children: [
      [
        "category/defineComponent",
        getThemeMenu("method", ["defineComponent", "setup"]),
      ],
      ["category/styles", "Стилизация"],
      ["category/typescript", "TypeScript"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
