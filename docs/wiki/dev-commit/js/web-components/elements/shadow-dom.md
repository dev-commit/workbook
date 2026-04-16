# Shadow DOM

```html
<div id="root"></div>
```

```js
const element = document.getElementById('root');

const shadowRoot = element.attachShadow({
    mode: 'open'
});

shadowRoot.innerHTML = 'Hello AllPeople';
element.shadowRoot.querySelector('strong').textContent = 'Hello!';
// => Hello! People
```Element.createShadowRoot => Element.attachShadowe (устаревшая конструкция)
- **Shadow DOM** - это средство для создания отдельного DOM-дерева внутри элемента, которое не видно снаружи без применения специальных методов. Shadow DOM - это внутренний DOM элемента, который существует отдельно от внешнего документа. В нём могут быть свои ID, свои стили и так далее. Причём снаружи его, без применения специальных техник, не видно, поэтому не возникает конфликтов
- Shadow DOM - спецификация, описывающая метод объединения нескольких DOM-деревьев в одну иерархию и как эти деревья взаимодействуют друг с другом в пределах документа, что позволяет лучше скомпоновать DOM
- Shadow DOM можно создать внутри любого элемента
- С момента создания Shadow DOM обычное содержимое (дети) элемента не отображается, а показывается только Shadow DOM
- Тег &lt;content&gt; влияет только на отображение, он не перемещает узлы физически. Внутри &lt;content&gt; показывается не элемент целиком, а только его содержимое
- Внутри Shadow DOM можно использовать &lt;content&gt; много раз с разными значениями select, указывая таким образом, где конкретно какие части исходного содержимого разместить. Но при этом дублирование узлов невозможно. Если узел показан в одном &lt;content&gt;, то в следующем он будет пропущен
- Например, если сначала идёт &lt;content select="h3.title"&gt;, а затем &lt;content select="h3"&gt;, то в первом &lt;content&gt; будут показаны заголовки &lt;h3&gt; с классом title, а во втором – все остальные, кроме уже показанных
- Если в теге &lt;content&gt;&lt;/content&gt; есть содержимое, оно будет показано только в том случае, если узлов для вставки нет

```js
createShadowRoot();  // создание Shadow DOM
shadowRoot();        // корень
```

```js
<content></content>// замена содержимого```

```js
::shadow  // выбирает корень Shadow DOM
>>>       // полностью игнорирует границы между DOM'ами
```

## Создание createShadowRoot

```js
const root = document.querySelector('#element').createShadowRoot();
```

```html
&lt;div id="element"&gt;Hi&lt;/div&gt;
```

## `Замена содержимого <content></content>`

```js
// => Shadow - заменяет содержимое в "element"
root.innerHTML = '&lt;p&gt;Shadow&lt;/p&gt;'; 

// => Hi All Shadow - выводит всё содержимое из "element"
root.innerHTML = '&lt;h1&gt;&lt;content&gt;&lt;/content&gt;&lt;/h1&gt; &lt;p&gt;Shadow&lt;/p&gt;';

// => Hi Shadow - вывести только &lt;h3&gt; из "element"
root.innerHTML = '&lt;h1&gt;&lt;content select="h3"&gt;&lt;/content&gt;&lt;/h1&gt; &lt;p&gt;Shadow1&lt;/p&gt;';
```

```html
&lt;div id="element"&gt;
	&lt;h3&gt;Hi&lt;/h3&gt;
	&lt;p&gt;All&lt;/p&gt;
&lt;/div&gt;
```

## Корень shadowRoot

```js
const rootElement = document.querySelector('#element').shadowRoot;
rootElement.querySelector('p').innerHTML = 'New Shadow';
```

## Стилизация

- По умолчанию стили внутри Shadow DOM относятся только к его содержимому

- ::shadow - выбирает корень Shadow DOM
- Выбранный элемент сам по себе не создаёт CSS box, но служит отправной точкой для дальнейшей выборки уже внутри дерева Shadow DOM. Например, #elem::shadow > div найдёт внутри Shadow DOM #elem элементы div первого уровня
- >>> - особого вида CSS-селектор для всех элементов Shadow DOM, который полностью игнорирует границы между DOM'ами, включая вложенные подэлементы, у которых тоже может быть свой Shadow DOM
- Например, #elem >>> span найдёт все span внутри Shadow DOM #elem, но кроме того, если в #elem есть подэлементы, у которых свой Shadow DOM, то оно продолжит поиск в них
