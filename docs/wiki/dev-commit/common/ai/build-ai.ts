import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/ai/";
const title = "AI";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/usecases", emoji.code + "Use Cases"],
      ["main/mcp", "MCP"],
    ],
  },
  {
    title: "Платформы",
    children: [
      ["platforms/main", emoji.star + "Основное"],
      ["platforms/llm", "LLM и платформы"],
      ["platforms/dev", "Разработка"],
      ["platforms/image", "Изображения"],
      ["platforms/video", "Видео"],
      ["platforms/sound", "Звук"],
      ["platforms/3d", "3D модели"],
      ["platforms/common", "Общее"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
