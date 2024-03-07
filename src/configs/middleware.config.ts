import { Application } from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

/**
 *
 * @export
 * @class MiddlewareBase
 */
export class MiddlewareBase {
  /**
   * Register all middleware
   * @param {Express} app
   * @memberof MiddlewareBase
   * @returns void
   */
  public static configure(app: Application): void {
    app.use(cors());
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ limit: '50mb', extended: true }));
    app.use(cookieParser());
    app.use(helmet());
  }
}
