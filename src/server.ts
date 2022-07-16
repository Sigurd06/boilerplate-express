import { Application, json, urlencoded } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './container';
import './controllers';

import { makeLoggerMiddleware } from 'inversify-logger-middleware';

export class Server {
    app: Application;
    server: InversifyExpressServer;
    port: number;

    constructor(port: number) {
        this.server = new InversifyExpressServer(container);
        this.setLogger();
        this.setConfig();
        this.app = this.server.build();
        this.port = port;
    }

    private setConfig() {
        this.server.setConfig((app: Application) => {
            app.use(urlencoded({ extended: true })).use(json());
        });
    }

    private setLogger() {
        if (process.env.NODE_ENV === 'development') {
            let logger = makeLoggerMiddleware();
            container.applyMiddleware(logger);
        }
    }

    listen(cb: () => void): void {
        this.app.listen(this.port, cb);
    }

    public static build(port: number): Server {
        return new Server(port);
    }
}
