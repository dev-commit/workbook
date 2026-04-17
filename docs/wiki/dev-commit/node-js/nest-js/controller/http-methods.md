# HTTP-методы

- **DTO** - Data Transfer Object

### GET

```js
import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    get() {
      return 'get';
    }
}
```

### POST

```js
export class CreateDto {
    readonly title: string;
    readonly price: number;
}
```

```js
import { Controller, Post, Body } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
```

```js
@Controller('products')
export class ProductsController {
    @Post()
    // @Body() - получить некоторый параметр из тела запроса
    create(@Body() createDto: CreateDto): string {
        return createProductDto.title;
    }
}
```

```js
import { HttpCode, Header } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Post()
    @HttpCode(HttpStatus.CREATED) // Кастомное указание HTTP-кода
    @Header('Cache-Control', 'none') // Добавлние заголовков
    create(@Body() createDto: CreateDto): string {
        return createDto.title;
    }
}
```

### PUT

```js
export class UpdateDto {
    readonly title: string;
    readonly price: number;
}
```

```js
import { Controller, Put, Body, Param } from '@nestjs/common';
import { UpdateDto } from './dto/update.dto';

@Controller('products')
export class ProductsController {
    @Put(':id')
    update(
      @Body() updateDto: UpdateDto,
      @Param('id') id: string
    ): string {
      return id;
    }
}
```

### DELETE

```js
import { Controller, Delete, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Delete(':id')
    remove(@Param('id') id: string): string {
      return id;
    }
}
```
