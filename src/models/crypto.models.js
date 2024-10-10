import mongoose, { Schema } from "mongoose";

const cryptoSchema = new Schema({
  crypto_id: String,
  name: String,
  symbol: String,
  price: String,
  marketCap: String,
  change24h: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export const Crypto = mongoose.model('Crypto', cryptoSchema);

