const { express } = require("express");
const {
  getAllTasks,
  addToDo,
  updateTask,
  deleteTask,
} = require("../controllers/todoCont");

const mainRouter = express.Router();

mainRouter.post("/addtask", addToDo);
mainRouter.get("/", getAllTasks);
mainRouter.put("/edit/:name", updateTask);
mainRouter.delete("/deleteTask", deleteTask);

module.exports = mainRouter;
