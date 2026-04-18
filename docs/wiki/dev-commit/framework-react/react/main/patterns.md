# Шаблоны проектирования в React

## Шаблоны

### 1. Шаблон«Провайдер»

- API React Context
- Компонент верхнего уровня называется провайдером (provider). Он записывает в контекст какие-то значения. Компонент-потомок, называемый потребителем (consumer), берёт эти значения из контекста.

### 2. Шаблон High Order Component (Компоненты высшего порядка).«Декоратор»

- Идея повторного использования кода
- Компонент высшего порядка - это функция, которая принимает входной компонент и возвращает расширенную или изменённую версию этого компонента

### 3. Шаблон «render props»

- Шаблон «функция как потомок»
- Позволяет достичь того же самого, что достижимо с помощью компонентов высшего порядка
- Идея: передача управления вашей функцией рендеринга другому компоненту, который затем возвращает управление через свойство, являющееся функцией
- Некоторые предпочитают применять для достижения того же эффекта динамические свойства, или просто используют this.props.children.

```js
<div>{() => { return "hello world!»}()}</div>
```

## Прочее

### 1. Conditional Rendering (Условный рендеринг)

```js
return (
	{condition ? (<h1>Hello</h1>) : null}
)
```

### 2. Passing down props (Передача свойств вниз по дереву компонентов)

```js
<Layout  title="Hi" name="Alex" />
```

### 3. Destructuring props (Деструктурирование свойств)

```js
const Layout = ({ title, name }) => ();
```

### 4. Event switch (Переключатель событий)

- Для того, чтобы не писать много обработчиков событий, все события объединяют в один

```js
// A lot of methods
handleClick() { ... }
handleMouseEnter() { ... }
handleMouseLeave() { ... }

// One Event switch
handleEvent({ type }) {
    switch(type) {
        case 'click':      return ...
        case 'mouseenter': return ...
        case 'mouseenter': return ...
        default:           return ...
    }
}
```

### 5. Array as children (Массив как потомок)

```js
const App = ({ children }) => [
    <Navigation key="navigation" />,
    <Main key="main">{children}</Main>,
    <Footer key="footer" />,
]
```
