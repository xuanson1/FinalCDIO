const discount = require("../model/discount.model.js");

exports.postCreate_discount = async (req, res) => {
  try {
    console.log(req.body);
    const newDiscount = new discount({
      discount_name: req.body.discount_name,
      discount_description: req.body.discount_description,
      discount_type: req.body.discount_type,
      discount_value: req.body.discount_value,
      discount_created: req.body.discount_created,
      discount_ended: req.body.discount_ended,
    });
    const saveDiscount = await newDiscount.save();
    res.status(201).json({ success: true, data: saveDiscount });
  } catch (error) {
    throw new Error(error);
  }
};

exports.getDiscount = async (req, res) => {
  const newDiscount = await discount.find();
  return res.json({ success: true, data: newDiscount });
};

exports.getDiscountById = async (req, res) => {
  const discountId = req.params.discountID;
  console.log(discountId);
  const Discount = await discount.findById(discountId);
  res.status(200).json({ success: true, data: Discount });
};

exports.updateDiscountById = async (req, res) => {
  const updateDiscount = await discount.findByIdAndUpdate(
    req.params.discountID,
    req.body
  );
  res.status(204).json({ success: true, data: updateDiscount });
};

exports.deleteDiscountById = async (req, res) => {
  const discountId = req.params.discountID;
  await discount.findByIdAndDelete(discountId);
  res.status(204).json({ success: true, data: [] });
};


exports.countDiscount = async (req, res) => {
  const count = await discount.countDocuments({});
  console.log(count);
  res.status(200).json({ success: true, data: count });
};

exports.maxValue = async (req, res) => {
  const Discount = await discount.find();
  if (Discount.length == 0) {
    return res.status(404);
  }
  let maxPoint = Discount[0];
  for (let i = 0; i < Discount.length; i++) {
    if (Discount[i].discount_value > maxPoint) {
      maxPoint = Discount[i];
    }
  }
  return res.status(200).json({ success: true, data: maxPoint });
};
