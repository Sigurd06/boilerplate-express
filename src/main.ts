import dotenv from 'dotenv';
import 'reflect-metadata';
import { Server } from './server';
dotenv.config();

function bootstrap() {
    const port = parseInt(process.env.PORT);
    const server = Server.build(port);
    server.listen(() => {
        console.log('server listening on port:', port);
    });
}
bootstrap();
