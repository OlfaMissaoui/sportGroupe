// import mongoose module
const mongoose=require("mongoose");
// création schéma
const matchSchema = mongoose.Schema ({
    scoreOne :Number,
    scoreTwo :Number,
    teamOne :String,
    teamTwo :String,
})

const match = mongoose.model("Match",matchSchema);
// export le model Match dans le variable match
module.exports = match;