import { ResponseType } from "../configs/response-type.config";
import { User } from '../models/user.model';

export class UserService {
    public fetchUser = async () => {
      try {
        const result = await User.findAll();
        return ResponseType.success({ data: result });
      } catch (error) {
        throw new Error(error.message);
      }
    }
}