import { Order } from "../models/OrderSchema.js";


//add product
let createOrder = async (req, res) => {

    let reqData = req.body
    console.log("UserData", reqData);
    try {
        let result = await Order.create(reqData)
        res.status(200).json({
            data: result,
            message: "Order Placed Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

//fetch all products
let fetchAlOrders = async (req, res) => {

    try {
        let result = await Order.find()
        .populate("userId")
        .populate("orderItems.prodId")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}

export { createOrder, fetchAlOrders }