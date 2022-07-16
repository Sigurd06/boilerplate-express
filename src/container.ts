import { Container } from 'inversify';
import { HelloService } from './services';
import { TYPES } from './types';

const container = new Container();

container.bind<HelloService>(TYPES.HelloService).to(HelloService);

export default container;
