import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "testing/cypress/";
const title = "Cypress";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/use", getTopicSubtitle("use")],
    ],
  },
  {
    title: "Методы",
    children: [
      ["methods/methods", "Общие методы"],
      ["methods/should", getThemeMenu("method", ["should"])],
      ["methods/type", getThemeMenu("method", ["type", "clear", "blur"])],
      ["methods/visit", getThemeMenu("method", ["visit", "pause", "wait"])],
      ["methods/get", getThemeMenu("method", ["get"])],
    ],
  },
  {
    title: "Fixtures",
    children: [
      ["fixtures/fixture", getThemeMenu("method", ["fixture"])],
      ["fixtures/intercept", getThemeMenu("method", ["intercept"])],
    ],
  },
  {
    title: "Элементы",
    children: [
      ["elements/plugins", getThemeMenu("method", ["Plugins"])],
      ["elements/support", getThemeMenu("method", ["Support"])],
    ],
  },
  {
    title: "Библиотеки",
    children: [
      ["libs/cypress-image-snapshot", getThemeMenu("method", ["cypress-image-snapshot"])],
      ["libs/cypress-axe", getThemeMenu("method", ["cypress-axe", "axe-core"])],
      ["libs/mochawesome", getThemeMenu("method", ["mochawesome"])],
      ["libs/mocha-allure-reporter", getThemeMenu("method", ["mocha-allure-reporter", "allure-commandline"])],
      ["libs/cypress-mochawesome-reporter", getThemeMenu("method", ["cypress-mochawesome-reporter"])],
      ["libs/cypress-visual-regression", getThemeMenu("method", ["cypress-visual-regression"])],
      ["libs/cypress-file-upload", getThemeMenu("method", ["cypress-file-upload"])],
    ],
  },
  {
    title: "Guides",
    children: [
      ["guides/network-requests", emoji.star + "Network Requests"],
    ],
  },
  {
    title: "Прочее",
    children: [
      ["other/trash", "Свалка"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
