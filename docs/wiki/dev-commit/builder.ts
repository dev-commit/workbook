import { getSidebar } from "../../.vitepress/utils/sidebar";
import { getNav } from "../../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../../types";

import wikiUiKit from "./system/ui-kit/build-ui-kit";
import wikiMenu from "./system/menu/build-menu";
import wikiHtml from "./layout/html/build-html";
import wikiSvelte from "./frameworks/svelte/build-svelte";
import wikiNetwork from "./theory/network/build-network";

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Фреймворки",
    children: getNav([wikiSvelte]),
  },
  {
    text: "Вёрстка",
    children: getNav([wikiHtml]),
  },
  {
    text: "Теория",
    children: getNav([wikiNetwork]),
  },
  {
    text: "System",
    children: getNav([wikiUiKit, wikiMenu]),
  },
];

export const SIDEBAR = getSidebar([
  wikiUiKit,
  wikiHtml,
  wikiMenu,
  wikiSvelte,
  wikiNetwork,
]);
