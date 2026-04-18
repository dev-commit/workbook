# `<BrowserRouter />`

::: info
https://reactrouter.com/api/declarative-routers/BrowserRouter
:::
 Роутер
		
- Использует html5 history api и следит за тем чтобы UI был синхронизирован с тем что написано в адресной строке
- BrowserRouter технически является компонентом, но не создаёт DOM-элемента

Базовый URL для всех местоположений. Если ваше приложение обслуживается из подкаталога на вашем сервере, вам нужно установить это в подкаталог. Правильно отформатированное базовое имя должно иметь косую черту в начале, но не в конце

```js
import { BrowserRouter, Link, Routes, Route } from "react-router"

const App = () => (
	<BrowserRouter basename="/root/">
		<Link to="/about">About</Link>
		<Routes>
			<Route path="about" element={<About />} />
		</Routes>
	</BrowserRouter>
)
```
