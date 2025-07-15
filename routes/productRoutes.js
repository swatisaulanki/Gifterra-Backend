const express = require('express');
const router = express.Router();
const {
  getAllProductsController,
  createProductController,
  deleteProductController,
  updateProductController
} = require('../controllers/productController');

router.get('/', getAllProductsController);
router.post('/', createProductController);
router.delete('/:id', deleteProductController);
router.put('/:id', updateProductController); 

module.exports = router;
