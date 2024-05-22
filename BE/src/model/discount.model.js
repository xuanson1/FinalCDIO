// "use strict";

const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema(
  {
    discount_name: {
      type: String,
      required: true,
    },
    discount_description: {
      type: String,
      required: true,
    },
    discount_type: {
      type: String,
      default: "fixed_amount",
    },
    discount_value: {
      type: Number,
      required: true,
    },
    discount_created: {
      type: Date,
      require: true,
    },
    discount_ended: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("discount", discountSchema);
