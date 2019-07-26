const User = require('../models').User;

module.exports = {

  index: function (req, res, next) {
    User.findAll()
      .then((users) => res.json({ users }))
      .catch((error) => res.status(500).json({ error }));
  },

  show: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => res.json({ user }))
      .catch((error) => res.status(500).json({ error }));
  },


  update: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => {
        user.update({

          email: req.body.email,
          password: req.body.password,
          cartId: req.body.cartId
          

        })
          .then((updatedUser) => { res.json({ user: updatedUser }); })
          .catch((error) => res.status(500).json({ error }));
      });
  },

  create: function (req, res, next) {
    User.create({

        email: req.body.email,
        password: req.body.password,
        cartId: req.body.cartId


    })
      .then((user) => res.json({ user }))
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
  },

  delete: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => {
        user.destroy()
          .then((user) => { res.json({ message: 'user has been deleted !' }); })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error)
      );
  }

};


