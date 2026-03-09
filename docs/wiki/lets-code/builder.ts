import { getSidebar } from "../../.vitepress/utils/sidebar";
import { getNav } from "../../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../../types";

import wikiJs from "./learn/js/build-js";
import wikiGit from "./learn/git/build-git";
import wikiBooks from "./references/books/build-books";
import wikiTech from "./references/tech/build-tech";

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Обучение",
    children: getNav([wikiGit, wikiJs]),
  },
  {
    text: "Ссылки",
    children: getNav([wikiTech, wikiBooks]),
  },
];

export const SIDEBAR = getSidebar([wikiJs, wikiGit, wikiBooks, wikiTech]);
