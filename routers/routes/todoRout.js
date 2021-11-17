const { express } = require("express");
const { getAllTasks, addToDo } = require("../controllers/todoCont");

const mainRouter = express.Router();

mainRouter.post("/addtask", addToDo)
mainRouter.get("/", getAllTasks)


module.exports = mainRouter;