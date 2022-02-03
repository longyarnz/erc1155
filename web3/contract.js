import Contract from 'web3-eth-contract';
import * as dotenv from 'dotenv';
import { ABI } from './abi.js';
import { handleTransferSingle } from '../service/logsService.js';
import { logger } from '../middleware/index.js';

dotenv.config();
const { RPC_ENDPOINT, CONTRACT_ADDRESS, DEFAULT_SENDER } = process.env;

Contract.setProvider(RPC_ENDPOINT);
const UnchainNFT = new Contract(ABI, CONTRACT_ADDRESS);
UnchainNFT.options.from = DEFAULT_SENDER;

const getBalance = (address, token) => {
  return new Promise((resolve, reject) => {
    UnchainNFT.methods.balanceOf(address, token)
      .call((err, balance) => {
        if (err) reject(err);
        else resolve(balance);
      });
  });
};

const getTokenName = (token) => {
  return new Promise((resolve) => {
    UnchainNFT.methods.tokenNames(token)
      .call((err, tokenName) => {
        if (err) logger.error(err);
        else resolve(tokenName);
      });
  });
};

/**
 * @description Subscribe to events on the Ethereum Ropsten Testnet
 * It keeps track of the latest block
 */
UnchainNFT.events.TransferSingle({
  fromBlock: 'latest'
}, function (error, event) { console.log(event); })
  .on('connected', () => console.log(`🎉 Listening to TransferSingle events on: ${CONTRACT_ADDRESS}`))
  .on('error', logger.error)
  .on('data', (log) => handleTransferSingle(log, getBalance, getTokenName));