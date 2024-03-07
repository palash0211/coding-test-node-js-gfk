/**
 *
 *
 * @export
 * @class AppConstant
 * @description Maintaining the application constants 
 * at one place
 */
export class AppConstant {

  public static SERVER_PORT = 3000;
  public static WELCOME_MESSAGE = "Welcome to demo-test"

  
  public static ERROR_MESSAGES = {
	SERVER_ERROR: "Internal Server Error",
  OK: "OK",
  NO_RECORD_FOUND: "No record found.",
  BAD_REQUEST: "Invalid request params.",
  FORBIDDEN: "Invalid session.",
  }

}
