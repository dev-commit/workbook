import { emoji } from "./constants";

type TSubtitleCategory = "info" | "install" | "use" | "variants";

export const getTopicSubtitle = (category: TSubtitleCategory) => {
  switch (category) {
    case "info":
      return emoji.theory + "Информация";
    case "install":
      return emoji.settings + "Установка и настройка";
    case "use":
      return emoji.fire + "Базовый пример";
    case "variants":
      return emoji.code + "Варианты";
  }
};

type TMenuCategory =
  | "method"
  | "accent"
  | "packages"
  | "unactive"
  | "outline"
  | "error";

export const getThemeMenu = (category: TMenuCategory, data: string[]) => {
  const result = data.map(
    (item) => `<span class="menu-code menu-code-${category}">${item}</span>`,
  );

  return result.join(" ");
};
