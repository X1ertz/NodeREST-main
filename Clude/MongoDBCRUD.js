const express = require('express');
const mongoose=require('mongoose');
const bodyParser = require("body-parser");

mongoose.connect(
    ""
    {
        userNewUrlParser:true,
        useUnifiedTopology: true,
    }
);

const Book = mongoose.model("Book",{
    id:{
        type:Number,
        unique: true,
        require: true,
    },
    title: String,
    author: String,


});
const app = expess();
app.use(bodyParser.json());

app.post("/books",async(req,res)=>{
    try{

    }
});
