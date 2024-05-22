const express = require("express");
const router = express.Router();
const create_discount = require("../controller/discount.controller");

router.post("/create", create_discount.postCreate_discount);
router.get("/maxValue", create_discount.maxValue);
router.get("/", create_discount.getDiscount);
router.get("/getId/:discountID", create_discount.getDiscountById);
router.put("/edit/getId/:discountID", create_discount.updateDiscountById);
router.delete("/delete/getId/:discountID", create_discount.deleteDiscountById);
router.get("/count", create_discount.countDiscount);

module.exports = router;
