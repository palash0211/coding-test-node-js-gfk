import http from 'http';
import path from 'path';
import { App } from './App';
import { Application } from 'express';
import { AppConstant } from './utils/AppConstant';
import * as dotenv from 'dotenv';

const envPath = path.resolve(__dirname, '..', '.env');
dotenv.config();
console.log(process.env.NODE_ENV)
/**
 * @createServer
 */
const port: string | number | false = (process.env.PORT || AppConstant.SERVER_PORT);
const apps: Application = new App().app;
apps.set(AppConstant.SERVER_PORT, port);
export const server = http.createServer(apps);

/**
 * 
 * @param error 
 * @description Error Handling
 */
const onError = (error: NodeJS.ErrnoException): void => {
    console.log(error);
    process.exit(1);
}

/**
 * 
 * @param Listener 
 * @description App Listening
 */
const onListening = (): void => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
    console.log(`listening on : ${bind}`);
}

/**
 * 
 * @param Initialize 
 * @description App Initialize
 */
server.listen(apps.get(AppConstant.SERVER_PORT));
server.on(AppConstant.ERROR_MESSAGES.SERVER_ERROR, onError);
server.on('listening', onListening);


