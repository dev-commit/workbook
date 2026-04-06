# Code

## Подсветка линий

<v-two>
  <template #first>

```ts{2-5,8-10}
class Vehicle {
  constructor(fuelCapacity, fuelEfficiency) {
    this.fuelCapacity = fuelCapacity;
    this.fuelEfficiency = fuelEfficiency;
  }
  getMaxDistance() {
    let distance = this.fuelCapacity * this.fuelEfficiency;
    if (this instanceof HybridVehicle) {
      distance += this.electricRange;
    }
    return distance;
  }
}
```

  </template>
  <template #last>

- `ts{4}` - одна строка
- `js{2,5,7}` - несколько строк
- `js{8-10}` - диапазон строк
- `js{8-10,19-22}` - несколько диапазонов строк

</template>
</v-two>

## Подстветка линий по типу

<v-two>
  <template #first>

```ts
export default {
  console.log('First'); // [!code --]
  console.log('Second'); // [!code ++]
  data() {
    return {
      msg: "Error", // [!code error]
      msg: "Warning", // [!code warning]
    };
  },
};
```

  </template>
  <template #last>

- `// [!code --]`
- `// [!code ++]`
- `// [!code warning]`
- `// [!code error]`
- `// [!code focus]`

</template>
</v-two>

---

## Code Group

```
::: code-group
code1
code2
:::
```

::: code-group

```js [config.js]
const config = {
  // ...
};

export default config;
```

```ts [App]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

:::
