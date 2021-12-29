/* const { append } = require("express/lib/response");
const { Module } = require("module"); */
const express=require("express")
const app = express();

const admin = require("./admin");
const student = require("./student");
const users = require("./users");

app.use("/admin",admin)
app.use("/student",student)
app.use("/user",users) 

module.exports=app




