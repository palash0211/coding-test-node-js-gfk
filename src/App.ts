import express from "express";
import { ConfigDatabase } from "./configs/db.config";
import { MiddlewareBase } from "./configs/middleware.config";
import { BaseRouter } from "./routes/base.routes";

export class App {
  public app: express.Application;
  private routesInstance = new BaseRouter();

  constructor() {
    this.app = express();
    this.initMiddleware();
    this.initRoutes();
    this.initDatabaseConfig();
  }

  /**
   * @description initialize mongoDb Server Connection
   * @author
   * @memberof Server
   */
  private initDatabaseConfig(): void {
    ConfigDatabase.dbConnect();
  }

  /**
   *
   *
   * @private
   * @memberof Server
   */
  private initRoutes(): void {
    this.app.use(this.routesInstance.getRouter());
    // BaseRoutes.configure(this.app);
  }

  /**
   *
   *
   * @private
   * @memberof Server
   */
  private initMiddleware(): void {
    MiddlewareBase.configure(this.app);
  }
}
