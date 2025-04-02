import express from "express"
import bodyparser from "body-parser"
import { connectToDatabase } from "./src/DB/dbConnection.js"
import { userRouter } from "./src/routes/UserRoutes.js"


//crreate a server variable
let Server = express()

Server.use(bodyparser.json())


//Call DB Connection function
connectToDatabase()

//HTTP Methods GET POST PUT DELETE PATCH

Server.get("/", (req, res) => {
    res.send("Hello Ashu....")
})


Server.get("/allusers", (req, res) => {

    let users = [{
        uName: "ashish",
        uEmail: "ash@gmail.com",
        uMobile: 234234
    }, {
        uName: "ashish",
        uEmail: "ash@gmail.com",
        uMobile: 234234
    }, {
        uName: "ashish",
        uEmail: "ash@gmail.com",
        uMobile: 234234
    }]


    res.status(200).json(users)
})


Server.post("/adduser", (req, res) => {
    let reqdata = req.body
    console.log("DATA", reqdata);
    res.status(200).send("Done")
})

//connect routes with Server
Server.use("/api", userRouter)

///start the server
Server.listen(5000, () => {
    console.log("Server Started");
})