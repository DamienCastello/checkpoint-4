var express = require('express');
var router = express.Router();
const cartsController = require('../controllers/cartsController');

router.get('/', cartsController.index);

router.get('/:id', cartsController.show);

router.post('/', cartsController.create);

router.put('/:id', cartsController.update);

router.delete('/:id', cartsController.delete);

module.exports = router;
