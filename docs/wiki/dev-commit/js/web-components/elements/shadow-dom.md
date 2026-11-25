# Shadow DOM

## Код

```html
<div id="root"></div>
```

```js
const element = document.getElementById("root");

const shadowRoot = element.attachShadow({
  mode: "open",
});

shadowRoot.innerHTML = "<strong>Hello All</strong> People";
element.shadowRoot.querySelector("strong").textContent = "Hello!";
// => Hello! People
```

## Информация

::: warning

Element.createShadowRoot => Element.attachShadow (устаревшая конструкция)

:::

::: tip Определение

- **Shadow DOM** - это средство для создания отдельного DOM-дерева внутри элемента, которое не видно снаружи без применения специальных методов. Shadow DOM - это внутренний DOM элемента, который существует отдельно от внешнего документа. В нём могут быть свои ID, свои стили и так далее. Причём снаружи его, без применения специальных техник, не видно, поэтому не возникает конфликтов

:::

- Shadow DOM - спецификация, описывающая метод объединения нескольких DOM-деревьев в одну иерархию и как эти деревья взаимодействуют друг с другом в пределах документа, что позволяет лучше скомпоновать DOM
- Shadow DOM можно создать внутри любого элемента
- С момента создания Shadow DOM обычное содержимое (дети) элемента не отображается, а показывается только Shadow DOM

## `<content>`

### Информация

- Тег `<content>` влияет только на отображение, он не перемещает узлы физически. Внутри `<content>` показывается не элемент целиком, а только его содержимое
- Внутри Shadow DOM можно использовать `<content>` много раз с разными значениями select, указывая таким образом, где конкретно какие части исходного содержимого разместить. Но при этом дублирование узлов невозможно. Если узел показан в одном `<content>`, то в следующем он будет пропущен
- Например, если сначала идёт `<content select="h3.title">`, а затем `<content select="h3">`, то в первом `<content>` будут показаны заголовки `<h3>` с классом title, а во втором – все остальные, кроме уже показанных
- Если в теге `<content></content>` есть содержимое, оно будет показано только в том случае, если узлов для вставки нет

### Код

```js
// JavaScript

createShadowRoot(); // Создание Shadow DOM
element.shadowRoot; // Корень
```

```html
<!-- HTML -->

<content></content>
<!-- Замена содержимого -->
```

```css
/* CSS */

::shadow/* Выбирает корень Shadow DOM */
>>>; /* Полностью игнорирует границы между DOM'ами */
```

### Создание createShadowRoot

```js
const root = document.querySelector("#element").createShadowRoot();
```

```html
<div id="element">Hi</div>
```

### Замена содержимого `<content></content>`

```js
// => Shadow - заменяет содержимое в "element"
root.innerHTML = "<p>Shadow</p>";

// => Hi All Shadow - выводит всё содержимое из "element"
root.innerHTML = "<h1><content></content></h1> <p>Shadow</p>";

// => Hi Shadow - вывести только <h3> из "element"
root.innerHTML = '<h1><content select="h3"></content></h1> <p>Shadow</p>';
```

```html
<div id="element">
  <h3>Hi</h3>
  <p>All</p>
</div>
```

### Корень shadowRoot

```js
const rootElement = document.querySelector("#element").shadowRoot;
rootElement.querySelector("p").innerHTML = "New Shadow";
```

## Стилизация

- По умолчанию стили внутри Shadow DOM относятся только к его содержимому
- `::shadow` - выбирает корень Shadow DOM
- Выбранный элемент сам по себе не создаёт CSS box, но служит отправной точкой для дальнейшей выборки уже внутри дерева Shadow DOM. Например, `#elem::shadow > div` найдёт внутри Shadow DOM #elem элементы div первого уровня
- `>>>` - особого вида CSS-селектор для всех элементов Shadow DOM, который полностью игнорирует границы между DOM'ами, включая вложенные подэлементы, у которых тоже может быть свой Shadow DOM
- Например, `#elem >>> span` найдёт все span внутри Shadow DOM #elem, но кроме того, если в #elem есть подэлементы, у которых свой Shadow DOM, то оно продолжит поиск в них
