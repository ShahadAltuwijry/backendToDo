const mongoose = require("mongoose");

const toDosSchema = new mongoose.Schema({
  task: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("ToDos", toDosSchema);
