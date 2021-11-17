const { express } = require("express");

const mainRouter = express.Router();

mainRouter.post("/addtask", addToDo)


module.exports = mainRouter;