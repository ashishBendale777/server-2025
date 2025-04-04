import { Product } from "../models/ProdyctSchema.js";


//add product
let createProduct = async (req, res) => {

    let reqData = req.body
    console.log("UserData", reqData);
    try {
        let result = await Product.create(reqData)
        res.status(200).json({
            data: result,
            message: "Product Added Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

//fetch all products
let fetchAlProducts = async (req, res) => {

    try {
        let result = await Product.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}

export { createProduct, fetchAlProducts }