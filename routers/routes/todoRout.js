const express = require("express");
const {
  getAllTasks,
  addToDo,
  updateTask,
  deleteTask,
  completed,
} = require("../controllers/todoCont");

const mainRouter = express.Router();

mainRouter.post("/", addToDo);
mainRouter.get("/", getAllTasks);
mainRouter.put("/:name", updateTask);
mainRouter.delete("/", deleteTask);
mainRouter.put("/:name", completed);

module.exports = mainRouter;
