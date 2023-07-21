const connection = require("../config/database");

const getProducts = () => {
  const sql = "SELECT * FROM products";
  return connection.execute(sql);
};

const getProductDetail = (id) => {
  const sql = `SELECT * FROM products WHERE id=${id}`;
  return connection.execute(sql);
};

const postProduct = (productList) => {
  const sql = `INSERT INTO products (name_product,stock_product,quantity_product) VALUES ('${productList.name_product}',${productList.stock_product},${productList.quantity_product})`;
  return connection.execute(sql);
};

const updateProduct = (detailProduct) => {
  const sql = `UPDATE products SET name_product="${detailProduct.name_product}", stock_product=${detailProduct.stock_product}, quantity_product=${detailProduct.quantity_product} WHERE id=${detailProduct.id_product}`;
  return connection.execute(sql);
};

const deleteProduct = (productId) => {
  const sql = `DELETE FROM  products WHERE id=${productId}`;
  return connection.execute(sql);
};

module.exports = {
  getProducts,
  getProductDetail,
  postProduct,
  updateProduct,
  deleteProduct,
};
