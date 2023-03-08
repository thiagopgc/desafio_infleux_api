import express from "express";
import CampaignsController from "./controllers/campaignsController.js";
import Conn from "./database/mongo_db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
Conn();
CampaignsController(app);

export default app;
