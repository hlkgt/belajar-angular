const productModel = require("../models/product.model");

const getProducts = async (req, res) => {
  const [product] = await productModel.getProducts();
  res.json({
    message: "berhasil mendapatkan data",
    datas: product,
    statusCode: 200,
  });
};

const getProductDetail = async (req, res) => {
  const { id } = req.params;
  const [product] = await productModel.getProductDetail(id);
  res.json({
    message: "berhasil mendapatkan data",
    data: product,
    statusCode: 200,
  });
};

const postProduct = async (req, res) => {
  const productList = req.body;
  await productModel.postProduct(productList);
  res.send({
    message: "Product Berhasil Ditambahkan",
    statusCode: 210,
  });
};

const updateProduct = async (req, res) => {
  const detailProduct = req.body;
  await productModel.updateProduct(detailProduct);
  res.send({
    message: "Product Berhasil Diupdate",
  });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productModel.deleteProduct(id);
  res.send({
    message: "Product Berhasil Dihapus",
    statusCode: 200,
  });
};

module.exports = {
  getProducts,
  getProductDetail,
  postProduct,
  updateProduct,
  deleteProduct,
};
