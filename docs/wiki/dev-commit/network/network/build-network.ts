import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "network/network/";
const title = "HTTP | Протоколы";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "API",
    children: [["api/request", "Варианты Request"]],
  },
  {
    title: "HTTP",
    children: [
      ["http/http", emoji.fire + "HTTP / TCP"],
      ["http/http2", "HTTP/2"],
      ["http/https", "HTTPS"],
      ["http/http-vs-https", "HTTP vs HTTPS"],
      ["http/1-http-structure", emoji.star + "1. Структура протокола"],
      ["http/2-http-methods", emoji.star + "2. HTTP Methods"],
      ["http/3-http-headers", emoji.star + "3. HTTP Headers"],
      ["http/4-http-status-codes", emoji.star + "4. HTTP Status Codes"],
    ],
  },
  {
    title: "Протоколы",
    children: [
      ["protocols/osi", emoji.theory + "Сетевая модель OSI"],
      ["protocols/tcp", "TCP"],
      ["protocols/udp", "UDP"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
