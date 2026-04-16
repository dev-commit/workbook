# Проверить закрывающиеся скобки

## Валидация JSON скобок: только {}

### Постановка задачи

- Написать функцию, которая будет валидировать JSON
- Необходимо только валидировать открывающиеся и закрывающиеся фигурные скобки в JSON формате
- На вход функция будет принимать строку, содержащую только открывающиеся и закрывающиеся фигурные скобки

### Алгоритм решения

Для решения задачи используется стек
1. Создать пустой стек
2. Перебрать каждый символ в строке
3. Если символ - открывающаяся скобка '{', добавить его в стек
4. Если символ - закрывающаяся скобка '}', проверить, есть ли в стеке открывающаяся скобка. Если есть, удалить её из стека. Если нет, вернуть false
5. После перебора всех символов, если стек пуст, вернуть true, иначе false

::: details Код

```js
const checkBrackets = (str) => {
  // Создаем стек для отслеживания открывающихся скобок
  const stack = [];

  // Перебираем каждый символ в строке
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Если символ - открывающаяся скобка, добавляем в стек
    if (char === "{") {
      stack.push(char);
    }
    // Если символ - закрывающаяся скобка
    else if (char === "}") {
      // Если стек пуст, значит нет соответствующей открывающейся скобки
      if (stack.length === 0) {
        return false;
      }
      // Удаляем последнюю открывающуюся скобку из стека
      stack.pop();
    }
  }

  // Если стек пуст, все скобки сбалансированы
  return stack.length === 0;
}
```

```js
// Тестовые примеры
console.log(checkBrackets("{ { } }")); // => true
console.log(checkBrackets("{ { { { } } } }")); // => true
console.log(checkBrackets("} {")); // => false
console.log(checkBrackets("{ } } { { }")); // => false
console.log(checkBrackets("{ { } { { } }")); // => false
console.log(checkBrackets("{ { } { { } } }")); // => true
```

:::

---

## Валидация скобок

### Постановка задачи

- Напишите функцию тестирующую правильность вложенных скобок трех типов
- (кроме нижеперчисленных символов других в строке нет)

```bash
'(' и ')', '[' и ']', '<' и '>'
```

```js
test('[]()<>') // => true
test('[]()<)') // => false
test('[(<>)]') // => true
test('[(<>])') // => false
```

### Варианты

::: details Несколько разных скобок

```js
function test (str) {
    const strArr = str.split('');
    const stack = [];
    const check = {
        ']': '[',
        ')': '(',
        '>': '<'
    };

    strArr.forEach(function (bracket) {
        if ((stack.length === 0) || !check[bracket] ) {
            stack.push(bracket);
        } else {
            const lastElmInStack = stack[stack.length - 1];
            if (lastElmInStack === check[bracket]) {
                stack.pop();
            }
        }
    });

  return !stack.length;
}
```

:::

::: details Один вид скобок (простое решение, не покрывает все кейсы)

```js
function checkBrackets(brackets) {
    let count = 0;

    for(let i = 0; i < brackets.length; i++) {
        if(brackets[i] === '(') {
            count++;
        } 
        if (brackets[i] === ')') {
            count--;
        }
        if (count < 0) {
            return false;
        }
    }
    return count === 0;
}
```

:::

::: details Один вид скобок (мой вариант)

```js
const checkValidBrackets = expression => {
    const strArr = expression.split('');
    const stack = [];
    const check = {
        '(': ')'
    }

    strArr.forEach(bracket => {
        if (bracket === ')' || bracket === '(') {
            if (stack.length === 0 && bracket === ')') {
                return false;
            }

            if (check[bracket]) {
                stack.push(bracket);
            } else {
                stack.pop();
            }
        }
    });

    return !stack.length;
}

[
    '()',
    ') ()',
    '( )(',
    '(( )',
    '(2 9))',
    '(())',
    '()()'
].map(checkValidBrackets);
```

:::

::: details [Непроверено 1]: Недоделанный вариант

```js
function test(string) {
    let array = [];
    
	// Некорректно указывать нулевой элемент
    if (string[0] === ')') {
        return false;
    }
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(' || array.length === 0) {
            array.push(string[i])
        } else {
            array.pop();
        }
    }
    
    return !array.length
}

test('()()()');          // => true
test('((()))');          // => true
test('(()))))))))))))'); // => false
test(')()))');           // => false
```

:::

::: details [Непроверено 2]

```js
const checkValidBrackets = expression => {
    let stack = [];
    let map = {
        '(': ')'
    }

    for (let i = 0; i < expression.length; i++) {
        if (Object.keys(map).some(key => key === expression[i])) {
            stack.push(expression[i]);
        } else {
            if (!Object.keys(map).some(key => key === expression[i] || map[key] === expression[i])) {
                continue;
            }
            if (map[stack.pop()] !== expression[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
```

:::
