const Product = require("./../model/product");
const Category = require("./../model/category");
// Post Product
const postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Thêm sản phẩm thành công",
      data: { product },
    });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({
        success: false,
        message: "Product fail to add",
        data: err,
      });
  }
};

const getProduct = async (req, res) => {
  try {
    let categoryTest = "";
    const product = await Product.find();
    for (const products of product) {
      //console.log(products.category);
      const category = await Category.findById(products.category);
      //console.log(category);
      categoryTest = category.categoryName;
      //console.log(categoryTest);
      products.nameCategory = categoryTest;
    }
    console.log(product);
    res.status(200).json({
      status: "success",
      length: product.length,
      data: { product },
    });
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "Product get unsuccessfully",
        data: err,
      });
  }
};
const getProductId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Tìm sản phẩm theo id thất bại",
      error: err.message,
    });
  }
};
const getProductTime = async (req, res) => {
  try {
    let date = [];
    const formatDate = (dateStr) => {
      if (typeof dateStr === "string") {
        const parts = dateStr.split("-");
        if (parts.length === 3) {
          const [year, month, day] = parts;
          return `${year}-${month}-${day}`;
        }
      }
      return "";
    };
    const product = await Product.findById(req.params.id);
    console.log(product.expirationDate);
    const expirationDate =
      product.expirationDate instanceof Date
        ? product.expirationDate.toISOString().split("T")[0]
        : product.expirationDate;
    const dateOfManufacture =
      product.dateOfManufacture instanceof Date
        ? product.dateOfManufacture.toISOString().split("T")[0]
        : product.dateOfManufacture;
    const formattedExpirationDate = formatDate(expirationDate);
    const formattedDateOfManufacture = formatDate(dateOfManufacture);
    date = [formattedExpirationDate, formattedDateOfManufacture];
    console.log(expirationDate);
    res.status(200).json({
      status: "success",
      data: { formattedExpirationDate, formattedDateOfManufacture },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: "Tìm sản phẩm theo id thất bại",
      error: err.message,
    });
  }
};
const putProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "update success",
      data: product,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Sửa sản phẩm theo id thất bại",
      error: err.message,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "delete success",
      data: { product },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Xóa sản phẩm theo id thất bại",
      error: err.message,
    });
  }
};

const getCount = async (req, res) => {
  const count = await Product.countDocuments({});
  res.status(200).json({ success: true, data: count });
};

const getPointProduct = async (req, res) => {
  const products = await Product.find();
  const max = products[0];
  for (let i = 0; i < products.length; i++) {
    if (products[i].sold > max) {
      max = products[i];
    }
  }
  res.status(200).json({ success: true, data: max });
};
module.exports = {
  postProduct,
  getProduct,
  getProductId,
  putProduct,
  deleteProduct,
  getCount,
  getPointProduct,
  getProductTime,
};
