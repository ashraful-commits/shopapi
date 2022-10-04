const path = require('path');
const fs = require('fs');

//============================================================> get all product

const getAllProduct = (req, res) => {
  const product = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/product.json'))
  );
  res.status(200).json(product);
};
//============================================================>  create new product
const createProduct = (req, res) => {
  console.log(req.body);
  const product = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/product.json'))
  );
  const {
    name,
    regular_price,
    sale_price,
    photo,
    catagory,
    tags,
    stock,
  } = req.body;
  product.push({
    id: product.length + 1,
    name: name,
    regular_price: regular_price,
    sale_price: sale_price,
    photo: req.file.filename,
    catagory: catagory,
    tags: tags,
    stock: stock,
    action: true,
    status: 'upload',
  });
  fs.writeFileSync(
    path.join(__dirname, '../db/product.json'),
    JSON.stringify(product)
  );
  res.status(200).json({
    message: 'Create product Successfully',
  });
};

//============================================================> update data
const updateProduct = (req, res) => {
  const product = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/product.json'))
  );
  const { name, status, slug, catagory } = req.body;
  const id = req.params.id;
  product[product.findIndex((data) => data.id == id)] = {
    ...product[product.findIndex((data) => data.id == id)],
    name: name,
    status: status,
    slug: slug,
    catagory: catagory,
  };
  fs.writeFileSync(
    path.join(__dirname, '../db/product.json'),
    JSON.stringify(product)
  );
  res.status(200).json({
    message: 'Create product Successfully',
  });
};
//============================================================> delete product
const deleteProduct = (req, res) => {
  const product = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/product.json'))
  );
  const id = req.params.id;
  const afterdeletedata = product.filter((data) => data.id != id);
  fs.writeFileSync(
    path.join(__dirname, '../db/product.json'),
    JSON.stringify(afterdeletedata)
  );
  res.status(200).json({
    message: 'Delete Successfully',
  });
};
//============================================================> single data show
const singleProduct = (req, res) => {
  const product = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/product.json'))
  );
  const id = req.params.id;
  const singledata = product.find((data) => data.id == id);
  res.status(200).json(singledata);
};

//=================================================================================//>
//=================================================================================//> api complate
//=================================================================================//>

//==================================================================================> export module

module.exports = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  singleProduct,
};
