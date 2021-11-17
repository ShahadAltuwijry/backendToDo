const express = require("express");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on and running on port ${PORT}`);
});