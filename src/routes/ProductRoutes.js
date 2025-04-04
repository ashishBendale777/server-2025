import express from "express"
import { createProduct, fetchAlProducts } from "../controllers/ProductController.js"

let productRouter = express.Router()

productRouter.get("/fetchproducts", fetchAlProducts)
productRouter.post("/createproduct", createProduct)

export { productRouter }


