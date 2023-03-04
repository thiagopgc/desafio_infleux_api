import express from "express";
import CampaignsController from "./controllers/campaignsController.js";
import Conn from "./database/mongo_db.js";

const app = express();
app.use(express.json());
Conn();
CampaignsController(app);

export default app;
