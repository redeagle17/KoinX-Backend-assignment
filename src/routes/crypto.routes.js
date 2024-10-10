import { Router } from "express";
import { getCryptoStats, getCryptoPriceStandardDeviation } from "../controllers/crypto.controllers.js";

const router = Router();

router.route("/stats").get(getCryptoStats);
router.route("/deviation").get(getCryptoPriceStandardDeviation);

export default router;
