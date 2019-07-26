const TicketCart = require('../models').TicketCart;

module.exports = {

  index: function (req, res, next) {
    TicketCart.findAll()
      .then((ticketsCarts) => res.json({ ticketsCarts }))
      .catch((error) => res.status(500).json({ error }));
  },

  show: function (req, res, next) {
    TicketCart.findByPk(req.params.id)
      .then((ticketCart) => res.json({ ticketCart }))
      .catch((error) => res.status(500).json({ error }));
  },


  update: function (req, res, next) {
    TicketCart.findByPk(req.params.id)
      .then((ticketCart) => {
        ticketCart.update({

          cartId: req.body.cartId,
          ticketId: req.body.ticketId,
          quantity: req.body.quantity
          

        })
          .then((updatedTicketCart) => { res.json({ ticketCart: updatedTicketCart }); })
          .catch((error) => res.status(500).json({ error }));
      });
  },

  create: function (req, res, next) {
    TicketCart.create({

        cartId: req.body.cartId,
        ticketId: req.body.ticketId,
        quantity: req.body.quantity

    })
      .then((ticketCart) => res.json({ ticketCart }))
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
  },

  delete: function (req, res, next) {
    TicketCart.findByPk(req.params.id)
      .then((ticketCart) => {
        ticketCart.destroy()
          .then((ticketCart) => { res.json({ message: 'ticketCart has been deleted !' }); })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error)
      );
  }

};