var express = require('express');
var router = express.Router();
const showsController = require('../controllers/showsController');

router.get('/', showsController.index);

router.get('/:id', showsController.show);

router.post('/', showsController.create);

router.put('/:id', showsController.update);

router.delete('/:id', showsController.delete);

module.exports = router;