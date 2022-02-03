import { LogModel } from '../models/logs.js';
import { logger } from '../middleware/logger.js';

export const handleTransferSingle = async (log, getBalance, getTokenName) => {
  const { event, blockNumber, address, returnValues } = log;
  const {
    from: sender,
    to: receiver,
    id: tokenID,
    value: amount
  } = returnValues;
  
  const [senderBalance, receiverBalance] = await Promise.all([
    getBalance(sender, tokenID),
    getBalance(receiver, tokenID),
  ]);
  
  const payload = {
    sender,
    receiver,
    senderBalance,
    receiverBalance,
    tokenID,
    tokenName: '',
    amount,
    type: event,
    block: blockNumber,
    contract: address
  };

  if (address === '0x5750E0C0Abac25F93dA3e45FE4BdCd08d4C89F56') {
    payload.tokenName = await getTokenName(tokenID);
  }
  
  createLog(payload).then(({ block }) => logger.info(`Received block: ${block}`));
  console.log(payload);
};

export const createLog = async (log) => {
  try {
    const Log = await LogModel.create(log);
    return Log;
  }
  catch (err) {
    logger.error(err.message);
    throw err;
  }
};

export const deleteLogById = async (id) => {
  try {
    const remove = await LogModel.deleteOne({ _id: id });
    return remove.deletedCount === 1;
  }
  catch (err) {
    logger.error(err.message);
    throw err;
  }
};

export const getLogs = async (options = {}) => {
  try {
    const { limit = 100, ...rest } = options;
    const Logs = await LogModel.find(rest, null, { limit: parseInt(limit, 10), sort: { date_created: 'desc' } });
    return Logs;
  }
  catch (err) {
    logger.error(err.message);
    throw err;
  }
};