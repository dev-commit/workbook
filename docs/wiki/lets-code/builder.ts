import { getSidebar } from "../../.vitepress/utils/sidebar";
import { getNav } from "../../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../../types";

import wikiJs from "./learn/js/build-js";
import wikiGit from "./learn/git/build-git";
import wikiInfo from "./data/info/build-info";

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Курсы",
    children: getNav([wikiGit, wikiJs]),
  },
  {
    text: "Данные",
    children: getNav([wikiInfo]),
  },
];

export const SIDEBAR = getSidebar([wikiJs, wikiGit, wikiInfo]);
