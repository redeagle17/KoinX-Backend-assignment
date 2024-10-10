import axios from "axios";
import { Crypto } from "../models/crypto.models.js";
import { COIN_GECKO_API_URL, VS_CURRENCY, IDS } from "../constants.js";
import errorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import responseHandler from "../utils/responseHandler.js";

// CRON JOB CONTROLLER
const cronFetchAndSaveCryptoData = async () => {
  const url = `${COIN_GECKO_API_URL}`;
  const params = {
    vs_currency: `${VS_CURRENCY}`,
    ids: `${IDS}`,
  };
  const headers = {
    accept: "application/json",
    "x-cg-demo-api-key": process.env.COIN_GECKO_API_KEY,
  };

  try {
    const response = await axios.get(url, { headers, params });
    const cryptos = response.data;

    for (const crypto of cryptos) {
      const newCrypto = new Crypto({
        crypto_id: String(crypto.id),
        name: String(crypto.name),
        symbol: String(crypto.symbol),
        price: String(crypto.current_price),
        marketCap: String(crypto.market_cap),
        change24h: String(crypto.price_change_percentage_24h),
      });

      await newCrypto.save();
      console.log(`Data for ${crypto.name} saved successfully`);
    }
  } catch (error) {
    throw new errorHandler(
      500,
      `Error fetching/saving crypto data: ${error.message}`
    );
  }
};

const getCryptoStats = asyncHandler(async (req, res, next) => {
  const { coin } = req.body;

  if (!coin) {
    return next(new errorHandler(400, "Coin parameter is missing"));
  }
  const lowerCaseCoin = coin.toLowerCase();

  const result = await Crypto.aggregate([
    {
      $match: { crypto_id: lowerCaseCoin },
    },
    {
      $sort: { created_at: -1 },
    },
    {
      $limit: 1,
    },
    {
      $project: {
        _id: 0,
        price: 1,
        marketCap: 1,
        change24h: 1,
      },
    },
  ]);

  if (!result || result.length === 0) {
    return next(new errorHandler(404, `No data found for the coin: ${coin}`));
  }
  res
    .status(200)
    .json(new responseHandler(200, "Latest data fetched", result[0]));
});

export { cronFetchAndSaveCryptoData, getCryptoStats };
