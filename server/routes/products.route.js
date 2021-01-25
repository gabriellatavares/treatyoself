const express = require('express')
const router = express.Router();
const controller = require('../controllers/products.controllers');

//display all products
router.get('/', controller.findAll);

//find one product by id
router.get('/:product_id', controller.findOne);

//add new product
router.post('/add', controller.add);

//update one product
router.post('/update', controller.update);

//delete one product by id
router.delete('/delete/:product_id', controller.remove);

module.exports = router; 