const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.y6ozh.mongodb.net/todoApp");

const todoSchema = mongoose.Schema({
    title :String,
    description : String,
    completes : Boolean
})

const todo = new mongoose.model('todos',todoSchema)

module.exports = {
    todo
}
