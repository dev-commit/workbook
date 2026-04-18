import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/material-ui/";
const title = "Material-UI";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/use", getTopicSubtitle("use")],
    ],
  },
  {
    title: "Компоненты",
    children: [
      ["components/Stepper", getThemeMenu("method", ["Stepper"])],
      ["components/Table", getThemeMenu("method", ["Table"])],
    ],
  },
  {
    title: "Стилизация",
    children: [
      ["styling/stylization", "Стилизация", "done"],
      ["styling/with-styles", getThemeMenu("method", ["withStyles"]), "check"],
      ["styling/make-styles", getThemeMenu("method", ["makeStyles"]), "check"],
      ["styling/spacing", getThemeMenu("method", ["spacing"]), "check"],
      ["styling/variants", "Варианты CSS in JS", "check"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
