import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react-hooks/";
const title = "React Hooks";
const theme: TThemeTopics = "react";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Hooks",
    children: [
      ["hooks/useState", getThemeMenu("accent", ["useState"])],
      ["hooks/useEffect", getThemeMenu("accent", ["useEffect"])],
      ["hooks/useRef", getThemeMenu("accent", ["useRef"])],
      ["hooks/useCallback", getThemeMenu("accent", ["useCallback"])],
      ["hooks/useMemo", getThemeMenu("accent", ["useMemo"])],
      ["hooks/useContext", getThemeMenu("accent", ["useContext"]), "done"],
      ["hooks/useReducer", getThemeMenu("accent", ["useReducer"])],
      ["hooks/use", getThemeMenu("outline", ["use"])],
      ["hooks/useId", getThemeMenu("method", ["useId"])],
      ["hooks/useTransition", getThemeMenu("method", ["useTransition"])],
      [
        "hooks/useSyncExternalStore",
        getThemeMenu("method", ["useSyncExternalStore"]),
      ],
      ["hooks/useDeferredValue", getThemeMenu("method", ["useDeferredValue"])],
      [
        "hooks/useImperativeHandle",
        getThemeMenu("method", ["useImperativeHandle"]),
      ],
      ["hooks/useDebugValue", getThemeMenu("method", ["useDebugValue"])],
      ["hooks/useLayoutEffect", getThemeMenu("unactive", ["useLayoutEffect"])],
      [
        "hooks/useInsertionEffect",
        getThemeMenu("unactive", ["useInsertionEffect"]),
      ],
    ],
  },
  {
    title: "Custom Hooks",
    children: [
      ["custom-hooks/info", emoji.theory + "Кастомные хуки"],
      [
        "custom-hooks/useDidUpdateEffect",
        getThemeMenu("method", ["useDidUpdateEffect"]),
      ],
      ["custom-hooks/useDebounce", getThemeMenu("method", ["useDebounce"])],
      ["custom-hooks/useInput", getThemeMenu("method", ["useInput"])],
      ["custom-hooks/useLogger", getThemeMenu("method", ["useLogger"])],
      ["custom-hooks/usePrevious", getThemeMenu("method", ["usePrevious"])],
      [
        "custom-hooks/useFirstMountState",
        getThemeMenu("method", ["useFirstMountState"]),
      ],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
