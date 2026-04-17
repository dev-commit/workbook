# Структура

```js
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Декоратор для класса AppController
@Controller()
export class AppController {
  // Реализация Dependency Injection для использования сервиса appService в классе
  constructor(private readonly appService: AppService) {}

  // Декоратор для getHello()
  // Показывает, какой тип запроса ожидается
  @Get()
  getHello(): string {
    return 'Hey';
  }
}
```

```js
import { Controller } from '@nestjs/common';

// Декоратор с префиксом "products"
@Controller('products')
export class ProductsController {
    //
}
```
