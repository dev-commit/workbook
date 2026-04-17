# Динамические параметры в URL

- :id - динамический параметр

```js
import { Controller, Get, Param } from '@nestjs/common';
```

```js
@Controller('products')
export class ProductsController {
    @Get(':id')
    // Получение всего объекта с параметрами
    getOne(@Param() params) {
        return params;
    }
}
```

```js
@Controller('products')
export class ProductsController {
    @Get(':id')
    // Получение только ID
    getOne(@Param('id') id: string): string {
        return id;
    }
}
```
