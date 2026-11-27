# Подключение изображений

## 1. Глобальный файл из директории "public"

- Обязательно задавать атрибуты _width_ и _height_

```jsx
import Image from "next/image";

const App = () => {
  return <Image src="/logo.png" width="200" height="200" alt="Logo" priority />;
};
```

::: warning

- С Next.js 16 проп `priority` устарел: вместо него используется `preload` (или `loading="eager"`, если нужно только отключить ленивую загрузку)

:::

## 2. Локальный файл

::: info

- https://nextjs.org/docs/app/building-your-application/optimizing/images#local-images

:::

- Не обязательно задавать атрибуты _width_ и _height_

```jsx
import Image from "next/image";
import logo from "./img/logo.svg";

const App = () => {
  return <Image src={logo} alt="Logo" priority className={styles.logo} />;
};
```

## 3. Background-image в CSS

- Работает как обычно

```css
.item {
  background-image: url(./img/logo.svg);
  width: 200px;
  height: 200px;
}
```

## 4. Background-image в JSX

```jsx
import Image from "next/image";
import logo from "./img/logo.svg";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${logo.src})`,
        width: "200px",
        height: "200px",
        backgroundSize: "contain",
      }}
    ></div>
  );
};
```
