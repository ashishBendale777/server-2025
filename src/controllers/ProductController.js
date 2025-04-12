import { Product } from "../models/ProdyctSchema.js";

//
//add product
let createProduct = async (req, res) => {

    let reqData = req.body
    console.log("UserData", reqData);


    try {
        let filPath = req.file.path
        console.log("FILE", filPath);
        let result = await Product.create({ ...req.body, prodimage: filPath})
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


let deleteProduct = async (req, res) => {
    try {
        let { prodId } = req.body
        let result = await Product.findByIdAndDelete({ _id: prodId })
        res.status(200).json({
            message: "Product Deleted"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}


let updateProduct = async (req, res) => {
    try {
        let { prodId, price } = req.body
        let result = await Product.findByIdAndUpdate({ _id: prodId }, {
            price: price
        }, { new: true })
        res.status(200).json({
            data: result,
            message: "Product Updated"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}


export { createProduct, fetchAlProducts, deleteProduct, updateProduct }