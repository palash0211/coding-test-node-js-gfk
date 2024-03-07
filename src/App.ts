import express from "express";
import { ConfigDatabase } from "./configs/db.config";
import { MiddlewareBase } from "./configs/middleware.config";

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initMiddleware();
    this.initDatabaseConfig();
  }

  /**
   * @description initialize mongoDb Server Connection
   * @author EPS - Focus Team
   * @private
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
    private initMiddleware(): void {
      MiddlewareBase.configure(this.app);
    }
}
