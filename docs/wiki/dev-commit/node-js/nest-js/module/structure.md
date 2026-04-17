# Структура

› app.module.ts
📂 starter
    › starter.module.ts

### starter.module.ts

```js
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [],
})
export classStarterModule{}
```

### app.module.ts

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
