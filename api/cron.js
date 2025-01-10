import { cronFetchAndSaveCryptoData } from "../src/controllers/crypto.controllers.js";

export default async function handler(req, res) {
  console.log("Triggered by Vercel scheduled function");
  try {
    await cronFetchAndSaveCryptoData();
    res.status(200).send("Crypto data fetched and saved successfully");
  } catch (error) {
    console.error(`Error during cron job: ${error.message}`);
    res.status(500).send(`Error: ${error.message}`);
  }
}