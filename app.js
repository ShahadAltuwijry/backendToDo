const express = require("express");
const dotenv = require("dotenv");
const mainRouter = require("./routers/routes/todoRout");
dotenv.config();

const app = express();

app.use(express.json());
app.use("/todolist", mainRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on and running on port ${PORT}`);
});
