// import mongoose module
const mongoose=require("mongoose");
// création schéma
const playerSchema = mongoose.Schema({
    name : String,
    age : Number,
    position : String,
    number : Number,
    image : String,
    // objet
    teamId:{type:mongoose.Schema.Types.ObjectId,
        ref:"Team"}
})

const player = mongoose.model("Player",playerSchema);

module.exports = player;
