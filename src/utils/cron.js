import cron from "node-cron";
import { cronFetchAndSaveCryptoData } from "../controllers/crypto.controllers.js";

cron.schedule("0 */2 * * *", async () => {
  console.log("Fetching and saving crypto data every 2 hours");
  try {
    await cronFetchAndSaveCryptoData();
  } catch (error) {
    console.error(`Error during cron job: ${error.message}`);
  }
});
