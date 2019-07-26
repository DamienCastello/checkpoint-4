const Cart = require('../models').Cart;

module.exports = {

  index: function (req, res, next) {
    Cart.findAll()
      .then((carts) => res.json({ carts }))
      .catch((error) => res.status(500).json({ error }));
  },

  show: function (req, res, next) {
    Cart.findByPk(req.params.id)
      .then((cart) => res.json({ cart }))
      .catch((error) => res.status(500).json({ error }));
  },


  update: function (req, res, next) {
    Cart.findByPk(req.params.id)
      .then((cart) => {
        cart.update({

          status: req.body.status,
          

        })
          .then((updatedCart) => { res.json({ cart: updatedCart }); })
          .catch((error) => res.status(500).json({ error }));
      });
  },

  create: function (req, res, next) {
    Cart.create({

        status: req.body.status,

    })
      .then((cart) => res.json({ cart }))
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
  },

  delete: function (req, res, next) {
    Cart.findByPk(req.params.id)
      .then((cart) => {
        cart.destroy()
          .then((cart) => { res.json({ message: 'cart has been deleted !' }); })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error)
      );
  }

};


