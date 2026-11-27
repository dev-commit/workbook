export interface IHeaderMenuNavChildren {
  text: string;
  link: string;
  theme: TThemeTopics;
}

export type TSidebarTopicsItemStatus = "done" | "check" | "doit";

export type TSidebarTopicsItem = [
  path: string,
  title: string,
  status?: TSidebarTopicsItemStatus,
];

export interface ISidebarTopics {
  title: string;
  children: TSidebarTopicsItem[];
}

export interface IHeaderMenuNav {
  text: string;
  children: Array<IHeaderMenuNavChildren | null>;
}

export interface IBuildTopics {
  topics: ISidebarTopics[];
  path: string;
  title: string;
  theme: TThemeTopics;
}

export type TThemeTopics =
  | "default"
  | "react"
  | "node"
  | "js"
  | "vue"
  | "html"
  | "primary"
  | "secondary"
  | "accent"
  | "actual"
  | "tech"
  | "theory"
  | "svelte"
  | null;

// Пункт навбара тем в themeConfig.nav (config.ts → VPNavbar.vue).
// newRow - пункт начинается с новой строки (в build-*.ts перед ним стоит null)
export type TThemeConfigNavItem = IHeaderMenuNavChildren & {
  newRow?: boolean;
};

export type TThemeConfigNav = {
  text: string;
  items: TThemeConfigNavItem[];
};
