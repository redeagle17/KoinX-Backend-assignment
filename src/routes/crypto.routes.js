import { Router } from "express";
import { getCryptoStats, getCryptoPriceStandardDeviation } from "../controllers/crypto.controllers.js";

const router = Router();

router.route("/stats").post(getCryptoStats);
router.route("/deviation").post(getCryptoPriceStandardDeviation);

export default router;
