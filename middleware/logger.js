/**
 * @fileoverview Logger Utility monitors and logs all output to info.log
 * for debugging and app control
 */
import winston from 'winston';

const { createLogger, format, transports } = winston;

/**
 * @description
 * Export the logger object to log outputs to `${info.log}
 * @exports Logger.createLogger
 */
export const logger = createLogger({
  format: format.combine(
    format.label({
      label: '🏷️'
    }),
    format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss'
    }),
    format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`)
  ),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.Console({ level: 'info' })
  ],
  exceptionHandlers: [
    new transports.Console({ level: 'error' })
  ]
});