const Show = require('../models').Show;

module.exports = {

  index: function (req, res, next) {
    Show.findAll()
      .then((shows) => res.json({ shows }))
      .catch((error) => res.status(500).json({ error }));
  },

  show: function (req, res, next) {
    Show.findByPk(req.params.id)
      .then((show) => res.json({ show }))
      .catch((error) => res.status(500).json({ error }));
  },


  update: function (req, res, next) {
    Show.findByPk(req.params.id)
      .then((show) => {
        show.update({

          showDate: req.body.showDate
          

        })
          .then((updatedShow) => { res.json({ show: updatedShow }); })
          .catch((error) => res.status(500).json({ error }));
      });
  },

  create: function (req, res, next) {
    Show.create({

        showDate: req.body.showDate

    })
      .then((show) => res.json({ show }))
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
  },

  delete: function (req, res, next) {
    Show.findByPk(req.params.id)
      .then((show) => {
        show.destroy()
          .then((show) => { res.json({ message: 'show has been deleted !' }); })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error)
      );
  }

};