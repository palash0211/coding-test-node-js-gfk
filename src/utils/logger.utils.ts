import { createLogger, transports, format, Logger } from 'winston';
import { Request } from 'express';
import DailyRotateFile = require('winston-daily-rotate-file');
/*
 * format the info-data
 */
const myFormat = format.printf((info) => {
  const infoData = JSON.stringify(info);
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message} \nLogs:\n ${infoData}`;
});

const transport = new DailyRotateFile({
  filename: 'demo-%DATE%.log',
  dirname: './logs',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxFiles: '30d'
});

export class LoggerService {
  /*
   * creating the logger
   */
  public static logger: Logger = createLogger({
    level: 'debug',
    format: format.combine(
      format.label({ label: 'demo' }),
      format.timestamp(),
      myFormat
    ),
    transports: [
      transport,
      new transports.Console()
    ],
    exitOnError: false,
  });

  public static writeErrorLog(logMessage: string, req?: Request) {
    if (req) {
      const fullUrl = `${req.protocol}://'${req.hostname}${req.originalUrl}`;
      this.logger.error(logMessage, {url: fullUrl,
         method_type: req.method, request_body: req.body, request_params: req.params});
    } else {
      this.logger.error(logMessage);
    }
  }

  public static writeInfoLog(logMessage: string) {
    this.logger.info(logMessage);
  }
}
