import { injectable } from 'inversify';

@injectable()
export class HelloService {
    constructor() {} // inject a repository service

    sendHelloMessage() {
        return 'hello world!';
    }
}
