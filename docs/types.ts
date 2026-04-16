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

export type IThemeConfigNav = {
  text: string;
  items: IHeaderMenuNavChildren[];
};
