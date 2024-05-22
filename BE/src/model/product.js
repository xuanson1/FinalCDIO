const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
      min: 3,
      max: 50,
    },
    status: {
      type: Boolean,
      require: true,
    },
    productNumber: {
      type: Number,
      require: true,
      min: 0,
      max: 200000000,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
      },
    ],
    price: {
      type: Number,
      require: true,
      min: 0,
      max: 10000000,
    },
    imgURL: {
      type: String,
      require: true,
    },
    describe: {
      type: String,
      require: true,
    },
    expirationDate: {
      type: Date,
      require: true,
    },
    dateOfManufacture: {
      type: Date,
      require: true,
    },
    sold: {
      type: String,
      require: true,
    },
    nameCategory: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("product", productSchema);
