# `<Link /><NavLink />`

::: info
https://reactrouter.com/api/components/Link
https://reactrouter.com/api/components/NavLink
https://reactrouter.com/start/declarative/navigating#navlink
:::

    Видоизмененная ссылка под React для редиректа на нужную страницу. Предотвращает обновление страницы, в отличии от обычной ссылки
    
Местоположение ссылки
Гарантирует, что этот компонент не будет сопоставлен как «активный», когда совпадают пути его потомков. Например, чтобы отобразить ссылку, которая активна только в корне веб-сайта, а не в каких-либо других URL-адресах

    Стилизация активной ссылки
    
Местоположение ссылки
Гарантирует, что этот компонент не будет сопоставлен как «активный», когда совпадают пути его потомков. Например, чтобы отобразить ссылку, которая активна только в корне веб-сайта, а не в каких-либо других URL-адресах

## `<Link />`

```js
import { Link } from "react-router"

const App = () = (
	<>
		<Link to="/">Home</Link>
		<Link to="/about/">About</Link>
	</>
)
```

## `<NavLink />`

- Использование NavLink вместо Link добавляет к активной ссылке класс active

```js
import { NavLink } from "react-router"

const App = () => {
  const setActiveClass = (statuses) => {
    return statuses.isActive ? cn(styles.link, styles.linkActive) : styles.link;
  }

	return (
		<>
			<NavLink to="/" className={setActiveClass}>Home</NavLink>
			<NavLink to="/about/" className={setActiveClass}>About</NavLink>
		</>
	)
}
```

## CSS-Modules

::: details Глобальная стилизация ссылки
- При использовании css-modules, стилизовать ссылку нужно глобально

```js
:global {
    a.active {
        color: yellowgreen !important;
    }
}
```

:::

::: details Сборка create-react-app

```js
import './Header.css'

const Header = () => (
    <ul className="header__links">
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about/">About</NavLink></li>
    </ul>
);
```

```css
.header__links a {}
.header__links a.active {}
```

:::

## Прочее

::: details Настройка сервера Webpack
- При переходе по Link изменяется url, но физически этой страницы нет. Поэтому нужно настроить сервер

```js
module.exports = {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
		publicPath: '/'
		},
	devServer: {
		contentBase: './dist',
		historyApiFallback: {
			disableDotRule: true
		},
		stats: 'errors-only',
		port: 3000
	}
}
```

:::
