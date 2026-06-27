import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "network/network/";
const title = "Сеть";
const theme: TThemeTopics = "primary";

const topics: ISidebarTopics[] = [
  {
    title: "Теория",
    children: [
      ["theory/client-server", emoji.theory + "Client-Server"],
      ["theory/url", emoji.theory + "URL и URI"],
    ],
  },
  {
    title: "Технологии",
    children: [
      ["tech/websocket", emoji.star + "WebSocket"],
      ["tech/graphql", emoji.star + "GraphQL"],
      ["tech/webrtc", emoji.star + "WebRTC"],
      ["tech/long-polling", "Long Polling"],
      ["tech/sse", "SSE (Server Sent Events)"],
      ["tech/cors", emoji.items + "CORS"],
    ],
  },
  {
    title: "Работа с API",
    children: [
      ["api/api", emoji.theory + "API"],
      ["api/rest-vs-soap", emoji.theory + "REST vs SOAP"],
      ["api/rest", emoji.fire + "REST API"],
      ["api/soap", "SOAP"],
    ],
  },
  {
    title: "Hacking",
    children: [
      ["hacking/xss", "XSS"],
      ["hacking/sql-injection", "SQL инъекции"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
