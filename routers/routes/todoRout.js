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
mainRouter.put("/todos/:id", updateTask);
mainRouter.delete("/todos/:id", deleteTask);
mainRouter.put("/todos/:id", completed);

module.exports = mainRouter;
