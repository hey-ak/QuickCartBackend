const express = require('express');
const router = express.Router();
const { getProducts, getProduct, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { auth, admin } = require('../middleware/authMiddleware');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', auth, admin, addProduct);
router.put('/:id', auth, admin, updateProduct);
router.delete('/:id', auth, admin, deleteProduct);

module.exports = router;
