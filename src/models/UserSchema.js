import mongoose from "mongoose";

let UserSchema = mongoose.Schema({
    userName: { type: String },
    userEmail: { type: String },
    userGender: { type: String },
    userAge: { type: Number },
    userRegistrationDate: { type: Date },
    userPhoto: { type: String },
    userBio: { type: String },
    userRole: { type: String }
})

export const User = mongoose.model("user", UserSchema)