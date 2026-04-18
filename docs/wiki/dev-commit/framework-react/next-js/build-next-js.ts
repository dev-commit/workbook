import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/next-js/";
const title = "Next.js";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/ssr", getThemeMenu("method", ["SSR"])],
      ["main/ssg", getThemeMenu("method", ["SSG"])],
      ["main/isr", getThemeMenu("method", ["ISR"])],
      ["main/cdn", getThemeMenu("method", ["CDN"])],
      ["main/lazy-loading", "Lazy Loading"],
    ],
  },
  {
    title: "Компоненты",
    children: [
      ["components/images", emoji.star + "Images"],
      ["components/fonts", emoji.star + "Fonts"],
      ["components/styles", emoji.star + "Styles"],
    ],
  },
  {
    title: "Структура",
    children: [
      ["structure/pages", "Pages"],
      ["structure/layouts", "Layouts"],
      ["structure/templates", "Templates"],
    ],
  },
  {
    title: "Роутинг",
    children: [
      ["routing/components/Link", getThemeMenu("method", ["Link"])],
      ["routing/hooks/usePathname", getThemeMenu("method", ["usePathname"])],
      ["routing/hooks/useRouter", getThemeMenu("method", ["useRouter"])],
      ["routing/hooks/useParams", getThemeMenu("method", ["useParams"])],
      ["routing/page-404", emoji.code + "Страница 404"],
    ],
  },
  {
    title: "Настройки",
    children: [["settings/env", getThemeMenu("method", ["ENV-переменные"])]],
  },
  {
    title: "TypeScript",
    children: [
      ["typescript/install", emoji.code + "Установка и настройка"],
      ["typescript/tsconfig", "tsconfig.json"],
      ["typescript/custom-types", "Пользовательские типы"],
    ],
  },
  {
    title: "Деплой",
    children: [
      ["deploy/vercel", "Vercel (SSR)"],
      ["deploy/github-pages", "Github Pages (SSG)"],
    ],
  },
  {
    title: "Запросы на сервер",
    children: [
      ["fetch/info", emoji.theory + "Информация", "check"],
      [
        "fetch/getInitialProps",
        getThemeMenu("method", ["getInitialProps"]),
        "check",
      ],
      [
        "fetch/getServerSideProps",
        getThemeMenu("method", ["getServerSideProps"]),
        "check",
      ],
      [
        "fetch/getStaticProps",
        getThemeMenu("method", ["getStaticProps"]),
        "check",
      ],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
