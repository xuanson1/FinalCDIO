const mongoose = require("mongoose");
const categorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
    },
  },
  { versionKey: false }
);
module.exports = mongoose.model("category", categorySchema);
