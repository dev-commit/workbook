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
    title: "Основное",
    children: [["main/ecosystem", emoji.theory + "Экосистема"]],
  },

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
    title: "Директивы",
    children: [
      ["directives/info", emoji.theory + "Информация"],
      ["directives/v-text", getThemeMenu("method", ["v-text", "v-html"])],
      [
        "directives/v-show",
        getThemeMenu("method", ["v-show", "v-if", "v-else", "v-else-if"]),
      ],
      // ["directives/v-for", getThemeMenu("method", ["v-for"])],
      // ["directives/v-on", getThemeMenu("method", ["v-on:"])],
      // [
      //   "directives/v-bind",
      //   getThemeMenu("method", ["v-bind:"]) + " :class :style",
      // ],
      // ["directives/v-model", getThemeMenu("method", ["v-model"])],
      // ["directives/v-pre", getThemeMenu("method", ["v-pre"])],
      // ["directives/v-cloak", getThemeMenu("method", ["v-cloak"])],
      // ["directives/v-once", getThemeMenu("method", ["v-once"])],
    ],
  },

  {
    title: "Разметка",
    children: [["directives/slot", getThemeMenu("method", ["&lt;slot&gt;"])]],
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
