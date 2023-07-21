const express = require("express");
const productRoute = require("./src/routes/product.route");
const app = express();
const port = 5800;

app.use(express.json());

app.use((req, res, next) => {
  const reqUser = req.path;
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  console.log(`Terdapat permintaan pada ${reqUser}`);
  next();
});

app.use("/api/product", productRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
