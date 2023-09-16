import express from "express";
import cors from "cors";
import { port } from "./config/index.js";
import routes from "./routes/index.js";
const app = express();
app.use(cors());

app.use("/api", routes);

app.listen(port);
