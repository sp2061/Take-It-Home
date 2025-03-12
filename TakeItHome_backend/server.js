import express from "express";
import dotenv from "dotenv";

import { connectDB } from './config/db.js';
import itemRoute from "./routes/item.route.js";

dotenv.config();

const app = express();

app.use(express.json());//allows us to accept JSON data in the request.body

app.use("/api/items",  itemRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:"+ PORT);
});

