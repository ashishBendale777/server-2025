import mongoose from "mongoose";

let UserSchema = mongoose.Schema({
    userName: {
        type: String
    },
    userEmail: {
        type: String
    },
    userGender: {
        type: String,
        enum: {
            values: ["Male", "Female", "Others"],
            message: "select correct gender"
        }
    },
    userPassword: {
        type: String
    },
    userAge: {
        type: Number,
    },
    userRegistrationDate: {
        type: Date,
        default: new Date()
    },
    userPhoto: { type: String, default: "PHOTO" },
    userBio: {
        type: String,
        maxlength: [180, "Bio should be less than 180 Char"]
    },
    userRole: { type: String }
})

export const User = mongoose.model("user", UserSchema)