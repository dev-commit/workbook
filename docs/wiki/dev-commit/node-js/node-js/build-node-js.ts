import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "node-js/node-js/";
const title = "Node.js";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Теория",
    children: [
      ["theory/architecture", emoji.star + "Архитектура Node.js"],
      ["theory/event-loop", emoji.star + "Event Loop"],
      ["theory/thread-pool", emoji.star + "Thread Pool"],
      ["theory/libuv", emoji.star + "libuv"],
    ],
  },
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/stream", emoji.fire + "Node.js Stream"],
    ],
  },
  {
    title: "Модуль <u-code-text>fs</u-code-text>",
    children: [
      ["module-fs/fs", "Команды"],
      ["module-fs/readFile", getThemeMenu("method", ["readFile", "writeFile"])],
      ["module-fs/appendFile", getThemeMenu("method", ["appendFile", "unlink"])],
      ["module-fs/existsSync", getThemeMenu("method", ["existsSync"])],
      ["module-fs/mkdir", getThemeMenu("method", ["mkdir", "rmdir"])],
      ["module-fs/createReadStream", getThemeMenu("method", ["createReadStream", "createWriteStream"])],
    ],
  },
  {
    title: "Методы",
    children: [
      ["methods/pipe", getThemeMenu("method", [".pipe"])],
    ],
  },
  {
    title: "Встроенные модули",
    children: [
      ["nodejs-modules/http", getThemeMenu("method", ["http"])],
      ["nodejs-modules/path", getThemeMenu("method", ["path"])],
      ["nodejs-modules/events", getThemeMenu("method", ["events"])],
      ["nodejs-modules/util", getThemeMenu("method", ["util"])],
      ["nodejs-modules/os", getThemeMenu("method", ["os"])],
      ["nodejs-modules/worker_threads", getThemeMenu("method", ["worker_threads"])],
    ],
  },
  {
    title: "Пакеты",
    children: [
      ["package/body-parser", getThemeMenu("method", ["body-parser"])],
      ["package/nodemailer", getThemeMenu("method", ["nodemailer"])],
      ["package/nodemon", getThemeMenu("method", ["nodemon"])],
      ["package/rimraf", getThemeMenu("method", ["rimraf"])],
    ],
  },
  {
    title: "Модули",
    children: [
      ["modules/module-system", emoji.theory + "Модульная система"],
    ],
  },
  {
    title: "ES6 Modules",
    children: [
      ["modules/module-es6-command", getThemeMenu("method", ["import", "export"])],
      ["modules/module-es6-use", "Usage Node.js, Browser"],
    ],
  },
  {
    title: "RequireJS",
    children: [
      ["modules/require-js-structure", emoji.theory + "Структура модуля"],
      ["modules/require-js-command", getThemeMenu("method", ["require", "module.exports"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
