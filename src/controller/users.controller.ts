import { Request, Response, NextFunction } from 'express';
import { LoggerService } from '../utils/logger.utils';
import { RouteConstant } from '../routes/route-constants';
import { ResponseType, ErrorType } from '../configs/response-type.config';
import { UserService } from '../services/users.service';

export class UserController {
    private userServiceInstance: UserService;   
    constructor () {
        this.userServiceInstance = new UserService();
    }
    public fetchUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.userServiceInstance.fetchUser();
            if (result.success) {
            res.status(RouteConstant.STATUS_CODES.OK)
                .send(result);
            } else {
                res.status(RouteConstant.STATUS_CODES.INTERNAL_SERVER_ERROR)
                .send(result);
            }
        } catch (error) {
            LoggerService.writeErrorLog(error.message, req);
            next(ResponseType.error(ErrorType.INTERNAL_SERVER_ERROR, error.message));
        }
    }
}