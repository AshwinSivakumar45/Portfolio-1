const express =  require("express");
const Route = express.Router();
const Feedback = require("../Controllers/Controller")

Route.post("/message",Feedback)

module.exports = Route;