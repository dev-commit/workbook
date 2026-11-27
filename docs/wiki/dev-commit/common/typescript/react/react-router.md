# react-router

## RouteComponentProps

::: warning

- `RouteComponentProps` и `useHistory` есть только в react-router v5. В v6 они удалены, для навигации используется `useNavigate()`

:::

```ts
import { RouteComponentProps } from "react-router";

interface IProps {
  history: RouteComponentProps["history"];
}

import { useHistory } from "react-router-dom";
const history = useHistory();
```
