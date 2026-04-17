import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-vue/vuex/";
const title = "Vuex";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Элементы",
    children: [
      ["elements/store", "1. Хранилище (store)"],
      ["elements/state", "2. Состояние (state)"],
      ["elements/getters", "3. Геттеры (getters)"],
      ["elements/mutations", "4. Мутации (mutations)"],
      ["elements/actions", "5. Действия (actions)"],
      ["elements/modules", "6. Модули (modules)"],
    ],
  },
  {
    title: "Примеры",
    children: [["samples/samples", "Примеры"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
