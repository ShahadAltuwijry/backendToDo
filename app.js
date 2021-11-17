const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const mainRouter = require("./routers/routes/todoRout");

const app = express();

app.use("/todolist", mainRouter);

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on and running on port ${PORT}`);
});
