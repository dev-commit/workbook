# Async Function (ES2017)

## Информация

::: tip Async Function

- **Async Function** - асинхронная функция (Promise + Generator)
- Асинхронная функция возвращает Promise, для получения значения используется then
- Если в асинхронной функции специально вернуть Promise, он не оборачивается в другой Promise
  :::

- `await` дожидается выполнения Promise, вытаскивает значение и возвращает его
- Код после `await` выполнится только после выполнения функции
- `await` можно использовать только внутри асинхронной функции
- `await` необязательно ставить перед вызовом асинхронной фунцкии. это может быть любая функция, возвращающая Promise

## Объявление

### Функция

<v-two :title="['Стрелочная', 'Обычная']">
  <template #first>
 
 ```js
const foo = async () => {
    const a = await AsyncFunction();
};
```

  </template>
  <template #last>

```js
async function foo() {
  const a = await AsyncFunction();
}
```

  </template>
</v-two>

### Анонимная самовызывающаяся функция

<v-two :title="['Стрелочная', 'Обычная']">
  <template #first>

```js
(async () => {
  const a = await AsyncFunction();
})();
```

  </template>
  <template #last>

```js
(async function () {
  const a = await AsyncFunction();
})();
```

  </template>
</v-two>

## Варианты объявления

```js
// Обычная функция
const getUser = async function (id) {
  //
};

// Стрелочная функция
const getUser = async (id) => {
  //
};

// Свойство объекта
const obj = {
  getUser: async function (id) {
    //
  },
};

// Метод объекта
const obj = {
  async getName() {
    return fetch("https://www.example.com");
  },
};

// Класс
class Obj {
  async getResource() {
    return fetch("https://www.example.com");
  }
}
```
