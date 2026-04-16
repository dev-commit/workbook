import type { IBuildTopics, IHeaderMenuNavChildren } from "../../types";

export const getNav = (
  data: Array<IBuildTopics | null>,
): Array<IHeaderMenuNavChildren | null> => {
  const result = data.map((dataItem) => {
    if (!dataItem) return null;
    return {
      text: dataItem.title,
      link: dataItem.path,
      theme: dataItem.theme,
    };
  });

  return result;
};
