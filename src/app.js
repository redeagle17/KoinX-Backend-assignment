import express from "express";
import errorMiddleware from "./middlewares/error.middlewares.js";

const app = express();
app.use(express.json({ limit: "50mb" }));

import cryptoRouter from "./routes/crypto.routes.js"

app.use("/api/v1/crypto", cryptoRouter);

app.use(errorMiddleware);

export default app;
