const mongoose = require('mongoose')

const userScema = new mongoose.Schema({
   
    email:{

        type:String,
     
    },
    
    password:{

        type:String
     
    } ,
   date:{
       type:String,
       default:Date.now
   }
    
})

const User = mongoose.model('HACK',userScema)

module.exports = User