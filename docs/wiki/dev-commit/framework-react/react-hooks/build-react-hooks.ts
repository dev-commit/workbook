import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react-hooks/";
const title = "React Hooks";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Hooks",
    children: [
      ["hooks/useState", getThemeMenu("method", ["useState"])],
      ["hooks/useEffect", getThemeMenu("method", ["useEffect"])],
      ["hooks/useRef", getThemeMenu("method", ["useRef"])],
      ["hooks/useCallback", getThemeMenu("method", ["useCallback"])],
      ["hooks/useMemo", getThemeMenu("method", ["useMemo"])],
      ["hooks/useContext", getThemeMenu("method", ["useContext"]), "done"],
      ["hooks/useReducer", getThemeMenu("method", ["useReducer"])],
      ["hooks/use", getThemeMenu("method", ["use"])],
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
      ["hooks/useLayoutEffect", getThemeMenu("method", ["useLayoutEffect"])],
      [
        "hooks/useInsertionEffect",
        getThemeMenu("method", ["useInsertionEffect"]),
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
