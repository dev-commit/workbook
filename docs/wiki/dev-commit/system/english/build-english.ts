import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "system/english/";
const title = "English";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Теория",
    children: [
      ["theory/data", emoji.theory + "Данные"],
      ["theory/levels", emoji.theory + "Уровни английского"],
    ],
  },
  {
    title: "Времена",
    children: [
      ["tenses/tenses-table", emoji.star + "Таблица времен"],
      ["tenses/irregular-verbs", "Формы неправильных глаголов"],
    ],
  },
  {
    title: "Артикли",
    children: [
      ["articles/info", getTopicSubtitle("info")],
      ["articles/an", getThemeMenu("method", ["a", "an"])],
      ["articles/some", getThemeMenu("method", ["some", "any"])],
      ["articles/the", getThemeMenu("method", ["the"])],
    ],
  },
  {
    title: "Местоимения",
    children: [
      ["pronouns/this", "Указательные"],
      ["pronouns/object", "Объектные"],
      ["pronouns/possessive", "Притяжательные"],
    ],
  },
  {
    title: "Общее",
    children: [
      ["common/another", getThemeMenu("method", ["Another", "Other"])],
      ["common/can", getThemeMenu("method", ["Can", "Сould"])],
      ["common/conditionals", "Conditionals"],
      ["common/location", "Местоположение"],
      ["common/adjectives-comparison", "Степени сравнения прилагательных"],
      ["common/plurals", "Множественное число"],
    ],
  },
  {
    title: "Вопросы",
    children: [
      ["questions/question-word-order", emoji.code + "Порядок слов в вопросе"],
      ["questions/question-types", emoji.code + "Типы вопросов"],
    ],
  },
  {
    title: "Справочники",
    children: [
      ["directories/country", emoji.theory + "Страны и национальности"],
      ["directories/family", emoji.theory + "Семья"],
      ["directories/phrases", "Фразы"],
      ["directories/words", "Слова"],
    ],
  },
  {
    title: "Прочее",
    children: [["other/other", "Прочее"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
