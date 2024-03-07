import { Sequelize } from "sequelize";

/**
 * @description
 * @export
 * @class ConfigDatabase
 */
export class ConfigDatabase {
  
  /**
   * @description: DB connection setup to Postgres setup
   * @static
   * @memberof ConfigDatabase
   */
  public static dbConnect = () => {
    const databaseInstance = new Sequelize({
      dialect: 'postgres',
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
    });

    const sequelize = databaseInstance;
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
