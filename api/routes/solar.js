import express from "express";
import { createError } from "../utils/error.js";
import { createHotel, updateHotel, deleteHotel, getData, getAllHotel, uploadData } from "../controllers/solar.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//upload 5g data
router.post("/uploadData", uploadData)

//get 5g data
router.get('/:id', getData)

//CREATE
router.post("/", verifyAdmin, createHotel)

//UPDATE
router.put("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
//router.get("/:id", getHotel)

//GET ALL
router.get("/", getAllHotel)

export default router