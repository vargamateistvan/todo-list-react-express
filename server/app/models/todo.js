const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema({
  // _id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   index: true,
  //   required: true,
  //   auto: true,
  // },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  closedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Todo", Todo);
