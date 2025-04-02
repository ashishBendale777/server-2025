
import { User } from "../models/UserSchema.js";


//add user
let createUser = async (req, res) => {

    let reqData = req.body
    console.log("UserData", reqData);
    try {
        let result = await User.create(reqData)
        res.status(200).json({
            data: result,
            message: "User Added Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

//fetch all user
let fetchAllUsers = async (req, res) => {

    try {
        let result = await User.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

export { createUser, fetchAllUsers }