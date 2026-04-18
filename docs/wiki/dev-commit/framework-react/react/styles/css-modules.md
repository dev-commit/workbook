# CSS Modules

::: info
https://github.com/css-modules/css-modules
:::

## Create Ract App

- К названию файла дописать module.css

```js
import styles from './App.module.css';

const App = () => {
    return (<div className={styles.header}></div>)
}
```

## Глобальный CSS

- Поскольку вы используете синтаксис импорта ES6, вы можете использовать один и тот же синтаксис для импорта таблицы стилей

```js
import './App.css';
```
- Кроме того, вы можете перенести свой класс `:global` на глобальную область (этот модуль CSS не будет его модулировать, например: добавление случайного идентификатора рядом с ним)

```css
:global(.myclass) {
	background-color: red;
}
```
