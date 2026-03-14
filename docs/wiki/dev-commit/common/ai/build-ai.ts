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
    title: "Ассистенты",
    children: [
      ["assistants/cursor", emoji.items + "Cursor"],
      ["assistants/cline", emoji.items + "Cline"],
      ["assistants/copilot", emoji.items + "GitHub Copilot"],
    ],
  },

  {
    title: "Ссылки",
    children: [
      ["links/llm", "LLM и платформы"],
      ["links/dev", "Разработка"],
      ["links/image", "Изображения"],
      ["links/video", "Видео"],
      ["links/sound", "Звук"],
      ["links/3d", "3D модели"],
      ["links/common", "Общее"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
