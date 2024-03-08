import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";
import { Utils } from "../utils/utils";

/**
 * @description
 * @export
 * @class ConfigDatabase
 */

export class ConfigDatabase {
  
  /**
   * @description: DB connection instance
   * @static dbInstance
   * @memberof ConfigDatabase
   */
  public static dbInstance = () => {
    return new Sequelize({
      dialect: "postgres",
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
    });
  };
  /**
   * @description: DB connection setup to Postgres setup
   * @static
   * @memberof ConfigDatabase
   */

  public static dbConnect = () => {
    const sequelize = ConfigDatabase.dbInstance();
    sequelize.addModels([User]);
    sequelize
      .authenticate()
      .then((result) => {
        console.log("DB Connected");
      })
      .catch((error) => {
        console.log(`DB could not connect : ${error}`);
      });

  };
}
