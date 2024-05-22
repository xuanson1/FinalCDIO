const mongoose = require("mongoose");
require("dotenv").config();

const configDatabase = () => {
  mongoose
    .connect(process.env.PATH_CONNECTDB)
    .then(() => console.log("Connected!"));
};
module.exports = configDatabase;
