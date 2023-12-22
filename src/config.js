const  mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://nofilkhan037:naufel12345@cluster0.c0kciix.mongodb.net/?retryWrites=true&w=majority");


connect.then(() =>{
    console.log("Database Connected Successfully");
})
.catch(()=>{
    console.log("Failed to connect Database")
})

const LoginSchema = new mongoose.Schema({
    name:{
        type: string,
        required: true
    },
    password:{
        type:string,
        required:true
    }
})

const collection = new mongoose.model("SignIn",LoginSchema );
 module.exports = Collection;