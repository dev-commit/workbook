import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "frameworks/react-formik/";
const title = "Formik";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/use", getTopicSubtitle("use")],
    ],
  },

  {
    title: "API",
    children: [
      ["api/Formik", getThemeMenu("method", ["&lt;Formik /&gt;"])],
      ["api/Form", getThemeMenu("method", ["&lt;Form /&gt;"])],
      ["api/Field", getThemeMenu("method", ["&lt;Field /&gt;"])],
      ["api/useField", getThemeMenu("method", ["useField()"])],
      ["api/useFormikContext", getThemeMenu("method", ["useFormikContext()"])],
      ["api/withFormik", getThemeMenu("method", ["withFormik()"])],
    ],
  },
  {
    title: "Валидиция",
    children: [
      ["validation/info", emoji.theory + "Информация"],
      ["validation/validate", getThemeMenu("method", ["validate"])],
      [
        "validation/validation-schema",
        getThemeMenu("method", ["validationSchema"]),
      ],
      [
        "validation/setFieldTouched",
        getThemeMenu("method", ["onBlur", "setFieldTouched"]),
      ],
    ],
  },
  {
    title: "TypeScript",
    children: [
      ["typescript/onSubmit", "onSubmit"],
      ["typescript/validationSchema", "validationSchema"],
      ["typescript/FormikProps", "FormikProps"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
