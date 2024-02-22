// import mongoose module
const mongoose=require("mongoose");
// création schéma
const teamSchema = mongoose.Schema({
    name: String,
    stadium: String,
    owner: String,
    foundation: Number,
    // un tableau
players: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Player",
    }]
})
const team = mongoose.model("Team",teamSchema);
// export le model Match dans le variable team
module.exports = team;