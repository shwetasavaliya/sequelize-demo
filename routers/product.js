const express = require('express');
const router = new express.Router();

const controllerProduct = require('../controllers/product');

router.post('/create',controllerProduct.createProduct);
router.get('/getproduct',controllerProduct.getProduct);
router.delete('/deleteproduct',controllerProduct.deleteProduct);
router.put('/updateproduct',controllerProduct.updateproduct);

module.exports = router;