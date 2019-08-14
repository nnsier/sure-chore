const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: {
    type: String,
    required: "A post needs a title."
  },
  description: {
    type: String,
    required: "A post needs a description of what the task is."
  },
  completed: {
    type: Boolean,
    required: "It must be completed or not."
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: "A post must have a sender."
  }
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;