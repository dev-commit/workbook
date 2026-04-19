import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/webpack/";
const title = "Webpack";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Информация",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/structure", "Структура проекта"],
      ["main/scripts", "Скрипты"],
    ],
  },
  {
    title: "Module Federation",
    children: [
      ["module-federation/info", emoji.theory + "Информация"],
      ["module-federation/semver", emoji.theory + "Semver"],
      ["module-federation/code", emoji.code + "Код"],
      ["module-federation/server", emoji.code + "Сервер"],
      ["module-federation/eager", emoji.code + "Eager Troubleshooting"],
      [
        "module-federation/ModuleFederationPlugin",
        getThemeMenu("method", ["ModuleFederationPlugin"]),
      ],
      ["module-federation/sample", "Пример"],
    ],
  },
  {
    title: "plugins",
    children: [
      ["plugins/webpack", getThemeMenu("method", ["webpack", "webpack-cli"])],
      [
        "plugins/webpack-dev-server",
        getThemeMenu("method", ["webpack-dev-server"]),
      ],
      ["plugins/babel", getThemeMenu("method", ["babel-loader"])],
      [
        "plugins/html-webpack-plugin",
        getThemeMenu("method", ["html-webpack-plugin"]),
      ],
      [
        "plugins/clean-webpack-plugin",
        getThemeMenu("method", ["clean-webpack-plugin"]),
      ],
      ["plugins/react", getThemeMenu("method", ["react"])],
    ],
  },
  {
    title: "loaders",
    children: [
      ["loaders/css-loader", getThemeMenu("method", ["css-loader"])],
      [
        "loaders/mini-css-extract-plugin",
        getThemeMenu("method", ["mini-css-extract-plugin"]),
      ],
      ["loaders/style-loader", getThemeMenu("method", ["style-loader"])],
      ["loaders/sass-loader", getThemeMenu("method", ["sass-loader"])],
      ["loaders/file-loader", getThemeMenu("method", ["file-loader"])],
      [
        "loaders/image-webpack-loader",
        getThemeMenu("method", ["image-webpack-loader"]),
      ],
      ["loaders/html-loader", getThemeMenu("method", ["html-loader"])],
    ],
  },
  {
    title: "postcss",
    children: [
      ["postcss/postcss-loader", getThemeMenu("method", ["postcss-loader"])],
      ["postcss/autoprefixer", getThemeMenu("method", ["autoprefixer"])],
      ["postcss/cssnano", getThemeMenu("method", ["cssnano"])],
      ["postcss/css-mqpacker", getThemeMenu("method", ["css-mqpacker"])],
    ],
  },
  {
    title: "options",
    children: [
      ["options/mode", getThemeMenu("method", ["mode"])],
      ["options/devtool", getThemeMenu("method", ["devtool"])],
      ["options/entry-output", getThemeMenu("method", ["entry", "output"])],
      ["options/library", getThemeMenu("method", ["library"])],
      ["options/watch", getThemeMenu("method", ["watch", "watchOptions"])],
      ["options/resolve", getThemeMenu("method", ["resolve"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
