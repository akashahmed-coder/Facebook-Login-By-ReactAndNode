const express = require('express')
const mongoose = require('mongoose')
const User = require('./userschema')
const app = express()
require('dotenv').config({ path: './config.env' })
app.use(express.json())
const PORT = process.env.PORT || 4000
 
const DB = process.env.SECRET_KEY
const threat = {useNewUrlParser: true,useUnifiedTopology: true}

mongoose.connect(DB,threat).then(()=>{
    console.log("database connection successfull")
}).catch((e)=>{
    console.log(e)
})

app.post("/login",async(req,res)=>{
  try{
    const {email,password} = req.body
    if(!email || !password){
        res.status(421).json("Enter fill those input correctly")
    }
    
    const saveRegister = new User({email,password})
        const saved = await saveRegister.save();
        if(saved){
            res.status(201).send({message:"registration successfull"})
            console.log("saved")
     
        }
       else{
        res.status(421).json({error:"password doesnot match"})
        console.log("not saved")
       }

  }catch(err){
      console.log(err)
  }
})

if(process.env.NODE_ENV == "production"){
    app.use(express.static("my-app/build"))
}
app.listen(PORT,()=>{
console.log("server is running successfull at 4000")
})