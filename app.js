/**
 * @fileoverview Initializes express app and API endpoints.
 * @exports app
 */
import express from 'express';
import expressStatus from 'express-status-monitor';
import { LogsRoute } from './api/index.js';

/**
 * @description Creates an express application
 * @constant {object}
 */
export const App = express();

const statusMonitor = expressStatus();
App.use(statusMonitor);
App.use(express.json());

/**
 * @description Test server connection
 */
App.get('/', statusMonitor.pageRoute);
App.use('/logs', LogsRoute);

/**
 * Instantiate the Ethereum Event-listener
 */
import('./web3/contract.js');