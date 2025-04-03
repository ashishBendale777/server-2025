
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


//delete user data
let deleteUser = async (req, res) => {
    try {
        let { userId } = req.body
        let result = await User.findByIdAndDelete({ _id: userId })
        res.status(200).json({
            message: "User Deleted"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}


//update user 
let updateUser = async (req, res) => {
    try {
        let { userId, userAge } = req.body
        let result = await User.findByIdAndUpdate({ _id: userId }, {
            userAge: userAge
        }, { new: false })
        res.status(200).json({
            data: result,
            message: "User Age Updated"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

export { createUser, fetchAllUsers, deleteUser, updateUser }