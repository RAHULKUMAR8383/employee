const connection=require("./db/database")
const express= require('express');
const cors= require('cors');
const bodyParser= require('body-parser')

var app=express();

app.use(bodyParser.json())
app.use(cors());

// IMport routes

const todos=require('./routes/empRouter');

//routes middleware
app.use('/api',todos)


const port=7000;
app.listen(port, ()=>{
    console.log("listening")
});   

