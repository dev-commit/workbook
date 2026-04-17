# Request и Response

```js
import { Controller, Get, Req } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
    @Get()
    get(@Req() req: Request, @Res() res: Response): string {
        res.status(201).end('Hey')
        return 'get'
    }
}
```
