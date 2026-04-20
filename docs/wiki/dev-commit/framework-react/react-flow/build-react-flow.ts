import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react-flow/";
const title = "React Flow";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
    ],
  },
  {
    title: "Zustand",
    children: [
      ["zustand/info", getTopicSubtitle("info")],
      ["zustand/usestate-vs-zustand", emoji.star + "useState vs Zustand"],
      ["zustand/useStore", getThemeMenu("method", ["useStore"])],
    ],
  },
  {
    title: "Dagre",
    children: [
      ["dagre/info", getTopicSubtitle("info")],
      ["dagre/install", getTopicSubtitle("install")],
      ["dagre/use", emoji.fire + "Использование"],
    ],
  },
  {
    title: "Components",
    children: [
      ["components/Handle", getThemeMenu("method", ["&lt;Handle /&gt;"])],
    ],
  },
  {
    title: "Elements",
    children: [],
  },
  {
    title: "Nodes",
    children: [["elements/nodes", emoji.star + "Nodes"]],
  },
  {
    title: "Edges",
    children: [
      ["elements/edges", emoji.star + "Edges"],
      ["elements/custom-edge", "Custom Edge"],
      ["elements/edge-styles", "Edge Styles"],
    ],
  },
  {
    title: "Methods",
    children: [["methods/onConnect", getThemeMenu("method", ["onConnect"])]],
  },
  {
    title: "Styles",
    children: [["styles/classNames", "classNames"]],
  },
  {
    title: "Implementation",
    children: [
      ["implementation/topics", "Темы из документации"],
      ["implementation/features", "Функционал"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
