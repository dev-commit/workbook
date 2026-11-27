# Абстрактные классы

## Информация

- Описывают методы, которые будут реализованы у классов-наследников
- Аналогия `interface`

## Пример

```ts
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "This is info";
  }
}
```
