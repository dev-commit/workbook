import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/git/";
const title = "Git";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Use Case",
    children: [
      ["usecase/squash-commit", emoji.code + "Squash Commit"],
      ["usecase/reset-changes", emoji.code + "Отмена изменений"],
      ["usecase/repo-transfer", emoji.code + "Перенос репозитория"],
      ["usecase/common", "Общее"],
    ],
  },
  {
    title: "Основное",
    children: [["main/merge-vs-rebase", emoji.star + "Merge vs Rebase"]],
  },
  {
    title: "Команды",
    children: [
      ["command/rebase", getThemeMenu("method", ["rebase"])],
      ["command/merge", getThemeMenu("method", ["merge"])],
      ["command/reset", getThemeMenu("method", ["reset"])],
      ["command/push", getThemeMenu("method", ["push"])],
      ["command/pull", getThemeMenu("method", ["pull"])],
      ["command/fetch", getThemeMenu("method", ["fetch"])],
      ["command/branch", getThemeMenu("method", ["branch"])],
      ["command/checkout", getThemeMenu("method", ["checkout"])],
      ["command/cherry-pick", getThemeMenu("method", ["cherry-pick"])],
      ["command/init", getThemeMenu("method", ["init"])],
      ["command/clone", getThemeMenu("method", ["clone"])],
      ["command/add", getThemeMenu("method", ["add"])],
      ["command/commit", getThemeMenu("method", ["commit"])],
      ["command/remote", getThemeMenu("method", ["remote"])],
      ["command/tag", getThemeMenu("method", ["tag"])],
      ["command/cherry", getThemeMenu("method", ["cherry"])],
      ["command/restore", getThemeMenu("method", ["restore"])],
      ["command/stash", getThemeMenu("method", ["stash"])],
      ["command/revert", getThemeMenu("method", ["revert"])],
      ["command/status", getThemeMenu("method", ["status"])],
      ["command/diff", getThemeMenu("method", ["diff"])],
      ["command/config", getThemeMenu("method", ["config"])],
      ["command/help", getThemeMenu("method", ["help"])],
      ["command/log", getThemeMenu("method", ["log"])],
      ["command/shortlog", getThemeMenu("method", ["shortlog"])],
      ["command/clean", getThemeMenu("method", ["clean"])],
      ["command/bisect", getThemeMenu("method", ["bisect"])],
      ["command/mv", getThemeMenu("method", ["mv"])],
      ["command/rm", getThemeMenu("method", ["rm"])],
      ["command/show", getThemeMenu("method", ["show"])],
      ["command/blame", getThemeMenu("method", ["blame"])],
    ],
  },
  {
    title: "Прочее",
    children: [["other/crlf", "LF и CRLF"]],
  },
  {
    title: "Теория",
    children: [
      ["theory/info", emoji.theory + "Информация"],
      ["theory/principle", emoji.code + "Принцип работы"],
      ["theory/gitflow", emoji.code + "Gitflow"],
      ["theory/vcs", "Системы управления версиями"],
    ],
  },
  {
    title: "Технологии",
    children: [
      ["tech/git-submodules", "Git Submodules"],
      ["tech/smart-git", "SmartGit"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
