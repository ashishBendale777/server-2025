import express from "express"
import { createProduct, deleteProduct, fetchAlProducts, updateProduct } from "../controllers/ProductController.js"
import { upload } from "../middleware/FileuploadMiddleware.js"

let productRouter = express.Router()

productRouter.get("/fetchproducts", fetchAlProducts)
productRouter.post("/createproduct",upload.single("prodimage"), createProduct)
productRouter.delete("/deleteproduct", deleteProduct)
productRouter.put("/updateproduct", updateProduct)

export { productRouter }


