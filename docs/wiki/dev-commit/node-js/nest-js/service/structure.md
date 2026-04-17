# Структура

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
