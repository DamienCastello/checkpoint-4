var express = require('express');
var router = express.Router();
const ticketsController = require('../controllers/ticketsController');

router.get('/', ticketsController.index);

// router.get('/:id', ticketsController.show);

router.post('/', ticketsController.create);

router.put('/:id', ticketsController.update);

router.delete('/:id', ticketsController.delete);

module.exports = router;