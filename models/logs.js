/**
 * @fileoverview Creates a schema for the database.
 * @exports mongoose.model
 */
import { mongoose } from '../connection/database.js';

const Schema = mongoose.Schema;

const Log = new Schema({
  sender: String,
  receiver: String,
  contract: String,
  tokenName: String,
  type: String,
  senderBalance: Number,
  receiverBalance: Number,
  amount: Number,
  tokenID: Number,
  block: { type: Number, ref: 'Block' },
  date_created: { type: Date, default: Date.now },
});

export const LogModel = mongoose.model('Log', Log);