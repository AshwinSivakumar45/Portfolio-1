const express = require("express");
const app=express();
const cors = require("cors")
app.use(cors());
app.use(express.json())
const Route = require("../back/Routes/route");
app.use(Route)

const port = 1000;


app.listen(port,()=>{
    console.log("Your Server is live in",port);
})