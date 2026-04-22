# Базовый пример

## Пример

### Корневой компонент

```js{5,9,11}
import { QueryClient, QueryClientProvider } from "react-query";

import { Example } from "./Example";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
};

export default App;
```

### Использование

```js{4}
import { useQuery } from "react-query";

export const Example = () => {
  const { isLoading, error, data } = useQuery("repoData", getResource);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return <h1>{data.name}</h1>;
};
```

### Утилиты

```js
const getResource = async () => {
  const res = await fetch(
    "https://api.github.com/repos/tannerlinsley/react-query",
  );
  return await res.json();
};
```
