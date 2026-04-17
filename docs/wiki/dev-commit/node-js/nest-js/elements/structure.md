# Структура

- **1. Controller** - работает с запросами
- **2. Service** - реализует логику приложения
- **3. Module** - создание изолированных сущностей, не расширяя главный модуль

› main.ts
› app.module.ts
📂 starter
    › starter.controller.ts
    › starter.module.ts
    › starter.service.ts

## Корневые файлы

### 1. main.ts

```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
```

### 2. app.module.ts

```js
import { Module } from '@nestjs/common';
import { StarterModule } from './starter/starter.module';

// Декоратор для класса AppModule
@Module({
    // Импорт других модулей
    imports: [StarterModule],
    // Массив контроллеров
    controllers: [],
    // Массив сервисов
    providers: [],
})
export class AppModule {}
```

## Файлы компонента

### starter.module.ts

```js
import { Module } from '@nestjs/common';
import { StarterService } from './starter.service';
import { StarterController } from './starter.controller';

@Module({
    imports: [],
    controllers: [StarterController],
    providers: [StarterService],
})
export classStarterModule{}
```

### starter.controller.ts

```js
import { Controller, Get } from '@nestjs/common';
import { StarterService } from './starter.service';

@Controller('starter')
export classStarterController{
    // Реализация Dependency Injection для использования сервиса в классе
    constructor(private readonly starterService: StarterService) {}

    @Get()
    get() {
        return this.starterService.getData()
    }
}
```

### starter.service.ts

```js
import { Injectable } from '@nestjs/common';

@Injectable()
export classStarterService{
    getData() {
        return [1, 2, 3, 4];
    }
}
```
