import express from "express"
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/userController.js";
const router=express.Router();

router.get("/",getUsers)
router.post("/addUser",addUser)
router.put("/updateUser/:id",updateUser)
router.delete("/deleteUser/:id",deleteUser)

export default router;