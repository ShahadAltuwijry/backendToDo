const express = require("express");
const {
  getAllTasks,
  addToDo,
  updateTask,
  deleteTask,
  completed,
} = require("../controllers/todoCont");

const mainRouter = express.Router();

mainRouter.post("/todos", addToDo);
mainRouter.get("/todos", getAllTasks);
mainRouter.put("/todos/:name", updateTask);
mainRouter.delete("/todos", deleteTask);
mainRouter.put("/todos/:name", completed);

module.exports = mainRouter;
