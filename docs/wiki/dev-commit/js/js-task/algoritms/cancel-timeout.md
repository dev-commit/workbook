# Написать функцию, которая отменяет все таймауты, которые есть

::: warning

- Проверить код

:::

## Решение

```js
// Оригинальные функции - через них работают обёртки
const originalSetTimeout = globalThis.setTimeout;
const originalClearTimeout = globalThis.clearTimeout;

// id таймаутов, которые ещё не сработали и не отменены
const activeTimeouts = new Set();

globalThis.setTimeout = (callback, delay, ...args) => {
  const id = originalSetTimeout(() => {
    activeTimeouts.delete(id); // Таймаут сработал - больше не активен
    callback(...args);
  }, delay);

  activeTimeouts.add(id);
  return id;
};

globalThis.clearTimeout = (id) => {
  activeTimeouts.delete(id); // Отменён вручную - больше не активен
  originalClearTimeout(id);
};

const clearAllTimeouts = () => {
  activeTimeouts.forEach((id) => originalClearTimeout(id));
  activeTimeouts.clear();
};

// Использование
setTimeout(() => console.log("1"), 1000);
setTimeout(() => console.log("2"), 2000);

clearAllTimeouts(); // Ни один из таймаутов не сработает
```

- Встроенного способа получить список всех таймаутов нет, поэтому `setTimeout` подменяется обёрткой, которая запоминает id
- В списке только активные таймауты: id удаляется, когда таймаут сработал или отменён через `clearTimeout`, поэтому список не растёт
- Отменяются только таймауты, созданные после подмены `setTimeout`
- `globalThis` - работает и в браузере (`window`), и в Node.js
