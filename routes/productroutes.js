//=================================================> require
const express = require('express');
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  singleProduct,
} = require('../controllers/productcontroler');

//===================================================> init router

const router = express.Router();

//====================================================> use router
//=================================================> get all product
router.get('/', getAllProduct);
router.get('/:id', singleProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

//=================================================> export router

module.exports = router;
