import express from "express"
import { createProduct, deleteProduct, fetchAlProducts, updateProduct } from "../controllers/ProductController.js"

let productRouter = express.Router()

productRouter.get("/fetchproducts", fetchAlProducts)
productRouter.post("/createproduct", createProduct)
productRouter.delete("/deleteproduct", deleteProduct)
productRouter.put("/updateproduct", updateProduct)

export { productRouter }


