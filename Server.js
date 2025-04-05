import express from "express"
import bodyparser from "body-parser"
import { connectToDatabase } from "./src/DB/dbConnection.js"
import { userRouter } from "./src/routes/UserRoutes.js"
import { productRouter } from "./src/routes/ProductRoutes.js"
import { reviewRputer } from "./src/routes/ReviewRoutes.js"
import { orderRouter } from "./src/routes/OrderRoutes.js"


//crreate a server variable
let Server = express()

Server.use(bodyparser.json())


//Call DB Connection function
connectToDatabase()

//HTTP Methods GET POST PUT DELETE PATCH

Server.get("/", (req, res) => {
    res.send("Hello Ashu....")
})

//connect routes with Server
Server.use("/api", userRouter)
Server.use("/api", productRouter)
Server.use("/api", reviewRputer)
Server.use("/api", orderRouter)

///start the server
Server.listen(5000, () => {
    console.log("Server Started");
})