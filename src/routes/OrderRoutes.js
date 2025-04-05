import express from "express"
import { createOrder, fetchAlOrders } from "../controllers/OrderController.js"

let orderRouter = express.Router()

orderRouter.get("/fetchorders", fetchAlOrders)
orderRouter.post("/createorder", createOrder)

export { orderRouter }


