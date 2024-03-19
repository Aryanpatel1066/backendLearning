const mongoose = require('mongoose');

//now create sudent scema

const studentScema = new mongoose.Schema({
    name : String,
    age : Number
})

//create corresponding collection in db
module.exports = mongoose.model("student",studentScema)