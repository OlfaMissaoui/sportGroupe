// import mongoose module
const mongoose=require("mongoose");
var  uniqueValidator  =  require ( 'mongoose-unique-validator' ) ;
// création schéma
const userSchema =  mongoose.Schema({
    firstName:String,
    lastName: String,
    email:{type:String, unique : true},
    password: String,
    role:String,
    avatar:{type:String},
})
userSchema.plugin(uniqueValidator);
const user = mongoose.model("User",userSchema);
// export le model Match dans le variable 

module.exports = user;