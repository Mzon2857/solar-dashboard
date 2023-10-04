import express from "express";
import { updateUser, deleteUser, getAllUser, getUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/*
router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("You are authenticated")
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("You are authenticated")
})

router.get("/checkAdmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("You are authenticated")
})
*/

//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET
router.get("/:id", verifyUser, getUser)

//GET ALL
router.get("/", verifyAdmin, getAllUser)

export default router