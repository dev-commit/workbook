# Основы

- **Enum** - предназначен для описания набора числовых данных с помощью строковых констант
- Позволяет лучше структурировать код, если присутстуют однотипные элементы

## Без значения

```js
enum Season {
	Winter, // 0
	Spring, // 1
	Summer, // 2
	Autumn  // 3
};

let a: Season = Season.Summer; // 2
let b: Season = Season[2];     // "Summer"

// Изменение значения
a = Season.Autumn;
```

## Задание значения

```js
enum SocialMedia {
	VK = 'VK',
	FACEBOOK = 'FACEBOOK',
	INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM // "INSTAGRAM"
```

## Использование как значение

- Enum можно удобнее использовать в типах как значение

```js
emum E {
    A = 'A',
    B = 'B',
}
const O = {
    A: 'A',
    B: 'B',
}

interface QWE {
    e: E;
    o: (typeof O)[keyof typeof O];
}
```

## Ограничения

#### Допустимо

```js
export enum FormFieldEnum {
    name = 'name',
    age = 'age'
}
```

#### Недопустимая вложенность

```js
export enum FormFieldEnum {
    filters = {
        age = 'age'
    }
    name = 'name'
}
```

### Пример

```js
enum FormFieldEnum {
    filter = 'filter',
    name = 'name',
    age = 'age'
}
```

```js
const FormField = {
    [FormFieldEnum.filter]: {
        [FormFieldEnum.age]: 'age'
    },
    [FormFieldEnum.name]: 'name'
}
```
