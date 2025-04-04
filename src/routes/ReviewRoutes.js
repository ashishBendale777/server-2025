import express from "express"

import { createReview, fetchAlReviews, fetchAlReviewsWithPopulate } from "../controllers/ReviewController.js"

let reviewRputer = express.Router()

reviewRputer.get("/fetchreviews", fetchAlReviewsWithPopulate)
reviewRputer.post("/createreviews", createReview)

export { reviewRputer }


