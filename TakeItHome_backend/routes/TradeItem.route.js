import express from "express";
import { getTradeItems, createTradeItems, updateTradeItem, deleteTradeItem } from "../controllers/tradeItem.controller.js";

const router = express.Router();

//GET ALL ITEMS
router.get("/", getTradeItems);

//POST ITEM
router.post("/", createTradeItems);

//Update or put item
router.put("/:id", updateTradeItem);

//DELETE ITEM
router.delete("/:id", deleteTradeItem);  

export default router;