const express = require("express");
const mongoose = require("mongoose");
const routes=require("./Routes/index");
const cors = require("cors")

const app=express();

const host="localhost";
const port=2021;

app.use(cors());
app.options("*",cors())

app.use(express.json())
app.use('/',routes);

mongoose.connect("mongodb+srv://Himanshu:chauhanji22@cluster0.yol79.mongodb.net/Zomato?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true })
.then(res=>{
    app.listen(port,host,()=>{
    console.log(`Server is running on ${host}:${port}`);
    })
})
.catch(err =>console.log(err));
