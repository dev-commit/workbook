import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "frameworks/svelte/";
const title = "Svelte";
const theme: TThemeTopics = "vue";

const topics: ISidebarTopics[] = [
  {
    title: "Runes",
    children: [
      ["runes/state", getThemeMenu("method", ["$state"])],
      ["runes/props", getThemeMenu("method", ["$props"])],
      ["runes/effect", getThemeMenu("method", ["$effect"])],
      ["runes/derived", getThemeMenu("method", ["$derived"])],
      ["runes/derived-by", getThemeMenu("method", ["$derived.by"]), "check"],
    ],
  },

  {
    title: "Layout",
    children: [
      ["layout/each", getThemeMenu("method", ["#each"])],
      ["layout/if", getThemeMenu("method", ["#if"])],
      ["layout/const", getThemeMenu("method", ["@const"])],
      ["layout/snippet", getThemeMenu("method", ["#snippet"]), "check"],
    ],
  },

  {
    title: "Общее",
    children: [
      ["common/styles", "CSS-стили"],
      ["common/import", "Импорт из .svelte файла"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
