import { Review } from "../models/RevieqSchema.js";


//mongoose ref schema using populate

let createReview = async (req, res) => {

    let reqData = req.body
    console.log("UserData", reqData);
    try {
        let result = await Review.create(reqData)
        res.status(200).json({
            data: result,
            message: "Review Added Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

let fetchAlReviews = async (req, res) => {

    try {
        let result = await Review.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}

let fetchAlReviewsWithPopulate = async (req, res) => {

    try {
        let result = await Review.find()
            .populate("productId")
            .populate("userId","userName userEmail")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}


export { createReview, fetchAlReviews,fetchAlReviewsWithPopulate }