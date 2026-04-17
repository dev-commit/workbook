# Matchers (Вычислители)

### Основные вычислители

- toBe - должно быть равно значению (для примитивов)
- toEqual - должно быть равно значению. рекурсивное сравнение каждого поля для object или array

```js
test('два плюс два равно четыре', () => {
    expect(2 + 2).toBe(4);
});

test('присваивание объекту', () => {
    const data = {один: 1};
    data['два'] = 2;
    expect(data).toEqual({один: 1, два: 2});
});
```

---
- toBe и toEqual эквивалентны по отношению к числам

### Проверка на правдивость

- toBeNull - значение должно быть null
- toBeUndefined - значение должно быть undefined
- toBeDefined - значение должно быть определено (не должно быть undefined)
- toBeTruthy - дает true при if конструкции
- toBeFalsy - дает false при if конструкции

```js
test('null', () => {
    const n = null;
    expect(n).toBeNull();
});
```

### Числа

- toBeGreaterThan - должно быть больше чем значение
- toBeGreaterThanOrEqual - должно быть больше или равно значению
- toBeLessThan - должно быть меньше чем значение
- toBeLessThanOrEqual - должно быть меньше или равно значению
- toBeCloseTo - должно быть равно float значению

```js
test('два плюс два', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
});
```

### Строки

- toMatch - сопоставление строк с регулярными выражениями

```js
test('в команде нет места Я', () => {
    expect('команда').not.toMatch(/Я/);
});
```

### Массивы и перебираемые объекты

- toContain

```js
const shoppingList = ['мешки', 'полотенца', 'пиво'];

test('список покупок содержит пиво', () => {
    expect(shoppingList).toContain('пиво');
    expect(new Set(shoppingList)).toContain('пиво');
});
```

### Exceptions

- toThrow - для проверки того, что конкретная функция возвращает ошибку

```js
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
});
```
