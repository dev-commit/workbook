# Хук эффекта useEffect()

::: info
https://react.dev/reference/react/useEffect
:::

    необходим для выполнения Side Effects (побочных эффектов)
    
коллбэк
dependencies - массив, с указанием от чего зависит useEffect

```js
import { useEffect } from 'react';
```

## Варианты

#### componentDidMountcomponentDidUpdate

- Отсделить каждый рендеринг компонента. Выполняется после каждого рендера и обновления

```js
useEffect(() => {
	document.title = 'Заголовок';
});
```

#### componentDidMount

```js
useEffect(() => {
	document.title = 'Заголовок';
}, []);
```

#### componentDidUpdate

- Выполнит эффект, только если count изменился при отрисовке

```js
useEffect(() => {
	document.title = `Вы нажали ${this.state.count} раз`;
}, [count]);
```

#### componentWillUnmount

```js
useEffect(() => () => {
	window.removeEventListener('resize', onResize);
}, []);
```

#### componentDidMountcomponentWillUnmount

```js
useEffect(() => {
    // componentDidMount
    window.addEventListener('resize', onResize, false);
    // componentWillUnmount
    return () => {
		window.removeEventListener('resize', onResize);
	}
}, []);
```

## Кейсы

### Async в useEffect

- Почему нельзя использовать async внутри useEffect?

- useEffect может вернуть Callback Function (componentWillUnmount) или undefined
- Асинхронная функция вернет Promise, что будет некорректно
- Вместо этого можно написать асинхронную анонимную самовызывающуюся функцию внутри useEffect

```js
// Обычная функция
useEffect(() => {
    (async function () {
        console.log("Hello");
    })();
}, []);

// Стрелочная функция
useEffect(() => {
    (async () => {
        console.log("Hello");
    })();
}, []);
```

---

```js
useEffect(async () => {
    console.log("Hello");
}, []);
```

- Ошибка: "useEffect не должен возвращать ничего, кроме функции, которая используется для очистки. Похоже, вы написали useEffect(async () => ...) или вернули Promise"

### useEffect и очередность при монтировании

- Какой console.log раньше выведется?

```js
const App = () => {
  useEffect(() => {
    console.log("Parent");
  }, []);

  return <Child />;
};
```

```js
const Child = () => {
  useEffect(() => {
    console.log("Child");
  }, []);

  return <h1>Child</h1>;
};
```
- 1. Child
- 2. Parent

### Return и Dependencies

- Если в useEffect есть return и указанные зависимости в массиве зависимостей [counter], то функция из return будет выполняться при каждом update из массива зависимостей перед следующем ренедером

```js
useEffect(() => {
    return () => {
		console.log('Hello);
	}
}, [counter]);
```

## Переписывание на Хуки

::: details Примеры

### async await

#### useEffect

```js
useEffect(() => {
    (async () => {
        await myAsyncFunction();
        myFunction();
    })();
}, []);
```

#### componentDidMount

```js
async componentDidMount() {
    await myAsyncFunction();
    myFunction();
}
```

### getDerivedStateFromProps

#### useEffect

```js
const CompanySelect = ({ company }: Props) => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (company && isNil(value)) {
            setValue(company);
        }
    });
};
```

#### getDerivedStateFromProps

```js
type State = { value: ?string }
type Props = { company: string }

class CompanySelect extends PureComponent<Props, State> {
    state = { value: null };

    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        if (nextProps.company && isNil(prevState.value)) {
            return {
                value: nextProps.company,
            };
        }

        return null;
    }
}
```

---

#### useEffect

```js
useEffect(() => {
    if (!isEditRow) {
        setTypesActivityState(typesActivity);
    }
});
```

#### getDerivedStateFromProps

```js
static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.isEditRow) {
        return {
            typesActivity: nextProps.typesActivity,
        };
    }
    return null;
}
```

:::

## Теория

::: details Данные
- **Побочные эффекты** - операции, которые могут влиять на работу других компонентов и их нельзя выполнить во время рендера. Н-р: запрашивать данные, делать подписки или вручную менять DOM из React-компонента

### Виды эффектов

- 1. Эффекты без сброса. Иногда мы хотим выполнить дополнительный код после того, как React обновил DOM. Сетевые запросы, изменения DOM вручную, логирование — всё это примеры эффектов, которые не требуют сброса
- 2. Эффекты со сбросом. Например, может потребоваться установить подписку на какой-нибудь внешний источник данных

### Теория

- Если эффект возвращает функцию, React выполнит её, когда придет время для очистки. Функция указывает эффекту, как выполнить «сброс». React производит очистку, когда компонент демонтируется
- Каждый раз, когда компонент перерисовывается, мы планируем новый эффект, заменяя предыдущий
- В отличие от componentDidMount или componentDidUpdate, эффекты, запланированные с помощью useEffect, не блокируют браузер, чтобы обновить экран

---
- При вызове useEffect, React получает указание запустить вашу функцию с «эффектом» после того, как он отправил изменения в DOM. Поскольку эффекты объявляются внутри компонента, у них есть доступ к его пропсам и состоянию. По умолчанию, React запускает эффекты после каждого рендера, включая первый рендер
- Хуки позволяют разделить код на основе того, что он делает, а не на основании имён методов жизненного цикла
- Если вы хотите запустить эффект и очистить его только один раз (при монтировании и демонтировании), вы можете передать пустой массив [] в качестве второго аргумента. Это укажет React, что ваш эффект не зависит от каких-либо значений из props или state, поэтому его не нужно повторно выполнять
- React будет сбрасывать эффект перед тем, как компонент размонтируется. Однако, как мы уже знаем, эффекты выполняются не один раз, а при каждом рендере. Вот почему React также сбрасывает эффект из предыдущего рендера, перед тем, как запустить следующий
- React будет выполнять каждый используемый эффект в компоненте, согласно порядку их объявления

:::
