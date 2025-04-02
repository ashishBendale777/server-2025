import express from "express"
import { createUser, fetchAllUsers } from "../controllers/UserController.js"

let userRouter = express.Router()

userRouter.get("/fetchusers", fetchAllUsers)
userRouter.post("/createuser", createUser)

export { userRouter }


