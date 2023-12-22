const express = require('express');
const path  = require('path');
const bcrypt =require('bcrypt');


const app  = express();

// Use EJs as the view engine

app.set('view engine','ejs');

//Static File 
app.use(express.static("public"));

app.get("/",(req, res)=>{
    res.render("login");
})

app.get("/signup", (req,res)=>{
    res.render("SignUp");
})

const port  = 3000;
app.listen(port,()=>{
    console.log(`server running on port :${port}`);
})