// model-loader.ts
import { Sequelize } from 'sequelize-typescript';
import * as path from 'path';

export class Utils {
    public static loadModels = (sequelize: Sequelize): void => {
        console.log('inside load utils')
        const modelsDir = path.join(__dirname, '..', 'models'); // Adjust the path based on your project structure
      
        console.log(modelsDir);
        // Load all models from the 'models' directory
        const modelFiles = require('glob').sync(`${modelsDir}/*.js`);
        console.log(modelFiles, 'files');
        modelFiles.forEach((file: string) => {
          const model = require(file).default; // Adjust this line based on your model export structure
          sequelize.addModels([model]);
        });
      } 
}
