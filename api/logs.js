/**
 * @fileoverview Logs Route for ERC1155 transfer event.
 * @exports router
 */
import express from 'express';
import { getLogs } from '../service/logsService.js';

export const LogsRoute = express.Router();

const handleLogsFetch = async (req, res) => {
  const params = {};
  const filterOptions = ['sender', 'receiver', 'token', 'limit', 'block'];
  filterOptions.forEach(option => {
    req.query[option] && (params[option] = req.query[option]);
  });
  
  const logs = await getLogs(params);
  res.json(logs);
};

/**
 * @description Fetches logs from the DB
 * @param {string} route An API route to login
 * @returns {Response} JSON
 */
LogsRoute.get('/', handleLogsFetch);