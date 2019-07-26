var express = require('express');
var router = express.Router();
const ticketsCartsController = require('../controllers/ticketsCartsController');

router.get('/', ticketsCartsController.index);

router.get('/:id', ticketsCartsController.show);

router.post('/', ticketsCartsController.create);

router.put('/:id', ticketsCartsController.update);

router.delete('/:id', ticketsCartsController.delete);

module.exports = router;