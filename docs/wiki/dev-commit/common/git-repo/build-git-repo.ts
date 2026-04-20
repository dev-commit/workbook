import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/git-repo/";
const title = "Git Repo";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "GitHub",
    children: [
      ["github/ssh", emoji.code + "Подключение по SSH"],
      ["github/github-cli", emoji.star + "GitHub CLI"],
      ["github/github-desktop", "GitHub Desktop"],
      ["github/github-api", "Github API"],
      [
        "github/github-readme-stats",
        getThemeMenu("method", ["github-readme-stats"]),
      ],
    ],
  },
  {
    title: "Bitbucket",
    children: [["bitbucket/ssh", emoji.code + "Подключение по SSH"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
