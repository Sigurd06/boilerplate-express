import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { HelloService } from '../services';
import { TYPES } from '../types';

@controller('/hello')
export class HelloController {
    constructor(
        @inject(TYPES.HelloService)
        private helloService: HelloService
    ) {}

    @httpGet('/')
    hello(req: Request, res: Response) {
        return this.helloService.sendHelloMessage();
    }
}
