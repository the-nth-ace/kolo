import debug from "debug";
import { ExpressConfig } from './Express';
import * as config from 'config';

export class Application {

    server: any;
    express: ExpressConfig;

    constructor() {
        this.express = new ExpressConfig();

        // const port = config.get('express.port');
        // const debugPort = config.get('express.debug');
        const port = 3000
        const debugPort = 5000



        this.server = this.express.app.listen(port, () => {
            console.clear()
            // Debugger: http:/${this.server.address()}:${port}/?ws=${this.server.address()}:${port}&port=${debugPort}
            console.log(`
      -----------------------------------------------------
       Server Started! Express: http://localhost:${port}
       Health : http://localhost:${port}/ping
      -----------------------------------------------------
      `)
        });
    }

}