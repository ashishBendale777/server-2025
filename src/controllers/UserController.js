
import { User } from "../models/UserSchema.js";
import bcrypt from "bcryptjs";

//add user
let createUser = async (req, res) => {

    let reqData = req.body
    console.log("UserData", reqData);


    try {
        let salt = await bcrypt.genSalt(10)
        let encryptPassword = await bcrypt.hash(reqData.userPassword, salt)
        let result = await User.create({ ...reqData, userPassword: encryptPassword })
        res.status(200).json({
            data: result,
            message: "User Added Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

//user login
let doLogin = async (req, res) => {
    let { userEmail, userPassword } = req.body
    
    //1 is use exist
    let logedUser = await User.findOne({ userEmail })
    if (!logedUser) {
        return res.status(400).json({
            message: "User Not Register"
        })
    }

    //2 check password
    let isValidPasswprd = await bcrypt.compare(userPassword, logedUser.userPassword)
    if (!isValidPasswprd) {
        return res.status(400).json({
            message: "Invalid Password"
        })
    }

    return res.status(200).json({
        data: logedUser,
        message: "Login Successfull"
    })
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

export { doLogin, createUser, fetchAllUsers, deleteUser, updateUser }