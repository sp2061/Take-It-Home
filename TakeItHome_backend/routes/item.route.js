import express from "express";
import { getItems, createItems, updateItem, deleteItem } from "../controllers/item.controller.js";

const router = express.Router();

//GET ALL ITEMS
router.get("/", getItems);

//POST ITEM
router.post("/", createItems);

//Update or put item
router.put("/:id", updateItem);

//DELETE ITEM
router.delete("/:id", deleteItem);  

export default router;