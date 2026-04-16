# path(), pathOr()

	Получить значение по заданному пути
    

	Если данный ненулевой объект имеет значение по указанному пути, возвращает значение по этому пути. В противном случае возвращает предоставленное значение по умолчанию

```js
import { path, pathOr } from 'ramda';

const event = {
    target: {
        value: 77
    }
}

// js
const value = event.target.value

// ramda
const value = path(['target', 'value'], event);
```
