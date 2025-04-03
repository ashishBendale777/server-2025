import express from "express"
import { createUser, deleteUser, fetchAllUsers, updateUser } from "../controllers/UserController.js"

let userRouter = express.Router()

userRouter.get("/fetchusers", fetchAllUsers)
userRouter.post("/createuser", createUser)
userRouter.delete("/deleteuser", deleteUser)
userRouter.put("/updateuser", updateUser)

export { userRouter }


