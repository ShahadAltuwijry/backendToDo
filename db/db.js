const mongoose = require("mongoose");
const dotenv = require("dotenv");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

dotenv.config();
const DB = process.env.DB;

mongoose.connect(`mongodb://localhost:27017/${DB}`, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
