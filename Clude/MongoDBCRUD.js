const express = require('express');
const mongoose=require('mongoose');
const bodyParser = require("body-parser");

mongoose.connect(
    "mongodb://admin:BIDprc49263@node58242-noderest-aungkoon-08-03-2004.proen.app.ruk-com.cloud:11789",
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
        const lastBook = await Book.findOne().sort({id:-1});
        const nextId=lastBook?lastBook.id+1 : 1;

        const book = new Book({
            id: nextId.Book,
            ...req.body,
        });
        await book.save();
        res.send(book);
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/books",async(req,res)=>{
    try{
        const books = await Book.find();
        res.send(books);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get("/books/:id",async(req,res)=>{
    try{
        const book =await Book.findOne({id:req.params.id});
        res.send(book);
    }catch(error){
        res.status(500).send(error);
    }
});

app.put("/books/:id",async(req,res)=>{
    try{
        const book = await Book.findOneAndUpdate({id:req.params.id},req.body,{
            new: true,
        });
        res.send(book);
    }catch(error){
        res.status(500).send(error)
    }
});

app.delete("/books/:id",async(req,res)=>{
    try{
        const book  = await Book.findOneAndDelete({id:req.params.id});
        res.send(book);
    }catch(error){
        res.status(500).send(error);
    }
});

const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})
