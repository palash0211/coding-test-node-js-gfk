import { v4 as uuidv4 } from 'uuid';
import { IUserRequestBody } from "../interfaces/user.interface";
import { IResponseType, ResponseType } from "../configs/response-type.config";
import { User } from '../models/user.model';
import { CryptoUtil } from '../utils/encrypt.utils';

export class UserService {
    
  public fetchUser = async (params: {id: string}): Promise<IResponseType> => {
      try {
        const result = params.id ? await User.findOne({
          where: {
            user_id: params.id
          }
        }) : await User.findAll();
        return ResponseType.success({ data: result });
      } catch (error) {
        throw new Error(error.message);
      }
    }

    public createUser = async (body: IUserRequestBody): Promise<IResponseType> => {
      try {
        console.log('before');
        console.log(CryptoUtil.encrypt(body.password), 'reached-inside');
        return ResponseType.success({ data: await User.create({
          user_id: uuidv4(),
          first_name: body.first_name,
          username: body.username,
          password: CryptoUtil.encrypt(body.password),
          age: body.age
        })});
      } catch (error) {
        throw new Error(error.message);
      }
    }

    public deleteUser = async (params: {id: string}): Promise<IResponseType> => {
      try {
        const result = await User.destroy({
          where: {
            user_id: params.id,
          },
        });
  
        if (result === 0) {
          return ResponseType.error(500, 'User not found');
        }
  
        return ResponseType.success({ message: 'User deleted successfully' });
      } catch (error) {
        throw new Error(error.message);
      }
    };

    public updateUser = async (body: IUserRequestBody): Promise<IResponseType> => {
      try {
        const [rowsAffected] = await User.update(
          {
            first_name: body.first_name,
            username: body.username,
            password: body.password ? CryptoUtil.encrypt(body.password) : undefined,
            age: body.age,
          },
          {
            where: {
              user_id: body.user_id,
            },
          }
        );
  
        if (rowsAffected === 0) {
          return ResponseType.error(500, 'User not found');
        }
 
        return ResponseType.success({ data: rowsAffected });
      } catch (error) {
        throw new Error(error.message);
      }
    };

}