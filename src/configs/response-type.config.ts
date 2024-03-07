import { AppConstant } from '../utils/AppConstant';

/**
 *  Response Type Interface
 * @export
 * @interface IResponseType
 */
export interface IResponseType {
  message?: string | Error;
  data?: JSON | JSON[] | object | string | number | boolean;
  success?: boolean;
}

/**
 * Error Enum
 * @export
 * @enum {number}
 */
export enum ErrorType {
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  BAD_REQUEST= 400,
  INTERNAL_SERVER_ERROR = 500
}

/**
 * Response Type - Common Success and Error response
 * @export
 * @class ResponseType
 */
export class ResponseType {
  /**
   * Format error response
   * @static
   * @param {number} errorTypeEnum
   * @param {(string | Error)} [message]
   * @returns
   * @memberof ResponseType
   */
  public static error(errorTypeEnum: number, message?: string | Error) {
    const errorTypeFunMap: Map<number, IResponseType> = new Map();
    errorTypeFunMap.set(ErrorType.NOT_FOUND, ResponseType.getNotFoundResponse());
    errorTypeFunMap.set(ErrorType.FORBIDDEN, ResponseType.getForbiddenResponse());
    errorTypeFunMap.set(ErrorType.BAD_REQUEST, ResponseType.getBadRequestResponse());
    errorTypeFunMap.set(ErrorType.INTERNAL_SERVER_ERROR, ResponseType.getInternalServerErrorResponse());

    let responseObj: IResponseType = {
        message: '',
        data: '',
        success: false
    }; 
    if (errorTypeFunMap.has(errorTypeEnum)) {
      responseObj = errorTypeFunMap.get(errorTypeEnum);
    } else {
      responseObj = ResponseType.getInternalServerErrorResponse();
    }

    responseObj.data = null;
    if (message) {
      responseObj.message = message;
    }
    responseObj.success = false;
    return responseObj;
  }

  /**
   * Format Success Response
   * @static
   * @param {IResponseType} [options]
   * @returns {IResponseType}
   * @memberof ResponseType
   */
  public static success(options?: IResponseType): IResponseType {
    const responseObj: IResponseType = ResponseType.getOkResponse();
    responseObj.message = options.message || responseObj.message;
    responseObj.data = options.data || [];
    responseObj.success = true;
    return responseObj;
  }

  private static getOkResponse(): IResponseType {
    return {
      message: AppConstant.ERROR_MESSAGES.OK,
    };
  }

  private static getNotFoundResponse(): IResponseType {
    return {
      message: AppConstant.ERROR_MESSAGES.NO_RECORD_FOUND
    };
  }

  private static getForbiddenResponse(): IResponseType {
    return {
      message: AppConstant.ERROR_MESSAGES.FORBIDDEN
    };
  }

  private static getBadRequestResponse(): IResponseType {
    return {
      message: AppConstant.ERROR_MESSAGES.BAD_REQUEST
    };
  }

  private static getInternalServerErrorResponse(): IResponseType {
    return {
      message: AppConstant.ERROR_MESSAGES.SERVER_ERROR
    };
  }
}
