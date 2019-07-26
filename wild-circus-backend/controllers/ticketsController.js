const Ticket = require('../models').Ticket;

module.exports = {

    index: function (req, res, next) {
        Ticket.findAll()
            .then((tickets) => res.json({ tickets }))
            .catch((error) => res.status(500).json({ error }));
    },

    ticket: function (req, res, next) {
        Ticket.findByPk(req.params.id)
            .then((ticket) => res.json({ ticket }))
            .catch((error) => res.status(500).json({ error }));
    },


    update: function (req, res, next) {
        Ticket.findByPk(req.params.id)
            .then((ticket) => {
                ticket.update({

                    rate: req.body.rate,
                    price: req.body.price,
                    showId: req.body.showId


                })
                    .then((updatedTicket) => { res.json({ ticket: updatedTicket }); })
                    .catch((error) => res.status(500).json({ error }));
            });
    },

    create: function (req, res, next) {
        Ticket.create({

            rate: req.body.rate,
            price: req.body.price,
            showId: req.body.showId

        })
            .then((ticket) => res.json({ ticket }))
            .catch((error) => {
                console.log(error);
                res.status(500).json({ error });
            });
    },

    delete: function (req, res, next) {
        Ticket.findByPk(req.params.id)
            .then((ticket) => {
                ticket.destroy()
                    .then((ticket) => { res.json({ message: 'ticket has been deleted !' }); })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error)
            );
    }

};