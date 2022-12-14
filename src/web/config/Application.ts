import { ExpressConfig } from "./Express";

export class Application {
  server: any;
  express: ExpressConfig;

  constructor() {
    this.express = new ExpressConfig();
    const port = process.env.PORT || 4000;

    this.server = this.express.app.listen(port, () => {
      console.clear();
      console.log(`
      -----------------------------------------------------
       Server Started! Express: :${port}
       Health :${port}/ping
      -----------------------------------------------------
      `);
    });
  }
}
