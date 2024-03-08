import express, { Application, Request, Response, NextFunction, Router } from 'express';
import { RouteConstant } from './route-constants'; // Ensure you have a file with your route constants
import { UserController } from '../controller/users.controller';

export class BaseRouter {
  private router: Router;
  private userController: UserController;
  constructor() {
    this.userController = new UserController();
    this.router = express.Router();
    this.configureRoutes();
  }

  private configureRoutes(): void {
    // Middleware for handling the /users route
    this.router.get(RouteConstant.USER_MODULE.FETCH_USER, this.userController.fetchUsers.bind(this.userController));

    // Default route
    this.router.use(RouteConstant.WILD_ROUTE, (req: Request, res: Response) => {
      res.status(RouteConstant.STATUS_CODES.OK).send('Welcome to the default route');
    });

    // Error handling middleware
    this.router.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack); // Log the error stack for debugging
        res
          .status(RouteConstant.STATUS_CODES.INTERNAL_SERVER_ERROR)
          .send('Internal Server Error');
      }
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}