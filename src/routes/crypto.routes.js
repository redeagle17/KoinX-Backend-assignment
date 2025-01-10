import { Router } from "express";
import { getCryptoStats, getCryptoPriceStandardDeviation, cronFetchAndSaveCryptoData } from "../controllers/crypto.controllers.js";

const router = Router();

router.route("/stats").get(getCryptoStats);
router.route("/deviation").get(getCryptoPriceStandardDeviation);
router.route("/fetch_save_data").get(cronFetchAndSaveCryptoData);

export default router;
