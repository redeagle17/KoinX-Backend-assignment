import { Router } from "express";
import { getCryptoStats } from "../controllers/crypto.controllers.js";

const router = Router();

router.route("/stats").post(getCryptoStats);

export default router;
